import { useState } from "react";
import api from "../utils/api";
import OTPForm from "../components/OTPForm";
import PhoneInputForm from "../components/PhoneInputForm";
import NewUserDetailsForm from "../components/NewUserDetailsForm";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [fullName, setFullName] = useState("");
  const [language, setLanguage] = useState("Hindi");
  const [role, setRole] = useState("buyer");
  const [isExistingUser, setIsExistingUser] = useState(null);
  const [devOtp, setDevOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const checkUserAndSendOtp = async () => {
    if (!phone || phone.length !== 10)
      return setMessage("Please enter a valid 10-digit phone number.");

    setLoading(true);
    try {
      const check = await api.post("/auth/check-user", { phone });
      setIsExistingUser(check.data.exists);

      const res = await api.post("/auth/request-otp", { phone });
      setDevOtp(res.data.devOtp || "");
      setMessage("OTP sent");
      setStep("otp");
    } catch {
      setMessage("Error sending OTP.");
    }
    setLoading(false);
  };

  const resendOtp = () => {
    checkUserAndSendOtp();
    setMessage("OTP resent");
  };

  const handleVerify = async () => {
    if (!otp) return setMessage("Enter the OTP sent to your phone.");
    setLoading(true);
    try {
      const res = await api.post("/auth/verify-otp", {
        phone,
        otp,
        ...(isExistingUser ? {} : { fullName, language, role }),
      });

      localStorage.setItem("token", res.data.token);
      setMessage(res.data.msg);

      const userRole = res.data.user.role;
      if (userRole === "supplier") navigate("/dashboard");
      else if (userRole === "buyer") navigate("/");
      else setMessage("Unknown user role. Please contact support.");
    } catch {
      setMessage("Invalid OTP or failed login.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md border border-orange-100">
        <h1 className="text-3xl font-bold text-orange-600 mb-2 text-center">
          🛒 SupplySaathi
        </h1>
        <p className="text-sm text-gray-600 mb-4 text-center">
          साथ खरीदो, सस्ता पाओ — Sign in to join clusters and get best prices!
        </p>

        {message && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 rounded-md text-sm mb-4">
            {message}{" "}
            {devOtp && <span className="font-mono">Dev OTP: {devOtp}</span>}
          </div>
        )}

        {step === "phone" ? (
          <PhoneInputForm
            phone={phone}
            setPhone={setPhone}
            loading={loading}
            checkUserAndSendOtp={checkUserAndSendOtp}
          />
        ) : (
          <>
            {!isExistingUser && (
              <NewUserDetailsForm
                fullName={fullName}
                setFullName={setFullName}
                language={language}
                setLanguage={setLanguage}
                role={role}
                setRole={setRole}
              />
            )}
            <OTPForm
              otp={otp}
              setOtp={setOtp}
              loading={loading}
              onVerify={handleVerify}
              onResend={resendOtp}
              autoSubmit={true}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
