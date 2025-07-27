import { useState } from 'react';
import TabSection from './TripsTab';

export default function Trips() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleNotifyMe = (tripId) => {
    setSelectedTrip(tripId);
    setShowNotificationModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 mt-14">
      <div className="pt-4 md:pt-8 pb-24 md:pb-8">
        {/* Header */}
        <div className="mx-4 md:mx-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            <div className="w-8 h-8 inline-block mr-3 bg-purple-100 rounded-full align-middle">
              <i className="ri-calendar-fill text-2xl text-purple-600 flex items-center justify-center h-full"></i>
            </div>
            Plan Your Trips
          </h1>
          <p className="text-lg text-gray-600">यात्रा की योजना बनाएं और समन्वय करें</p>
        </div>

        {/* Tabs and Content */}
        <TabSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleNotifyMe={handleNotifyMe}
        />
      </div>

      {/* Notification Modal */}
      {showNotificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-notification-fill text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Notification Set!</h3>
              <p className="text-gray-600 mb-6">You'll be notified 1 hour before the trip starts.</p>
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
