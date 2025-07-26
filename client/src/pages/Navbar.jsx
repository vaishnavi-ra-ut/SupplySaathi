const Navbar = () => {
  return (
    <nav className="bg-white shadow flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2 font-bold text-orange-600 text-xl">
        {/* <img src="/logo.png" className="h-8" alt="logo" /> */}
        SupplySaathi
      </div>
      <div className="flex gap-4 text-sm font-medium">
        <a href="/dashboard" className="text-orange-500">
          🏠 Home
        </a>
        <a href="/clusters" className="text-gray-600 hover:text-orange-500">
          👥 My Clusters
        </a>
        <a href="/suppliers" className="text-gray-600 hover:text-orange-500">
          🏬 Suppliers
        </a>
        <a href="/profile" className="text-gray-600 hover:text-orange-500">
          👤 Profile
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
