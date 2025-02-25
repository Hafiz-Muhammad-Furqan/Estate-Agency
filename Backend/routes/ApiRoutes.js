// const express = require("express");
// const axios = require("axios");
// const mongoose = require("mongoose");

// const router = express.Router();
// const PROPERTIES_API = process.env.PROPERTIES_API;
// const PROPERTIES_API_2 = process.env.PROPERTIES_API_2;

// const collectionName = "Properties";

// router.get("/fetch-properties", async (req, res) => {
//   try {
//     const response = await axios.get(PROPERTIES_API);
//     const properties = response.data;

//     const db = mongoose.connection.db;
//     const collection = db.collection(collectionName);

//     await collection.deleteMany({});
//     await collection.insertMany(properties);

//     res.status(200).json({
//       message: "Properties fetched & stored in DB",
//       count: properties.length,
//       data: properties,
//     });
//   } catch (error) {
//     console.error("❌ Error Fetching Properties:", error);
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// module.exports = router;

const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const router = express.Router();
const PROPERTIES_API = process.env.PROPERTIES_API;
const PROPERTIES_API_2 = process.env.PROPERTIES_API_2;

const collectionName = "Properties";

router.get("/fetch-properties", async (req, res) => {
  try {
    // Dono APIs ko parallel call karna
    const [response1, response2] = await Promise.all([
      axios.get(PROPERTIES_API),
      axios.get(PROPERTIES_API_2),
    ]);

    const properties1 = response1.data || [];
    const properties2 = response2.data || [];

    console.log(`✅ First API Data Length: ${properties1.length}`);
    console.log(`✅ Second API Data Length: ${properties2.length}`);

    // Dono APIs ka data combine karna
    const combinedProperties = [...properties1, ...properties2];

    const db = mongoose.connection.db;
    const collection = db.collection(collectionName);

    // Pehle purane records delete karna, fir naye insert karna
    await collection.deleteMany({});
    await collection.insertMany(combinedProperties);

    res.status(200).json({
      message: "Properties fetched & stored in DB",
      count: combinedProperties.length,
      data: combinedProperties,
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

module.exports = router;
