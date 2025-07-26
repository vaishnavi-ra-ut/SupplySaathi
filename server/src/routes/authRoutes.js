const express = require("express");
const router = express.Router();
const { requestOtp, verifyOtpAndLogin } = require("../controllers/authController");

router.post("/request-otp", requestOtp);
router.post("/verify-otp", verifyOtpAndLogin);

module.exports = router;
