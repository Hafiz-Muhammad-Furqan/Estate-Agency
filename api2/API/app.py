# from fastapi import FastAPI, Request
# from fastapi.responses import HTMLResponse, JSONResponse
# from jinja2 import Environment, FileSystemLoader
# import pandas as pd
# import threading
# import os
# import time
# from scraper import run_scraper  # Import your scraper script

# app = FastAPI()

# # Setup Jinja2 templating
# templates = Environment(loader=FileSystemLoader("templates"))

# # Global variable for storing results
# scraped_data = pd.DataFrame()

# CSV_PATH = r"Cleaned_Seloger_Properties.csv"

# @app.get("/", response_class=HTMLResponse)
# async def home(request: Request):
#     template = templates.get_template("index.html")
#     return template.render(request=request, data=scraped_data.to_dict(orient="records"))

# @app.get("/scrape/")
# async def scrape():
#     global scraped_data
#     def run():
#         global scraped_data
#         scraped_data = run_scraper()  # Run scraper function
#     threading.Thread(target=run).start()
#     return {"status": "Scraping started"}

# @app.get("/load_csv/")
# async def load_csv():
#     try:
#         df = pd.read_csv(CSV_PATH)
#         return JSONResponse(content=df.to_dict(orient="records"))
#     except Exception as e:
#         return {"error": str(e)}

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000)

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from jinja2 import Environment, FileSystemLoader
import pandas as pd
import threading
import os
import time
from scraper import run_scraper  # Import your scraper script

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Setup Jinja2 templating
templates = Environment(loader=FileSystemLoader("templates"))

# Global variable for storing results
scraped_data = pd.DataFrame()

CSV_PATH = r"Seloger_Properties.csv"

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    template = templates.get_template("index.html")
    return template.render(request=request, data=scraped_data.to_dict(orient="records"))

@app.get("/scrape/")
async def scrape():
    global scraped_data
    def run():
        global scraped_data
        scraped_data = run_scraper()  # Run scraper function
    threading.Thread(target=run).start()
    return {"status": "Scraping started"}

@app.get("/load_csv/")
async def load_csv():
    try:
        df = pd.read_csv(CSV_PATH)
        return JSONResponse(content=df.to_dict(orient="records"))
    except Exception as e:
        return {"error": str(e)}

@app.get("/filter_fresh/")
async def filter_fresh():
    try:
        df = pd.read_csv(CSV_PATH)

        # Filter rows with Status = 'FRESH'
        fresh_rows = df[df['Status'] == 'FRESH']

        # If no fresh rows left
        if fresh_rows.empty:
            return {"error": "No fresh data available."}

        # Select first 2 fresh rows and update status to 'CHANGE'
        rows_to_change = fresh_rows.head(2)
        df.loc[rows_to_change.index, 'Status'] = 'CHANGE'

        # Filter remaining fresh rows and unique phone numbers
        remaining_fresh = df[df['Status'] == 'FRESH']
        unique_phone_rows = remaining_fresh.drop_duplicates(subset=['Phone Number'])

        # Save updated dataset
        df.to_csv(CSV_PATH, index=False)

        # Return filtered results
        return JSONResponse(content=unique_phone_rows.to_dict(orient="records"))

    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

