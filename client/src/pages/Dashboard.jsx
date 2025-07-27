import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const user = useSelector((s) => s.user.user);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50">
      <h1 className="text-3xl font-bold text-orange-800 mb-2">Welcome, {user?.name}!</h1>
      <p className="text-lg text-brown-700 mb-6 font-semibold">साथ खरीदो, सस्ता पाओ</p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link to="/profile" className="w-full bg-white border rounded-xl px-4 py-3 text-center font-semibold text-orange-700 shadow hover:bg-orange-50">Profile</Link>
        <Link to="/clusters" className="w-full bg-white border rounded-xl px-4 py-3 text-center font-semibold text-orange-700 shadow hover:bg-orange-50">Clusters</Link>
        {user.role === "supplier" && (
          <Link to="/suppliers" className="w-full bg-white border rounded-xl px-4 py-3 text-center font-semibold text-orange-700 shadow hover:bg-orange-50">Suppliers</Link>
        )}
      </div>
    </div>
  );
} 