import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-orange-200 z-50 md:hidden">
        <div className="flex justify-around items-center py-3">
          <Link to="/" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-home-fill text-2xl text-orange-600"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Home</span>
          </Link>
          <Link to="/clusters" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-group-fill text-2xl text-gray-500"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Clusters</span>
          </Link>
          <Link to="/suppliers" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-store-2-fill text-2xl text-gray-500"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Suppliers</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-user-fill text-2xl text-gray-500"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-white shadow-sm border-b-2 border-orange-200 px-8 py-4">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-orange-600 font-pacifico">
            SupplySathi
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-2 px-4 py-2 text-orange-600 bg-orange-50 rounded-full">
              <i className="ri-home-fill text-xl"></i>
              <span className="font-medium">Home</span>
            </Link>
            <Link to="/clusters" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors">
              <i className="ri-group-fill text-xl"></i>
              <span className="font-medium">My Clusters</span>
            </Link>
            <Link to="/suppliers" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors">
              <i className="ri-store-2-fill text-xl"></i>
              <span className="font-medium">Suppliers</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors">
              <i className="ri-user-fill text-xl"></i>
              <span className="font-medium">Profile</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-4 md:pt-8 pb-24 md:pb-8">
        {/* Hero Banner */}
        <div className="mx-4 md:mx-8 mb-8">
          <div
            className="relative bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Cheerful%20Indian%20street%20food%20vendor%20with%20colorful%20cart...')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-yellow-500/80"></div>
            <div className="relative z-10 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Welcome to SupplySathi! 🛒
              </h1>
              <p className="text-xl md:text-2xl mb-2">साथ खरीदो, सस्ता पाओ</p>
              <p className="text-lg md:text-xl opacity-90">Join buying clusters & discover trusted suppliers</p>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="mx-4 md:mx-8 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/clusters" onMouseEnter={() => setHoveredCard('cluster')} onMouseLeave={() => setHoveredCard(null)}>
            <div className={`bg-white rounded-3xl p-8 shadow-lg border-2 border-green-200 transition-all hover:shadow-xl hover:scale-105`}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-group-fill text-4xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Join Cluster</h3>
                <p className="text-lg text-green-600 font-semibold mb-4">साथ खरीदो</p>
                <p className="text-gray-600">Find vendors near you and buy together for better prices</p>
              </div>
            </div>
          </Link>

          <Link to="/suppliers" onMouseEnter={() => setHoveredCard('suppliers')} onMouseLeave={() => setHoveredCard(null)}>
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-blue-200 transition-all hover:shadow-xl hover:scale-105">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-store-2-fill text-4xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Explore Suppliers</h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">सस्ता सामान देखो</p>
                <p className="text-gray-600">Discover trusted suppliers with best prices and quality</p>
              </div>
            </div>
          </Link>

          <Link to="/trips" onMouseEnter={() => setHoveredCard('trip')} onMouseLeave={() => setHoveredCard(null)}>
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200 transition-all hover:shadow-xl hover:scale-105">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-calendar-fill text-4xl text-purple-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Plan My Trip</h3>
                <p className="text-lg text-purple-600 font-semibold mb-4">यात्रा की योजना</p>
                <p className="text-gray-600">Schedule buying trips and coordinate with your cluster</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Stats & Activity can be left unchanged, just be sure to use `to` instead of `href` */}
        {/* ... */}
      </div>
    </div>
  );
}
