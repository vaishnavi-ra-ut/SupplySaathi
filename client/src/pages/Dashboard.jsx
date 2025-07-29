import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Users,
  Store,
  Calendar,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Dashboard() {
  const user = useSelector((s) => s.user.user);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative p-8 md:p-12 overflow-hidden z-40 text-white mx-4 rounded-3xl"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(250, 115, 4, 0.8), rgba(247, 213, 48, 0.7)),
      url(https://i.postimg.cc/Px6mzrpf/best-one.png)
    `,
    backgroundSize: "cover",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
        }}
      >

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome to Supply Saathi! 🛒
            </h1>
          </div>
          <p className="text-xl mb-2 text-orange-100">साथ खरीदो, सस्ता पाओ</p>
          <p className="text-lg text-orange-100">
            Join buying clusters & discover trusted suppliers
          </p>
        </div>
      </div>

      {/* Main Content Cards */}
       <div className="max-w-7xl mx-auto px-6 mt-6 ">
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Join Cluster Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
            Join Cluster
          </h3>
          <p className="text-green-600 font-semibold mb-4">साथ खरीदो</p>
          <p className="text-gray-600 mb-6">
            Find vendors near you and buy together for better prices
          </p>
          <Link
            to="/clusters"
            className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors inline-block"
          >
            Join Now
          </Link>
        </div>

        {/* Explore Suppliers Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
            <Store className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
            Explore Suppliers
          </h3>
          <p className="text-blue-600 font-semibold mb-4">सस्ता सामान देखो</p>
          <p className="text-gray-600 mb-6">
            Discover trusted suppliers with best prices and quality
          </p>
          <Link
            to="/suppliers"
            className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors inline-block"
          >
            Explore
          </Link>
        </div>

        {/* Plan My Trip Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
            <Calendar className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
            Plan My Trip
          </h3>
          <p className="text-purple-600 font-semibold mb-4">यात्रा की योजना</p>
          <p className="text-gray-600 mb-6">
            Schedule buying trips and coordinate with your cluster
          </p>
          <Link
            to="/clusters"
            className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors inline-block"
          >
            Plan Trip
          </Link>
        </div>
      </div>

      {/* Call to Action */} 
      {user.role === "supplier" &&(<div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Know a great supplier?</h3>
            <p className="text-blue-100">
              Help the community by adding trusted suppliers
            </p>
          </div>
          <Link
            to="/suppliers"
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors mt-4 md:mt-0 flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            Add Supplier
          </Link>
        </div>
      </div>)}
    </div>

    </div>
  );
}
