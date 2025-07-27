import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Clusters() {
  const [viewMode, setViewMode] = useState('list');
  const [hoveredCluster, setHoveredCluster] = useState(null);

  const clusters = [
    {
      id: '1',
      name: 'Karol Bagh Vendors',
      location: 'Karol Bagh Market',
      members: 12,
      nextTrip: 'Tomorrow 11 AM',
      status: 'joining',
      category: 'vegetables'
    },
    {
      id: '2',
      name: 'Chandni Chowk Group',
      location: 'Chandni Chowk',
      members: 8,
      nextTrip: 'Today 3 PM',
      status: 'active',
      category: 'spices'
    },
    {
      id: '3',
      name: 'Paharganj Collective',
      location: 'Main Bazaar',
      members: 15,
      nextTrip: 'Friday 10 AM',
      status: 'planning',
      category: 'general'
    },
    {
      id: '4',
      name: 'Lajpat Nagar Vendors',
      location: 'Central Market',
      members: 6,
      nextTrip: 'Monday 9 AM',
      status: 'joining',
      category: 'fruits'
    },
    {
      id: '5',
      name: 'Sarojini Nagar Group',
      location: 'Market Area',
      members: 20,
      nextTrip: 'Wednesday 11 AM',
      status: 'active',
      category: 'general'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'vegetables': return 'ri-leaf-fill';
      case 'spices': return 'ri-fire-fill';
      case 'fruits': return 'ri-apple-fill';
      default: return 'ri-shopping-cart-fill';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'joining': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-orange-200 z-50 md:hidden">
        <div className="flex justify-around items-center py-3">
          <Link to="/" className="flex flex-col items-center p-2">
            <i className="ri-home-fill text-2xl text-gray-500"></i>
            <span className="text-xs text-gray-600 mt-1">Home</span>
          </Link>
          <Link to="/clusters" className="flex flex-col items-center p-2">
            <i className="ri-group-fill text-2xl text-orange-600"></i>
            <span className="text-xs text-gray-600 mt-1">Clusters</span>
          </Link>
          <Link to="/suppliers" className="flex flex-col items-center p-2">
            <i className="ri-store-2-fill text-2xl text-gray-500"></i>
            <span className="text-xs text-gray-600 mt-1">Suppliers</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center p-2">
            <i className="ri-user-fill text-2xl text-gray-500"></i>
            <span className="text-xs text-gray-600 mt-1">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-white shadow-sm border-b-2 border-orange-200 px-8 py-4">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-orange-600 font-serif">
            SupplySaathi
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full">
              <i className="ri-home-fill text-xl"></i>
              <span>Home</span>
            </Link>
            <Link to="/clusters" className="flex items-center space-x-2 px-4 py-2 text-orange-600 bg-orange-50 rounded-full">
              <i className="ri-group-fill text-xl"></i>
              <span>My Clusters</span>
            </Link>
            <Link to="/suppliers" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full">
              <i className="ri-store-2-fill text-xl"></i>
              <span>Suppliers</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full">
              <i className="ri-user-fill text-xl"></i>
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main */}
      <div className="pt-4 md:pt-8 pb-24 md:pb-8 mx-4 md:mx-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              <span className="inline-block w-8 h-8 mr-3 bg-green-100 rounded-full text-green-600 text-2xl text-center">
                <i className="ri-group-fill"></i>
              </span>
              Find Your Cluster
            </h1>
            <p className="text-lg text-gray-600">समूह में जुड़ें और सस्ता खरीदें</p>
          </div>
          <div className="flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-full ${
                viewMode === 'list' ? 'bg-orange-600 text-white' : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              <i className="ri-list-check text-xl mr-2"></i>List View
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-full ${
                viewMode === 'map' ? 'bg-orange-600 text-white' : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              <i className="ri-map-pin-fill text-xl mr-2"></i>Map View
            </button>
          </div>
        </div>

        {viewMode === 'map' ? (
          <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
                title="Map"
              ></iframe>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusters.map((cluster) => (
              <div
                key={cluster.id}
                className={`bg-white rounded-3xl p-6 shadow-lg border-2 transition-all ${
                  hoveredCluster === cluster.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCluster(cluster.id)}
                onMouseLeave={() => setHoveredCluster(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <i className={`${getCategoryIcon(cluster.category)} text-2xl text-orange-600`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{cluster.name}</h3>
                      <p className="text-sm text-gray-600">{cluster.location}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(cluster.status)}`}>
                    {cluster.status}
                  </span>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-gray-700">
                    <i className="ri-user-fill text-green-600 mr-2"></i>
                    {cluster.members} vendors going
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="ri-time-fill text-blue-600 mr-2"></i>
                    {cluster.nextTrip}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-2xl font-semibold hover:bg-green-700 transition-colors">
                    <i className="ri-check-fill mr-2"></i>Join Now
                  </button>
                  <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200">
                    <i className="ri-chat-3-fill"></i>
                  </button>
                  <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200">
                    <i className="ri-notification-fill"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Can't find a cluster?</h3>
              <p className="text-white opacity-90">Create your own and invite vendors</p>
            </div>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100">
              <i className="ri-add-fill mr-2"></i>Create Cluster
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
