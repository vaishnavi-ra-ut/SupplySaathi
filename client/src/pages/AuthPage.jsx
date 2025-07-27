import { useState } from "react";
import api from "../api";
import { useDispatch } from "react-redux";
import { setUser } from "../userSlice";
export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", password: "", role: "vendor" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const url = isSignup ? "/auth/signup" : "/auth/login";
      const payload = isSignup ? form : { phone: form.phone, password: form.password };
      const res = await api.post(url, payload);
      dispatch(setUser(res.data.user));
    } catch (err) {
      setError(err.response?.data?.message || "Error");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-orange-700 mb-2 text-center">SupplySaathi</h1>
        <p className="text-center text-brown-700 mb-4 font-semibold">साथ खरीदो, सस्ता पाओ</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input name="name" required placeholder="Name" className="w-full border rounded px-3 py-2" value={form.name} onChange={handleChange} />
              <select name="role" className="w-full border rounded px-3 py-2" value={form.role} onChange={handleChange}>
                <option value="vendor">Vendor</option>
                <option value="supplier">Supplier</option>
              </select>
            </>
          )}
          <input name="phone" required placeholder="Phone" className="w-full border rounded px-3 py-2" value={form.phone} onChange={handleChange} />
          <input name="password" type="password" required placeholder="Password" className="w-full border rounded px-3 py-2" value={form.password} onChange={handleChange} />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button className="w-full bg-orange-600 text-white py-2 rounded font-semibold">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <div className="mt-4 text-center">
          <button className="text-orange-700 underline" onClick={() => setIsSignup((v) => !v)}>
            {isSignup ? "Already have an account? Login" : "New user? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
} 