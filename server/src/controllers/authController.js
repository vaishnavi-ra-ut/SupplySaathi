// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const { sendOtp, verifyOtp } = require("../utils/otpService");

// exports.requestOtp = async (req, res) => {
//   const { phone } = req.body;
//   if (!phone) return res.status(400).json({ msg: "Phone required" });

//   sendOtp(phone);
//   res.json({ msg: "OTP sent" });
// };

// exports.checkUser = async (req, res) => {
//   const { phone } = req.body;
//   if (!phone) return res.status(400).json({ msg: "Phone number required" });

//   const user = await User.findOne({ phone });
//   res.json({ exists: !!user });
// };


// exports.verifyOtpAndLogin = async (req, res) => {
//   const { phone, otp, fullName, language, role } = req.body;

//   // 1. OTP validation
//   if (!verifyOtp(phone, otp)) {
//     return res.status(401).json({ msg: "Invalid OTP" });
//   }

//   // 2. Check user existence
//   let user = await User.findOne({ phone });
//   const isNew = !user;

//   // 3. Create new user if not found
//   if (isNew) {
//     if (!fullName || !language || !role) {
//       return res.status(400).json({ msg: "Missing fields for signup." });
//     }

//     user = await User.create({ phone, fullName, language, role });
//   }

//   // 4. Issue JWT
//   const token = jwt.sign(
//     { id: user._id, role: user.role },
//     process.env.JWT_SECRET,
//     { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
//   );

//   // 5. Send response
//   res.json({
//     msg: isNew ? "Signup successful" : "Login successful",
//     token,
//     user: {
//       id: user._id,
//       fullName: user.fullName,
//       phone: user.phone,
//       language: user.language,
//       role: user.role,
//     },
//   });
// };
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
};

exports.signup = async (req, res) => {
  try {
    const { name, phone, password, role } = req.body;

    const existing = await User.findOne({ phone });
    if (existing) return res.status(400).json({ message: 'Phone already registered' });

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ name, phone, role, passwordHash });

    await newUser.save();

    const token = generateToken(newUser);
    res
      .cookie('token', token, cookieOptions)
      .status(201)
      .json({ user: newUser });

  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

    const token = generateToken(user);
    res
      .cookie('token', token, cookieOptions)
      .status(200)
      .json({ user });

  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token').json({ message: 'Logged out' });
};

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-passwordHash');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user' });
  }
};
