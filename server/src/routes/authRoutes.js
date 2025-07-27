// const express = require("express");
// const router = express.Router();
// const { requestOtp, verifyOtpAndLogin, checkUser } = require("../controllers/authController");

// router.post("/request-otp", requestOtp);
// router.post("/verify-otp", verifyOtpAndLogin);
// router.post("/check-user", checkUser);

// module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;

