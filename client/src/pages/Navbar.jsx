import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const user = useSelector((s) => s.user.user);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white shadow-sm flex items-center px-6 py-4 justify-between">
      <Link to="/" className="font-bold text-orange-600 text-2xl">
        Supply Saathi
      </Link>
      
      {user && (
        <div className="flex gap-8 items-center">
          <Link 
            to="/" 
            className={`font-medium transition-colors ${
              isActive('/') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/clusters" 
            className={`font-medium transition-colors ${
              isActive('/clusters') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            My Clusters
          </Link>
          <Link 
            to="/suppliers" 
            className={`font-medium transition-colors ${
              isActive('/suppliers') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            Suppliers
          </Link>
          <Link 
            to="/profile" 
            className={`font-medium transition-colors ${
              isActive('/profile') ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
} 