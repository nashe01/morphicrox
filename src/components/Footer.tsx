
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Bath</span>
                <span className="text-2xl font-light">Luxe</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your bathroom into a luxurious sanctuary with our premium furniture and ceramic solutions. 
              Quality craftsmanship meets modern design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <span className="text-gray-400">info@bathluxe.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span className="text-gray-400">123 Design Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BathLuxe. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
