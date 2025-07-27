import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../userSlice";
import api from "../api";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const user = useSelector((s) => s.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await api.post("/auth/logout");
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-orange-700 mb-2">Profile</h2>
        <div className="mb-2"><b>Name:</b> {user.name}</div>
        <div className="mb-2"><b>Phone:</b> {user.phone}</div>
        <div className="mb-2"><b>Role:</b> {user.role}</div>
        {user.role === "supplier" && <div className="mb-2"><b>Can create clusters and suppliers</b></div>}
        {user.role === "vendor" && <div className="mb-2"><b>Can join clusters</b></div>}
        <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded font-semibold" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}