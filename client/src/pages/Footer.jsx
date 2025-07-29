 {/* Footer */}
 import { Link } from "react-router-dom";
 import {
  Store,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
 export default function Footer() {
    return(
          <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Info */}
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
    )
 }