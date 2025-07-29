import { useEffect, useState } from "react";
import api from "../api";
import { useSelector } from "react-redux";
import { Users, MapPin, Clock, MessageCircle, Bell, List, Map } from "lucide-react";

export default function Clusters() {
  const user = useSelector((s) => s.user.user);
  const [clusters, setClusters] = useState([]);
  const [form, setForm] = useState({ name: "", city: "", area: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState("list");

  useEffect(() => { 
    api.get("/clusters").then(res => setClusters(res.data)); 
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/clusters/create", form);
      setClusters([res.data, ...clusters]);
      setForm({ name: "", city: "", area: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Error");
    }
    setLoading(false);
  };

  const handleJoin = async (id) => {
    try {
      const res = await api.post(`/clusters/${id}/join`);
      setClusters(clusters.map(c => c._id === id ? res.data : c));
    } catch {}
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'joining': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (cluster) => {
    // Mock status based on time or member count for demo
    if (cluster.members?.length > 15) return 'active';
    if (cluster.members?.length > 8) return 'joining';
    return 'planning';
  };

  return (
    <div className="min-h-screen bg-[#fadb8644]">
      {/* Header */}
      <div className=" ">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-8 h-8 text-green-600" />
                <h1 className="text-3xl font-bold text-gray-800">Find Your Cluster</h1>
              </div>
              <p className="text-gray-600">समूह में जुड़े और सस्ता खरीदे</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === "list" ? "bg-orange-600 text-white" : "text-gray-600"
                }`}
              >
                <List className="w-4 h-4" />
                List View
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === "map" ? "bg-orange-600 text-white" : "text-gray-600"
                }`}
              >
                <Map className="w-4 h-4" />
                Map View
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        

        {/* Clusters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {clusters.map((cluster) => {
            const status = getStatusText(cluster);
            const isJoined = cluster.members?.some(m => m._id === user.id);
            
            return (
              <div key={cluster._id} className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="p-6">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(status)}`}>
                      {status}
                    </span>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Bell className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Cluster Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{cluster.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {cluster.area}, {cluster.city}
                    </div>
                    <div className="text-gray-500 text-sm mb-2">
                      {cluster.members?.length} vendors going
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {status === 'active' ? 'Today 3 PM' : 
                       status === 'joining' ? 'Tomorrow 11 AM' : 
                       'Friday 10 AM'}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t">
                    {user.role === "vendor" && !isJoined && (
                      <button 
                        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                        onClick={() => handleJoin(cluster._id)}
                      >
                        Join Now
                      </button>
                    )}
                    {user.role === "vendor" && isJoined && (
                      <div className="text-center">
                        <span className="text-green-700 font-semibold">✓ Joined</span>
                      </div>
                    )}
                    {user.role === "supplier" && (
                      <button className="w-full bg-gray-100 text-gray-600 py-3 rounded-xl font-semibold">
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {clusters.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No clusters found</h3>
            <p className="text-gray-500">Be the first to create a cluster in your area!</p>
          </div>
        )}

        {/* Create Cluster Form */}
        {user.role === "vendor" && (
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Create New Cluster</h3>
            <form onSubmit={handleCreate} className="grid md:grid-cols-4 gap-4">
              <input 
                name="name" 
                required 
                placeholder="Cluster Name" 
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/30 placeholder:text-gray-700" 
                value={form.name} 
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))} 
              />
              <input 
                name="city" 
                required 
                placeholder="City" 
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/30 placeholder:text-gray-700" 
                value={form.city} 
                onChange={e => setForm(f => ({ ...f, city: e.target.value }))} 
              />
              <input 
                name="area" 
                required 
                placeholder="Area" 
                className="border border-gray-300 bg-white/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-gray-700" 
                value={form.area} 
                onChange={e => setForm(f => ({ ...f, area: e.target.value }))} 
              />
              <button 
                type="submit"
                className="bg-white text-orange-600 py-3 px-6 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-colors disabled:opacity-50" 
                disabled={loading}
              >
                {loading ? "Creating..." : "Create"}
              </button>
            </form>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          </div>
        )}

        {/* Call to Action */}
        {/* <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Can't find a cluster?</h3>
          <p className="text-orange-100 mb-6">Create your own and invite vendors</p>
          {user.role === "supplier" ? (
            <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              Create Cluster
            </button>
          ) : (
            <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              Request New Area
            </button>
          )}
        </div> */}
      </div>
      
    </div>
    
  );
} 