require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

const PORT = process.env.PORT || 8000;
connectDB();

app.get("/", (req, res) => {
  res.json("Server is up and runnig.");
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
