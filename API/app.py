from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from datetime import datetime, timedelta, timezone
from typing import Literal
from pydantic import BaseModel
from scraper import scrape_all_pages
from contextlib import asynccontextmanager
import os
from bson import ObjectId

# 🔒 Secure MongoDB Connection URI (Use Environment Variables)
MONGO_URI = "mongodb+srv://abdullbasit7446:3JiTkQl8ErTFOiP2@seloger1.5hxkg.mongodb.net/?retryWrites=true&w=majority&appName=seloger1"

# Use FastAPI lifespan to manage MongoDB connection
@asynccontextmanager
async def lifespan(app: FastAPI):
    global client, db, properties_collection, leads_collection, delayed_leads_collection
    print("🔌 Connecting to MongoDB...")
    
    try:
        client = MongoClient(MONGO_URI)
        db = client["seloger_db"]
        properties_collection = db["properties"]
        leads_collection = db["leads"]
        delayed_leads_collection = db["delayed_leads"]
        yield  # App runs while this context is active
    finally:
        print("❌ Closing MongoDB connection...")
        client.close()

app = FastAPI(lifespan=lifespan)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🏗️ FastAPI Endpoints

@app.get("/")
async def health_check():
    """Health check endpoint."""
    return {"status": "Hello from Seloger Scraper API"}

@app.get("/start-scraper")
async def start_scraper(background_tasks: BackgroundTasks):
    """Starts the scraper in the background."""
    background_tasks.add_task(scrape_all_pages)
    return {"message": "Scraper started in the background"}

@app.get("/scraping-status")
async def scraping_status():
    """Check the number of scraped leads."""
    try:
        leads_count = properties_collection.count_documents({})
        return {"status": "success", "leads_count": leads_count}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/leads")
async def get_leads():
    """Retrieve all scraped leads."""
    try:
        leads = list(properties_collection.find({}, {"_id": 0}))
        return {"status": "success", "leads": leads}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/delayed-leads")
async def get_delayed_leads():
    """Retrieve all delayed leads."""
    try:
        delayed_leads = list(delayed_leads_collection.find({}, {"_id": 0}))
        return {"status": "success", "delayed_leads": delayed_leads}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/today-leads")
async def get_today_new_leads():
    """Fetch leads added today based on expiration_date - 7 days."""
    try:
        now = datetime.now(timezone.utc)
        start_of_day = datetime(now.year, now.month, now.day, tzinfo=timezone.utc)
        end_of_day = start_of_day.replace(hour=23, minute=59, second=59)

        today_new_leads = list(leads_collection.find({
            "expiration_date": {
                "$gte": start_of_day + timedelta(days=7),
                "$lte": end_of_day + timedelta(days=7)
            }
        }))

        # Convert ObjectId to string for JSON response
        for lead in today_new_leads:
            lead["_id"] = str(lead["_id"])

        return {"count": len(today_new_leads), "leads": today_new_leads}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/move-delayed-leads")
async def move_delayed_leads():
    """Moves expired delayed leads to the main leads collection."""
    try:
        now = datetime.now(timezone.utc)

        expired_leads = list(delayed_leads_collection.find({"expiration_date": {"$lt": now}}))

        if not expired_leads:
            return {"status": "no expired leads", "moved_leads": []}

        moved_leads = []

        for lead in expired_leads:
            phone_number = lead.get("phone_number")

            # Check for duplicates
            if leads_collection.find_one({"phone_number": phone_number}):
                continue

            # Set a new expiration date (7 days from now)
            lead["expiration_date"] = now + timedelta(days=7)

            # Insert into leads collection
            leads_collection.insert_one({"phone_number": phone_number, "expiration_date": lead["expiration_date"]})
            properties_collection.insert_one(lead)  # Store full lead details

            moved_leads.append(lead)

            # Remove from delayed collection
            delayed_leads_collection.delete_one({"_id": lead["_id"]})

        return {"status": "success", "moved_leads": moved_leads}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/remove-expired-leads")
async def remove_expired_leads():
    """Removes expired leads from the database."""
    try:
        now = datetime.now(timezone.utc)
        expired_leads = list(leads_collection.find({"expiration_date": {"$lt": now}}))

        if not expired_leads:
            return {"status": "no expired leads", "deleted_leads": []}

        deleted_leads = []

        for lead in expired_leads:
            phone_number = lead.get("phone_number")
            leads_collection.delete_one({"_id": lead["_id"]})
            properties_collection.delete_one({"phone_number": phone_number})
            deleted_leads.append(phone_number)

        return {"status": "success", "deleted_leads": deleted_leads}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
