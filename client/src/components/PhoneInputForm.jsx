const PhoneInputForm = ({ phone, setPhone, loading, checkUserAndSendOtp }) => (
  <>
    <label className="block mb-1 text-sm text-gray-700">📱 Mobile Number</label>
    <input
      type="tel"
      className="w-full p-3 border border-orange-200 rounded-lg focus:ring-orange-500 focus:outline-none mb-4"
      placeholder="Enter 10-digit number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
    <button
      onClick={checkUserAndSendOtp}
      disabled={loading}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
    >
      {loading ? "Sending OTP..." : "Request OTP"}
    </button>
  </>
);

export default PhoneInputForm;
