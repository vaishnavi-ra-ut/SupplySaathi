const otpMap = new Map(); // phone → otp

exports.sendOtp = (phone) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  otpMap.set(phone, otp);
  console.log(`📲 OTP for ${phone} is ${otp}`); // simulate SMS
  return otp;
};

exports.verifyOtp = (phone, otp) => {
  return otpMap.get(phone) == otp;
};
