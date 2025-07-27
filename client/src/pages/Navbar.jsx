import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Navbar() {
  const user = useSelector((s) => s.user.user);
  return (
    <nav className="w-full bg-white shadow flex items-center px-4 py-2 justify-between">
      <div className="font-bold text-orange-700 text-xl">SupplySaathi</div>
      <div className="text-brown-700 font-semibold hidden md:block">साथ खरीदो, सस्ता पाओ</div>
      {user && (
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-orange-700">Dashboard</Link>
          <Link to="/clusters" className="hover:text-orange-700">Clusters</Link>
          {user.role === "supplier" && <Link to="/suppliers" className="hover:text-orange-700">Suppliers</Link>}
          <Link to="/profile" className="hover:text-orange-700">Profile</Link>
        </div>
      )}
    </nav>
  );
} 