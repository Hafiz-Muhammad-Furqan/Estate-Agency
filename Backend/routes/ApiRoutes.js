const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const router = express.Router();
// const PROPERTIES_API = process.env.PROPERTIES_API;
const PROPERTIES_API_2 =
  "https://criminal-crayfish-test123as-72d9b4b8.koyeb.app/leads";

const collectionName = "Properties";

router.get("/fetch-properties", async (req, res) => {
  try {
    // const [response1, response2] = await Promise.all([
    //   axios.get(PROPERTIES_API),
    //   axios.get(PROPERTIES_API_2),
    // ]);

    const response2 = await axios.get(PROPERTIES_API_2);

    // const properties1 = response1.data || [];
    const properties2 = response2.data.leads || [];

    console.log(`✅ Second API Data Length: ${properties2.length}`);

    // Dono APIs ka data combine karna
    // const combinedProperties = [...properties1, ...properties2];

    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);

    await collection.deleteMany({});
    await collection.insertMany(properties2);

    res.status(200).json({
      message: "Properties fetched & stored in DB",
      count: properties2.length,
      data: properties2,
    });
  } catch (error) {
    console.error("❌ Error Fetching Properties:", error.message || error);

    // Agar error specific API se ho to uska bhi log mile
    if (error.response) {
      console.error("❌ API Error Response:", error.response.data);
    }

    res.status(500).json({ error: "Server Error", details: error.message });
  }
});

router.get("/delayed-leads", async (req, res) => {
  try {
    const response = await axios.get(
      "https://criminal-crayfish-test123as-72d9b4b8.koyeb.app/delayed-leads"
    );
    console.log(response.data.delayed_leads);

    res.status(200).json({
      data: response.data.delayed_leads,
    });
  } catch (error) {
    console.error("❌ Error Fetching delay leads:", error.message || error);

    if (error.response) {
      console.error("❌ API Error Response:", error.response.data);
    }

    res.status(500).json({ error: "Server Error", details: error.message });
  }
});
router.get("/today-leads", async (req, res) => {
  try {
    const response = await axios.get(
      "https://criminal-crayfish-test123as-72d9b4b8.koyeb.app/today-leads"
    );

    res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    console.error("❌ Error Fetching delay leads:", error.message || error);

    if (error.response) {
      console.error("❌ API Error Response:", error.response.data);
    }

    res.status(500).json({ error: "Server Error", details: error.message });
  }
});

module.exports = router;
