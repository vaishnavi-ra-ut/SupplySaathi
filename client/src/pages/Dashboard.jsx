import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Users, Store, Calendar, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Dashboard() {
  const user = useSelector((s) => s.user.user);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">Welcome to Supply Saathi! 🛒</h1>
          </div>
          <p className="text-xl mb-2 text-orange-100">साथ खरीदो, सस्ता पाओ</p>
          <p className="text-lg text-orange-100">Join buying clusters & discover trusted suppliers</p>
        </div>
      </div>

      {/* Main Content Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Join Cluster Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Join Cluster</h3>
            <p className="text-green-600 font-semibold mb-4">साथ खरीदो</p>
            <p className="text-gray-600 mb-6">Find vendors near you and buy together for better prices</p>
            <Link 
              to="/clusters" 
              className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors inline-block"
            >
              Join Now
            </Link>
          </div>

          {/* Explore Suppliers Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Store className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Explore Suppliers</h3>
            <p className="text-blue-600 font-semibold mb-4">सस्ता सामान देखो</p>
            <p className="text-gray-600 mb-6">Discover trusted suppliers with best prices and quality</p>
            <Link 
              to="/suppliers" 
              className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors inline-block"
            >
              Explore
            </Link>
          </div>

          {/* Plan My Trip Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Plan My Trip</h3>
            <p className="text-purple-600 font-semibold mb-4">यात्रा की योजना</p>
            <p className="text-gray-600 mb-6">Schedule buying trips and coordinate with your cluster</p>
            <Link 
              to="/clusters" 
              className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors inline-block"
            >
              Plan Trip
            </Link>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Know a great supplier?</h3>
              <p className="text-blue-100">Help the community by adding trusted suppliers</p>
            </div>
            <Link 
              to="/suppliers" 
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors mt-4 md:mt-0 flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Add Supplier
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Supply Saathi</h4>
                  <p className="text-sm text-gray-400">साथ खरीदो, सस्ता पाओ</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Connecting street food vendors and home cooks with fresh, 
                quality prep ingredients from trusted local providers across India.
              </p>
              <div className="flex gap-3">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold text-lg mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="/suppliers" className="text-gray-300 hover:text-white">Browse Preps</Link></li>
                <li><Link to="/suppliers" className="text-gray-300 hover:text-white">Categories</Link></li>
                <li><Link to="/suppliers" className="text-gray-300 hover:text-white">Top Providers</Link></li>
                <li><Link to="/clusters" className="text-gray-300 hover:text-white">My Orders</Link></li>
                <li><Link to="/clusters" className="text-gray-300 hover:text-white">Favorites</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="font-semibold text-lg mb-4">Support</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-gray-300 hover:text-white">Help Center</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Become a Provider</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-semibold text-lg mb-4">Contact</h5>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-300">+91 98765XXXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-300">support@SupplySaathi.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-300">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            © 2024 SupplySaathi. All rights reserved. | साथ खरीदो, सस्ता पाओ 🛒
          </div>
        </div>
      </footer>
    </div>
  );
} 