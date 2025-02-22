const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const router = express.Router();
const PROPERTIES_API = process.env.PROPERTIES_API;

const collectionName = "Properties";

router.get("/fetch-properties", async (req, res) => {
  try {
    const response = await axios.get(PROPERTIES_API);
    const properties = response.data;

    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);

    await collection.deleteMany({});
    await collection.insertMany(properties);

    res.status(200).json({
      message: "Properties fetched & stored in DB",
      count: properties.length,
      data: properties,
    });
  } catch (error) {
    console.error("❌ Error Fetching Properties:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
