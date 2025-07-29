import { useEffect, useState } from "react";
import api from "../api";
import { useSelector } from "react-redux";
import { Store, Star, Users, Phone, Heart, Eye, CheckCircle, Truck } from "lucide-react";

export default function Suppliers() {
  const user = useSelector((s) => s.user.user);
  const [suppliers, setSuppliers] = useState([]);
  const [form, setForm] = useState({ name: "", category: "", location: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", icon: "🛒" },
    { name: "Vegetables", icon: "🥬" },
    { name: "Fruits", icon: "🍎" },
    { name: "Spices", icon: "🌶️" },
    { name: "Grains", icon: "🌾" },
    { name: "Dairy", icon: "🥛" }
  ];

  // Mock supplier data to match the design
  const mockSuppliers = [
    {
      _id: "1",
      name: "Raj Vegetables",
      category: "Vegetables",
      location: "Azadpur Mandi",
      rating: 4.8,
      trustedBy: 12,
      priceRange: "₹10-50/kg",
      image: "/api/placeholder/300/200",
      verified: true,
      delivery: true,
      tags: ["Fresh Vegetables", "Organic Options", "Bulk Supply"]
    },
    {
      _id: "2",
      name: "Sharma Spice House",
      category: "Spices",
      location: "Khan Baoli",
      rating: 4.9,
      trustedBy: 25,
      priceRange: "₹50-500/kg",
      image: "/api/placeholder/300/200",
      verified: true,
      delivery: true,
      tags: ["Pure Spices", "Custom Blends", "Wholesale Rates"]
    },
    {
      _id: "3",
      name: "Fresh Fruit Corner",
      category: "Fruits",
      location: "Ghazipur Mandi",
      rating: 4.6,
      trustedBy: 18,
      priceRange: "₹20-100/kg",
      image: "/api/placeholder/300/200",
      verified: true,
      delivery: true,
      tags: ["Seasonal Fruits", "Quality Assured", "Daily Fresh"]
    }
  ];

  useEffect(() => { 
    api.get("/suppliers").then(res => {
      // Use mock data if no real data, or combine with real data
      setSuppliers(res.data.length > 0 ? res.data : mockSuppliers);
    }).catch(() => {
      setSuppliers(mockSuppliers);
    });
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/suppliers/create", form);
      setSuppliers([res.data, ...suppliers]);
      setForm({ name: "", category: "", location: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Error");
    }
    setLoading(false);
  };

  const filteredSuppliers = activeCategory === "All" 
    ? suppliers 
    : suppliers.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fadb8644]">
      {/* Header */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Store className="w-10 h-10 text-gray-700" />
            <div>
              <h1 className="text-3xl font-bold text-gray-700">Trusted Suppliers</h1>
              <p className="text-gray-600">भरोसेमंद आपूर्तिकर्ता खोजें</p>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.name
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
       
        {/* Suppliers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <div key={supplier._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image and Badges */}
              <div className="relative h-48 bg-gradient-to-r from-orange-100 to-yellow-100">
                <div className="absolute top-4 left-4 flex gap-2">
                  {supplier.delivery && (
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                      <Truck className="w-3 h-3" />
                      Delivery
                    </span>
                  )}
                  {supplier.verified && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <div className="text-white font-bold text-lg">{supplier.priceRange || "Contact for pricing"}</div>
                </div>
              </div>

              <div className="p-6">
                {/* Supplier Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{supplier.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{supplier.location}</p>
                  
                  {/* Rating and Trust */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{supplier.rating || "4.5"}</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <Users className="w-4 h-4" />
                      <span>Trusted by {supplier.trustedBy || "10"} vendors</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(supplier.tags || [supplier.category]).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                    <Phone className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSuppliers.length === 0 && (
          <div className="text-center py-12">
            <Store className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No suppliers found</h3>
            <p className="text-gray-500">Try a different category or add the first supplier!</p>
          </div>
        )}

         {/* Add Supplier Form */}
        {user.role === "supplier" && (
          <div className="bg-gradient-to-r from-blue-500 to-purple-600  my-6 h-44  rounded-2xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Add New Supplier</h3>
            <form onSubmit={handleCreate} className="grid md:grid-cols-4 gap-4">
              <input 
                name="name" 
                required 
                placeholder="Supplier Name" 
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-white" 
                value={form.name} 
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))} 
              />
              <select 
                name="category" 
                required 
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-white" 
                value={form.category} 
                onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
              >
                <option value="">Select Category</option>
                {categories.slice(1).map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
              <input 
                name="location" 
                required 
                placeholder="Location" 
                className="border border-gray-100  rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-white" 
                value={form.location} 
                onChange={e => setForm(f => ({ ...f, location: e.target.value }))} 
              />
              <button 
                type="submit"
                className="bg-white text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50" 
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Supplier"}
              </button>
            </form>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          </div>
        )}


        {/* Call to Action
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center mt-8">
          <h3 className="text-2xl font-bold mb-2">Know a great supplier?</h3>
          <p className="text-blue-100 mb-6">Help the community by adding trusted suppliers</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto">
            <Users className="w-5 h-5" />
            Add Supplier
          </button>
        </div> */}
      </div>
    </div>
  );
} 