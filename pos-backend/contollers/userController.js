const createHttpError = require("http-errors");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { accessTokenSecret } = require("../config/config");

const register = async (req, res, next) => {
  try {
    const { name, phone, email, role, password } = req.body;

    if (!name || !phone || !email || !password || !role) {
      const error = createHttpError(404, "All fields are required");
      return next(error);
    }

    const isUserPresent = await User.findOne({ email });

    if (isUserPresent) {
      const error = createHttpError(400, "User already exist");
      return next(error);
    }

    const user = { name, email, phone, password, role };
    const newUser = User(user);
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "new User created!",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = createHttpError(400, "All fields are required");
      return next(error);
    }

    const isUserPresent = await User.findOne({ email });

    if (!isUserPresent) {
      const error = createHttpError(400, "User didn't exist");
      return next(error);
    }

    const isMatch = await bcrypt.compare(password, isUserPresent.password);

    if (!isMatch) {
      const error = createHttpError(400, "Invalid credentials!");
      return next(error);
    }

    const accessToken = jwt.sign(
      { _id: isUserPresent._id },
      accessTokenSecret,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({
      success: true,
      message: "User Logged in successfully",
      data: isUserPresent,
    });
  } catch (error) {
    next(error);
  }
};

const getUserData = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({
      success: true,
      message: "",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, getUserData };
