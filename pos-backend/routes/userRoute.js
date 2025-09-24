const express = require("express");
const {
  register,
  login,
  getUserData,
  logout,
} = require("../contollers/userController");
const { isVerifiedUser } = require("../middleware/tokenVerification");
const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/").get(isVerifiedUser, getUserData);

router.route("/logout").post(isVerifiedUser, logout);

module.exports = router;
