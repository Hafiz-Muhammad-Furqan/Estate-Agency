// const axios = require("axios");

// const SCRAPER_API = process.env.SCRAPER_API;
// const SCRAPER_API_2 = process.env.SCRAPER_API_2;

// const runScraper = async () => {
//   try {
//     console.log("🚀 Starting Scraper API Call...");

//     const scraperResponse = await axios.get(SCRAPER_API);

//     if (scraperResponse.status === 200) {
//       console.log("✅ Scraper Completed, Fetching Updated Properties...");
//     } else {
//       console.log("❌ Scraper API Failed");
//       return { success: false, error: "Scraper API Failed" };
//     }
//   } catch (error) {
//     console.error("❌ Error Running Scraper:", error);
//     return { success: false, error: "Server Error" };
//   }
// };

// module.exports = { runScraper };

const axios = require("axios");

const SCRAPER_API = process.env.SCRAPER_API;
const SCRAPER_API_2 = process.env.SCRAPER_API_2;

const runScraper = async () => {
  try {
    console.log("🚀 Starting Scraper API Calls...");

    // Dono APIs ko parallel call karna
    const [scraperResponse1, scraperResponse2] = await Promise.all([
      axios.get(SCRAPER_API),
      axios.get(SCRAPER_API_2),
    ]);

    // Response check karna
    if (scraperResponse1.status === 200 && scraperResponse2.status === 200) {
      console.log("✅ Both Scraper APIs Completed Successfully!");
      return { success: true, message: "Both scrapers completed successfully" };
    } else {
      console.log("❌ One or both Scraper APIs failed");
      return { success: false, error: "One or both Scraper APIs failed" };
    }
  } catch (error) {
    console.error("❌ Error Running Scraper:", error.message || error);

    // Agar kisi API ka response error de raha ho to uska detailed log
    if (error.response) {
      console.error("❌ API Error Response:", error.response.data);
    }

    return { success: false, error: "Server Error", details: error.message };
  }
};

module.exports = { runScraper };
