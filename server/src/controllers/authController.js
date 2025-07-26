const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { sendOtp, verifyOtp } = require("../utils/otpService");

exports.requestOtp = async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ msg: "Phone required" });

  sendOtp(phone);
  res.json({ msg: "OTP sent" });
};

exports.verifyOtpAndLogin = async (req, res) => {
  const { phone, otp, fullName, language } = req.body;

  if (!verifyOtp(phone, otp)) {
    return res.status(401).json({ msg: "Invalid OTP" });
  }

  let user = await User.findOne({ phone });
  const isNew = !user;

  if (!user && fullName) {
    user = await User.create({ phone, fullName, language });
  }

  if (!user) return res.status(404).json({ msg: "User not found. Please sign up." });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.json({
    msg: isNew ? "Signup successful" : "Login successful",
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      phone: user.phone,
      language: user.language,
    },
  });
};
