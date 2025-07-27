'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const supplier = {
    name: 'Anita Sharma',
    company: 'FreshHarvest Supplies',
    phone: '+91 91234 56789',
    location: 'Azadpur Mandi, Delhi',
    joinDate: 'January 2023',
    rating: 4.8,
    ordersFulfilled: 320,
    itemsAvailable: 128,
    buyersConnected: 46
  };

  const recentActivity = [
    { id: 1, title: 'Order #564 Delivered to Karol Bagh Vendor', time: '1 hour ago', icon: 'ri-truck-fill', color: 'green' },
    { id: 2, title: 'Inventory Updated - Added 50kg Onions', time: '3 hours ago', icon: 'ri-database-2-fill', color: 'blue' },
    { id: 3, title: 'Received 5-star Review from Rajesh Kumar', time: '1 day ago', icon: 'ri-star-fill', color: 'yellow' },
    { id: 4, title: 'New Buyer from Lajpat Nagar Connected', time: '2 days ago', icon: 'ri-user-add-fill', color: 'purple' }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'green': return 'bg-green-100 text-green-600';
      case 'blue': return 'bg-blue-100 text-blue-600';
      case 'yellow': return 'bg-yellow-100 text-yellow-600';
      case 'purple': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8 mt-14">
      <div className="mx-4 md:mx-8">
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-white text-3xl">
              <i className="ri-store-fill"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{supplier.name}</h2>
              <p className="text-gray-600">{supplier.company}</p>
              <p className="text-sm text-gray-500">{supplier.location}</p>
            </div>
          </div>
          <button className="mt-4 md:mt-0 bg-orange-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-orange-700 transition-colors">
            <i className="ri-edit-fill mr-2"></i>Edit Info
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatCard icon="ri-star-fill" label="Rating" value={supplier.rating} color="yellow" />
          <StatCard icon="ri-check-double-fill" label="Orders Fulfilled" value={supplier.ordersFulfilled} color="green" />
          <StatCard icon="ri-archive-fill" label="Items Available" value={supplier.itemsAvailable} color="blue" />
          <StatCard icon="ri-user-shared-fill" label="Buyers Connected" value={supplier.buyersConnected} color="purple" />
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-3xl p-2 shadow-lg mb-6 flex space-x-1">
          {['overview', 'activity', 'inventory', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-2xl font-semibold transition-colors ${
                activeTab === tab
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              <i className={`mr-2 ${
                tab === 'overview' ? 'ri-dashboard-fill' :
                tab === 'activity' ? 'ri-history-fill' :
                tab === 'inventory' ? 'ri-database-2-fill' :
                'ri-settings-fill'
              }`}></i>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
            <p className="text-gray-600">
              Welcome, {supplier.name}! Here you can monitor your orders, update inventory, and connect with buyers.
              Maintain high ratings by fulfilling timely and fresh deliveries.
            </p>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-center bg-gray-50 p-4 rounded-2xl">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getColorClasses(activity.color)}`}>
                    <i className={`${activity.icon} text-xl`}></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Inventory Management</h3>
            <p className="text-gray-600 mb-4">You currently have <strong>{supplier.itemsAvailable}</strong> items in stock.</p>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-orange-700 transition-colors">
              <i className="ri-upload-fill mr-2"></i>Update Inventory
            </button>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl p-6 shadow-lg space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Settings</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Order Notifications</span>
                <Switch isOn={true} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Inventory Alerts</span>
                <Switch isOn={false} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">New Buyer Alerts</span>
                <Switch isOn={true} />
              </div>
            </div>
            <button className="w-full text-left mt-6 p-4 bg-red-100 text-red-800 rounded-2xl font-semibold hover:bg-red-200">
              <i className="ri-logout-box-fill mr-2"></i>Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper: Stat Card
function StatCard({ icon, value, label, color }) {
  const bgMap = {
    yellow: 'bg-yellow-100 text-yellow-600',
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600'
  };
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${bgMap[color]}`}>
        <i className={`${icon} text-2xl`}></i>
      </div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

// Helper: Toggle Switch
function Switch({ isOn }) {
  return (
    <div className={`w-12 h-6 rounded-full p-1 ${isOn ? 'bg-orange-600' : 'bg-gray-300'}`}>
      <div className={`w-4 h-4 bg-white rounded-full transition-all ${isOn ? 'ml-auto' : ''}`}></div>
    </div>
  );
}
