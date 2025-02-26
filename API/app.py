
from fastapi import FastAPI, HTTPException,  BackgroundTasks
from scrapr import run_scraper
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from datetime import datetime
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Atlas connection
MONGO_URI = "mongodb+srv://abdullbasit7446:3JiTkQl8ErTFOiP2@seloger1.5hxkg.mongodb.net/?retryWrites=true&w=majority&appName=seloger1"
client = MongoClient(MONGO_URI)
db = client["seloger_db"]
properties_collection = db["properties"]
leads_collection = db["leads"]
delayed_leads_collection = db["delayed_leads"]

# FastAPI Endpoints
@app.post("/start-scraping")
async def start_scraping(background_tasks: BackgroundTasks):
    """Endpoint to start the scraping process in the background."""
    background_tasks.add_task(run_scraper)
    return {"status": "started", "message": "Scraping process started in the background."}

@app.get("/scraping-status")
async def scraping_status():
    """Endpoint to check the status of the scraping process."""
    leads_count = properties_collection.count_documents({})
    return {"status": "success", "leads_count": leads_count}



@app.get("/leads")
async def get_leads():
    """Endpoint to retrieve all scraped leads."""
    leads = list(properties_collection.find({}, {"_id": 0}))
    return {"status": "success", "leads": leads}

@app.get("/delayed-leads")
async def get_delayed_leads():
    """Endpoint to retrieve all delayed leads."""
    delayed_leads = list(delayed_leads_collection.find({}, {"_id": 0}))
    return {"status": "success", "delayed_leads": delayed_leads}


@app.get("/leads/today")
async def get_today_leads():
    """Retrieve leads added today."""
    today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
    leads = list(properties_collection.find({"created_at": {"$gte": today}}, {"_id": 0}))
    return {"status": "success", "today_leads": leads}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

