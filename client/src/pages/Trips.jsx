"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import upcomingTrips from "../utils/upcomingTrips";
import { pastTrips } from "../utils/pastTrips";

export default function Trips() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "vegetables":
        return "ri-leaf-fill";
      case "spices":
        return "ri-fire-fill";
      case "fruits":
        return "ri-apple-fill";
      case "grains":
        return "ri-plant-fill";
      default:
        return "ri-shopping-cart-fill";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "planning":
        return "bg-yellow-100 text-yellow-800";
      case "joining":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleNotifyMe = (tripId) => {
    setSelectedTrip(tripId);
    setShowNotificationModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-orange-200 z-50 md:hidden">
        <div className="flex justify-around items-center py-3">
          <Link href="/" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-home-fill text-2xl text-gray-500"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Home</span>
          </Link>
          <Link href="/clusters" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-group-fill text-2xl text-gray-500"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Clusters</span>
          </Link>
          <Link href="/suppliers" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-store-2-fill text-2xl text-gray-500"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Suppliers</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center p-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-user-fill text-2xl text-gray-500"></i>
            </div>
            <span className="text-xs text-gray-600 mt-1">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Desktop Top Navigation */}
      <nav className="hidden md:flex bg-white shadow-sm border-b-2 border-orange-200 px-8 py-4">
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-2xl font-bold text-orange-600"
            style={{ fontFamily: "Pacifico, serif" }}
          >
            SupplySathi
          </Link>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-home-fill text-xl"></i>
              </div>
              <span className="font-medium">Home</span>
            </Link>
            <Link
              href="/clusters"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-group-fill text-xl"></i>
              </div>
              <span className="font-medium">My Clusters</span>
            </Link>
            <Link
              href="/suppliers"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-store-2-fill text-xl"></i>
              </div>
              <span className="font-medium">Suppliers</span>
            </Link>
            <Link
              href="/profile"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-fill text-xl"></i>
              </div>
              <span className="font-medium">Profile</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-4 md:pt-8 pb-24 md:pb-8">
        {/* Header */}
        <div className="mx-4 md:mx-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            <div className="w-8 h-8 inline-block mr-3 bg-purple-100 rounded-full align-middle">
              <i className="ri-calendar-fill text-2xl text-purple-600 flex items-center justify-center h-full"></i>
            </div>
            Plan Your Trips
          </h1>
          <p className="text-lg text-gray-600">
            यात्रा की योजना बनाएं और समन्वय करें
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-4 md:mx-8 mb-6">
          <div className="bg-white rounded-3xl p-2 shadow-lg">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`flex-1 py-3 px-4 rounded-2xl font-semibold transition-colors whitespace-nowrap ${
                  activeTab === "upcoming"
                    ? "bg-orange-600 text-white"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                <div className="w-5 h-5 inline-block mr-2">
                  <i className="ri-calendar-event-fill"></i>
                </div>
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`flex-1 py-3 px-4 rounded-2xl font-semibold transition-colors whitespace-nowrap ${
                  activeTab === "past"
                    ? "bg-orange-600 text-white"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                <div className="w-5 h-5 inline-block mr-2">
                  <i className="ri-history-fill"></i>
                </div>
                Past Trips
              </button>
              <button
                onClick={() => setActiveTab("create")}
                className={`flex-1 py-3 px-4 rounded-2xl font-semibold transition-colors whitespace-nowrap ${
                  activeTab === "create"
                    ? "bg-orange-600 text-white"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                <div className="w-5 h-5 inline-block mr-2">
                  <i className="ri-add-fill"></i>
                </div>
                Create Trip
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mx-4 md:mx-8">
          {activeTab === "upcoming" && (
            <div className="space-y-6">
              {upcomingTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white rounded-3xl p-6 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <i
                          className={`${getCategoryIcon(
                            trip.category
                          )} text-2xl text-orange-600`}
                        ></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {trip.title}
                        </h3>
                        <p className="text-gray-600">{trip.cluster}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        trip.status
                      )}`}
                    >
                      {trip.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-calendar-fill text-blue-600"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Date & Time</p>
                        <p className="font-semibold text-gray-800">
                          {trip.date} at {trip.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-map-pin-fill text-green-600"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-semibold text-gray-800">
                          {trip.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-group-fill text-purple-600"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Participants</p>
                        <p className="font-semibold text-gray-800">
                          {trip.participants} vendors
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-4 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-money-dollar-circle-fill text-green-600"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Estimated Savings
                        </p>
                        <p className="text-lg font-bold text-green-800">
                          ₹{trip.estimatedSavings}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-user-fill text-gray-600"></i>
                      </div>
                      <span className="text-gray-700">
                        Coordinator: {trip.coordinator}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleNotifyMe(trip.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors whitespace-nowrap"
                      >
                        <div className="w-5 h-5 inline-block mr-2">
                          <i className="ri-notification-fill"></i>
                        </div>
                        Notify Me
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-chat-3-fill"></i>
                        </div>
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-share-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "past" && (
            <div className="space-y-6">
              {pastTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white rounded-3xl p-6 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        <i
                          className={`${getCategoryIcon(
                            trip.category
                          )} text-2xl text-gray-600`}
                        ></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {trip.title}
                        </h3>
                        <p className="text-gray-600">{trip.cluster}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        trip.status
                      )}`}
                    >
                      {trip.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-calendar-fill text-blue-600"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Date & Time</p>
                        <p className="font-semibold text-gray-800">
                          {trip.date} at {trip.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-map-pin-fill text-green-600"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-semibold text-gray-800">
                          {trip.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-group-fill text-purple-600"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Participants</p>
                        <p className="font-semibold text-gray-800">
                          {trip.participants} vendors
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-4 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-check-fill text-green-600"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Actual Savings</p>
                        <p className="text-lg font-bold text-green-800">
                          ₹{trip.actualSavings}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-user-fill text-gray-600"></i>
                      </div>
                      <span className="text-gray-700">
                        Coordinator: {trip.coordinator}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-yellow-600 text-white rounded-2xl hover:bg-yellow-700 transition-colors whitespace-nowrap">
                        <div className="w-5 h-5 inline-block mr-2">
                          <i className="ri-star-fill"></i>
                        </div>
                        Rate Trip
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-download-fill"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "create" && (
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Create New Trip
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Trip Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Vegetable Market Visit"
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Cluster
                    </label>
                    <select className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Karol Bagh Vendors</option>
                      <option>Chandni Chowk Group</option>
                      <option>Paharganj Collective</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Azadpur Wholesale Market"
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the trip purpose and what to expect..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-orange-700 transition-colors"
                >
                  Create Trip
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Notification Modal */}
      {showNotificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-notification-fill text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Notification Set!
              </h3>
              <p className="text-gray-600 mb-6">
                You'll be notified 1 hour before the trip starts.
              </p>
              <button
                onClick={() => setShowNotificationModal(false)}
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-orange-700 transition-colors"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
