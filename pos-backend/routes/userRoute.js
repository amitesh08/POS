const express = require("express");
const {
  register,
  login,
  getUserData,
} = require("../contollers/userController");
const { isVerifiedUser } = require("../middleware/tokenVerification");
const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/").get(isVerifiedUser, getUserData);

module.exports = router;
