import sqlite3
import requests
from bs4 import BeautifulSoup
import random
import time
from fake_useragent import UserAgent
import re

BASE_URL = "https://www.seloger-construire.com"
LISTING_URL = f"{BASE_URL}/projet-construction/maison-terrain/pays/france"
DB_FILE = "seloger_properties.db"

PROXY_LIST = [
    "http://8598bdc273a3fa603e70:ea0531b98630b3e6@gw.dataimpulse.com:823",
]

def get_headers():
    ua = UserAgent()
    return {"User-Agent": ua.random, "Accept-Language": "en-US,en;q=0.9", "Referer": "https://www.google.com/"}

def get_proxy():
    return {"http": random.choice(PROXY_LIST), "https": random.choice(PROXY_LIST)}

def create_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()

    cursor.execute("""CREATE TABLE IF NOT EXISTS leads (phone_number TEXT PRIMARY KEY)""")
    cursor.execute("""CREATE TABLE IF NOT EXISTS properties (
        property_id TEXT PRIMARY KEY, phone_number TEXT, image_url TEXT, description TEXT, 
        address TEXT, price TEXT, website_name TEXT, expired BOOLEAN)""")
    
    conn.commit()
    conn.close()

def extract_property_id(detail_url):
    match = re.search(r'/(\d+)/$', detail_url)
    return match.group(1) if match else "N/A"

def check_phone_number_exists(phone_number):
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("SELECT phone_number FROM leads WHERE phone_number = ?", (phone_number,))
    exists = cursor.fetchone() is not None
    conn.close()
    return exists

def save_to_db(property_data):
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    phone_number = property_data["phone_number"]
    
    if not check_phone_number_exists(phone_number):
        cursor.execute("INSERT OR IGNORE INTO leads (phone_number) VALUES (?)", (phone_number,))
        cursor.execute("""INSERT OR IGNORE INTO properties (property_id, phone_number, image_url, 
                          description, address, price, website_name, expired) 
                          VALUES (?, ?, ?, ?, ?, ?, ?, ?)""", 
                       (property_data["property_id"], phone_number, property_data["image_url"], 
                        property_data["description"], property_data["address"], 
                        property_data["price"], property_data["website_name"], property_data["expired"]))
        conn.commit()
        print(f"✅ Lead saved: {phone_number}")
    
    conn.close()

def scrape_detail_page(detail_url):
    headers = get_headers()
    proxy = get_proxy()

    try:
        response = requests.get(detail_url, headers=headers, proxies=proxy, timeout=15)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")

        property_id = extract_property_id(detail_url)
        phone_number_tag = soup.find('a', class_='phoneBtnInlineNumberLink')
        phone_number = phone_number_tag['href'].replace('tel:', '').strip() if phone_number_tag else "N/A"

        image_tag = soup.find('li', class_='detailAnnonceCarouselItem')
        image_url = image_tag['data-src'] if image_tag and 'data-src' in image_tag.attrs else "N/A"

        description_div = soup.find('div', class_='detailAnnonceDescriptionContent')
        description = description_div.get_text(strip=True) if description_div else "N/A"

        location_tag = soup.find('span', class_='detailAnnonceInfosCity')
        address = location_tag.get_text(strip=True) if location_tag else "N/A"

        price_tag = soup.find('p', class_='detailAnnonceInfosPrice')
        price_text = price_tag.get_text(strip=True) if price_tag else "N/A"
        extracted_price = re.search(r'[\d\s]+€', price_text).group().replace(" ", "") if price_tag else "N/A"

        property_data = {
            "property_id": property_id, "phone_number": phone_number, "image_url": image_url,
            "description": description, "address": address, "price": extracted_price,
            "website_name": "Seloger", "expired": False
        }

        save_to_db(property_data)  # Save immediately
        return property_data

    except requests.exceptions.RequestException as e:
        print(f"❌ Error scraping detail page {detail_url}: {e}")
        return None

def scrape_all_pages():
    leads_count = 0
    max_leads = 600
    current_url = LISTING_URL
    page_number = 1
    max_retries = 3

    while current_url and leads_count < max_leads:
        headers = get_headers()
        proxy = get_proxy()
        print(f"\n🟢 Scraping Listing Page {page_number}: {current_url}")

        retry_attempts = 0
        while retry_attempts < max_retries:
            try:
                response = requests.get(current_url, headers=headers, proxies=proxy, timeout=15)
                response.raise_for_status()
                soup = BeautifulSoup(response.text, "html.parser")

                listings = soup.find_all('a', class_='AnnounceCard_announceCardSlider__CaJaL')
                for listing in listings:
                    detail_link = listing.get('href')
                    if detail_link:
                        detail_url = f"{BASE_URL}{detail_link}"
                        property_details = scrape_detail_page(detail_url)
                        
                        if property_details:
                            leads_count += 1
                            print(f"✅ Lead {leads_count} scraped and saved.")
                            
                            if leads_count >= max_leads:
                                print("🎯 600 leads scraped successfully!")
                                return

                    time.sleep(random.uniform(1, 3))

                next_page_link = soup.find('a', {'data-testid': 'gsl.uilib.Paging.nextButton'})
                if next_page_link and 'href' in next_page_link.attrs:
                    current_url = f"{BASE_URL}{next_page_link['href'].strip()}"
                    page_number += 1
                else:
                    print("\n✅ No more pages found. Scraping complete.")
                    return

                break  

            except requests.exceptions.RequestException as e:
                retry_attempts += 1
                print(f"❌ Error scraping {current_url}: {e}. Retrying ({retry_attempts}/{max_retries})...")
                time.sleep(5)  

        if retry_attempts == max_retries:
            print(f"⚠️ Skipping page {page_number} after {max_retries} failed attempts.")
            next_page_link = soup.find('a', {'data-testid': 'gsl.uilib.Paging.nextButton'})
            if next_page_link and 'href' in next_page_link.attrs:
                current_url = f"{BASE_URL}{next_page_link['href'].strip()}"
                page_number += 1
            else:
                break  

    print(f"\n🏁 Scraping complete. Total leads scraped: {leads_count}")

def run_scraper():
    create_db()
    scrape_all_pages()
    print("\n✅ Scraping finished.")

if __name__ == "__main__":
    run_scraper()
