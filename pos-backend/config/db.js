const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(config.databaseURI);
    console.log(`DB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
