import upcomingTrips from '../utils/upcomingTrips';
import { pastTrips } from '../utils/pastTrips';

export default function TabSection({ activeTab, setActiveTab, handleNotifyMe }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "vegetables": return "ri-leaf-fill";
      case "spices": return "ri-fire-fill";
      case "fruits": return "ri-apple-fill";
      case "grains": return "ri-plant-fill";
      default: return "ri-shopping-cart-fill";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "planning": return "bg-yellow-100 text-yellow-800";
      case "joining": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      {/* Tabs */}
      <div className="mx-4 md:mx-8 mb-6">
        <div className="bg-white rounded-3xl p-2 shadow-lg">
          <div className="flex space-x-1">
            {["upcoming", "past", "create"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 rounded-2xl font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-orange-600 text-white"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                <div className="w-5 h-5 inline-block mr-2">
                  <i
                    className={`${
                      tab === "upcoming"
                        ? "ri-calendar-event-fill"
                        : tab === "past"
                        ? "ri-history-fill"
                        : "ri-add-fill"
                    }`}
                  ></i>
                </div>
                {tab === "upcoming"
                  ? "Upcoming"
                  : tab === "past"
                  ? "Past Trips"
                  : "Create Trip"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-4 md:mx-8">
        {activeTab === "upcoming" && renderUpcoming(upcomingTrips)}
        {activeTab === "past" && renderPast(pastTrips)}
        {activeTab === "create" && renderCreate()}
      </div>
    </>
  );

  function renderUpcoming(trips) {
    return (
      <div className="space-y-6">
        {trips.map((trip) => (
          <div key={trip.id} className="bg-white rounded-3xl p-6 shadow-lg">
            <TripDetails trip={trip} getCategoryIcon={getCategoryIcon} getStatusColor={getStatusColor} />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-user-fill text-gray-600"></i>
                </div>
                <span className="text-gray-700">Coordinator: {trip.coordinator}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleNotifyMe(trip.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  <i className="ri-notification-fill mr-2" /> Notify Me
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200">
                  <i className="ri-chat-3-fill" />
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200">
                  <i className="ri-share-fill" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderPast(trips) {
    return (
      <div className="space-y-6">
        {trips.map((trip) => (
          <div key={trip.id} className="bg-white rounded-3xl p-6 shadow-lg">
            <TripDetails trip={trip} getCategoryIcon={getCategoryIcon} getStatusColor={getStatusColor} isPast />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-user-fill text-gray-600"></i>
                </div>
                <span className="text-gray-700">Coordinator: {trip.coordinator}</span>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-yellow-600 text-white rounded-2xl hover:bg-yellow-700">
                  <i className="ri-star-fill mr-2" /> Rate Trip
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200">
                  <i className="ri-download-fill" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderCreate() {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Create New Trip</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="Trip Title" type="text" placeholder="e.g., Vegetable Market Visit" />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Cluster</label>
              <select className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Karol Bagh Vendors</option>
                <option>Chandni Chowk Group</option>
                <option>Paharganj Collective</option>
              </select>
            </div>
            <FormInput label="Date" type="date" />
            <FormInput label="Time" type="time" />
          </div>
          <FormInput label="Location" type="text" placeholder="e.g., Azadpur Wholesale Market" />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
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
    );
  }
}

const TripDetails = ({ trip, getCategoryIcon, getStatusColor, isPast = false }) => (
  <>
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center">
        <div className={`w-12 h-12 ${isPast ? "bg-gray-100" : "bg-orange-100"} rounded-full flex items-center justify-center mr-4`}>
          <i className={`${getCategoryIcon(trip.category)} text-2xl ${isPast ? "text-gray-600" : "text-orange-600"}`}></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{trip.title}</h3>
          <p className="text-gray-600">{trip.cluster}</p>
        </div>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(trip.status)}`}>
        {trip.status}
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <InfoBlock icon="ri-calendar-fill" title="Date & Time" value={`${trip.date} at ${trip.time}`} color="blue" />
      <InfoBlock icon="ri-map-pin-fill" title="Location" value={trip.location} color="green" />
      <InfoBlock icon="ri-group-fill" title="Participants" value={`${trip.participants} vendors`} color="purple" />
    </div>
    <div className="bg-green-50 rounded-2xl p-4 mb-6">
      <InfoBlock
        icon={isPast ? "ri-check-fill" : "ri-money-dollar-circle-fill"}
        title={isPast ? "Actual Savings" : "Estimated Savings"}
        value={`₹${isPast ? trip.actualSavings : trip.estimatedSavings}`}
        color="green"
      />
    </div>
  </>
);

const InfoBlock = ({ icon, title, value, color }) => (
  <div className="flex items-center">
    <div className={`w-8 h-8 bg-${color}-100 rounded-full flex items-center justify-center mr-3`}>
      <i className={`${icon} text-${color}-600`}></i>
    </div>
    <div>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const FormInput = ({ label, type, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>
);
