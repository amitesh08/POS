require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const config = require("./config/config");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const PORT = config.port;
connectDB();

//Middlewares
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("Server is up and runnig.");
});

app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));
app.use("/api/table", require("./routes/tableRoute"));

//Global Error Handler ~ make sure to put this after the endpoints then it will work.
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
