const Razorpay = require("razorpay");

require("dotenv").config();

const config = Object.freeze({
  port: process.env.PORT || 3000,
  databaseURI: process.env.MONGO_URI || "mongodb://localhost:2701",
  nodeENV: process.env.NODE_ENV || "developement",
  accessTokenSecret: "process.env.JWT_SECRET",
  razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  razorpaySecretKey: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = config;
