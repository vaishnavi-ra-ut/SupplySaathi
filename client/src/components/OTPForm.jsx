import { useRef, useEffect, useState } from "react";

const OTPForm = ({
  otp,
  setOtp,
  loading,
  onVerify,
  onResend,
  autoSubmit = false,
}) => {
  const inputs = useRef([]);
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      setResendDisabled(true);
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  useEffect(() => {
    if (autoSubmit && otp.length === 6 && !otp.includes("")) {
      onVerify();
    }
  }, [otp]);

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return;

    const newOtp = otp.split("");
    newOtp[index] = val.slice(-1);
    setOtp(newOtp.join(""));

    if (val && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    onResend();
    setTimer(30);
  };

  return (
    <>
      <label className="block mb-1 text-sm text-gray-700">Enter OTP</label>
      <div className="flex justify-between mb-4 gap-2">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            ref={(el) => (inputs.current[i] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-10 h-12 text-center border border-gray-300 rounded text-lg focus:outline-orange-500"
            value={otp[i] || ""}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        ))}
      </div>

      <button
        onClick={onVerify}
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition mb-2"
      >
        {loading ? "Verifying..." : "Verify & Continue"}
      </button>

      <button
        onClick={handleResend}
        disabled={resendDisabled}
        className={`text-sm underline mt-2 ${
          resendDisabled
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-500 hover:text-blue-700"
        }`}
      >
        {resendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
      </button>
    </>
  );
};

export default OTPForm;
