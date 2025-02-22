const cron = require("node-cron");
const { runScraper } = require("../services/scrapperService");

const runScraperOnStartup = async () => {
  console.log("🚀 Server Started: Running Scraper Immediately...");
  await runScraper();
  console.log("✅ Initial Scraper Run Completed!");
};

runScraperOnStartup();

cron.schedule("0 0 * * *", async () => {
  console.log("⏳ Running Scheduled Scraper Task...");
  await runScraper();
  console.log("✅ Scheduled Task Completed!");
});

module.exports = cron;
