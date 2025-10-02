const express = require("express");
const { isVerifiedUser } = require("../middleware/tokenVerification");
const {
  createOrder,
  verifyPayment,
} = require("../contollers/paymentController");
const router = express.Router();

router.route("/create-order").post(isVerifiedUser, createOrder);
router.route("/verify-payment").post(isVerifiedUser, verifyPayment);

module.exports = router;
