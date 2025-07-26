'use client';

import { Link } from 'react-router-dom';

import {
  Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Utensils
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <Utensils className="text-white w-5 h-5" />
              </div>
              <div>
                <h2
                  className="text-xl font-bold text-orange-400"
                  style={{ fontFamily: 'var(--font-pacifico)' }}
                >
                  Supply Saathi
                </h2>
                <p className="text-xs text-gray-400 mt-1">साथ खरीदो, सस्ता पाओ</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting street food vendors and home cooks with fresh, quality prep ingredients from trusted local providers across India.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/browse" className="text-gray-300 hover:text-orange-400">Browse Preps</Link></li>
              <li><Link href="/categories" className="text-gray-300 hover:text-orange-400">Categories</Link></li>
              <li><Link href="/providers" className="text-gray-300 hover:text-orange-400">Top Providers</Link></li>
              <li><Link href="/orders" className="text-gray-300 hover:text-orange-400">My Orders</Link></li>
              <li><Link href="/favorites" className="text-gray-300 hover:text-orange-400">Favorites</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-300 hover:text-orange-400">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-400">Contact Us</Link></li>
              <li><Link href="/provider" className="text-gray-300 hover:text-orange-400">Become a Provider</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-orange-400">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-orange-400">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="text-orange-400 w-4 h-4" />
              <span className="text-gray-300">+91 98765XXXXX</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="text-orange-400 w-4 h-4" />
              <span className="text-gray-300">support@SupplySaathi.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Clock className="text-orange-400 w-4 h-4" />
              <span className="text-gray-300">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SupplySaathi. All rights reserved. | साथ खरीदो, सस्ता पाओ 🍽️
          </p>
        </div>
      </div>
    </footer>
  );
}
