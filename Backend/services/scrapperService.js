const axios = require("axios");

const SCRAPER_API = process.env.SCRAPER_API;

const runScraper = async () => {
  try {
    console.log("🚀 Starting Scraper API Call...");

    const scraperResponse = await axios.get(SCRAPER_API);

    if (scraperResponse.status === 200) {
      console.log("✅ Scraper Completed, Fetching Updated Properties...");
    } else {
      console.log("❌ Scraper API Failed");
      return { success: false, error: "Scraper API Failed" };
    }
  } catch (error) {
    console.error("❌ Error Running Scraper:", error);
    return { success: false, error: "Server Error" };
  }
};

module.exports = { runScraper };
