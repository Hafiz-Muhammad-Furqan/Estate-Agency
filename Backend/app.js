const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const ApiRoutes = require("./routes/ApiRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
connectDB();
require("./services/cronJob");

app.get("/", (req, res) => {
  res.send("Backend API Running Successfully! 🚀");
});

app.use("/api/v1", ApiRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
