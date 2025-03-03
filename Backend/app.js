require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const cookieParser = require("cookie-parser");
const ApiRoutes = require("./routes/apiRoutes");
const AuthRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDB();
require("./services/cronJob");

app.get("/", (req, res) => {
  res.send("Backend API Running Successfully! 🚀");
});

app.use("/api/v1", ApiRoutes);
app.use("/api", AuthRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
