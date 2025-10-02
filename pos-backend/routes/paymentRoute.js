const express = require("express");
const { isVerifiedUser } = require("../middleware/tokenVerification");
const { createOrder } = require("../contollers/paymentController");
const router = express.Router();

router.route("/create-order").post(isVerifiedUser, createOrder);

module.exports = router;
