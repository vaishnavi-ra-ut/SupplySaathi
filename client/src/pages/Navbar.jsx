import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function TopNavbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md border-b-2 border-orange-200 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo / Brand */}
        <Link to='/'><div className="text-xl md:text-2xl font-bold text-orange-600 font-pacifico" style={{ fontFamily: 'var(--font-pacifico)' }}>
          Supply Saathi
        </div></Link>

        {/* Hamburger (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl text-orange-600">
            <Menu />
          </button>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="flex items-center space-x-2 px-4 py-2 text-orange-600 bg-orange-50 rounded-full">
            <i className="ri-home-fill text-xl"></i>
            <span className="font-medium">Home</span>
          </Link>
          <Link to="/clusters" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition">
            <i className="ri-group-fill text-xl"></i>
            <span className="font-medium">My Clusters</span>
          </Link>
          <Link to="/supplier" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition">
            <i className="ri-store-2-fill text-xl"></i>
            <span className="font-medium">Suppliers</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition">
            <i className="ri-user-fill text-xl"></i>
            <span className="font-medium">Profile</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-4 py-2 text-orange-600 bg-orange-50 rounded-full">
              <i className="ri-home-fill text-xl"></i>
              <span className="font-medium">Home</span>
            </Link>
            <Link to="/clusters" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition">
              <i className="ri-group-fill text-xl"></i>
              <span className="font-medium">My Clusters</span>
            </Link>
            <Link to="/supplier" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition">
              <i className="ri-store-2-fill text-xl"></i>
              <span className="font-medium">Suppliers</span>
            </Link>
            <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition">
              <i className="ri-user-fill text-xl"></i>
              <span className="font-medium">Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
