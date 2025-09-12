require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const config = require("./config/config");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const createHttpError = require("http-errors");
const app = express();

const PORT = config.port;
connectDB();

app.get("/", (req, res) => {
  res.json("Server is up and runnig.");
});

//Global Error Handler ~ make sure to put this after the endpoints then it will work.
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
