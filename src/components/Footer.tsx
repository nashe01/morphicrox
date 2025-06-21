
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/9aeca46e-6ec2-4e7f-a3fa-94e925134823.png" 
                alt="MorphicRox Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your spaces with premium ceramic solutions crafted for bathrooms, kitchens, offices, and hospitality. 
              Quality craftsmanship meets modern design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/morphicrox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/morphicrox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/morphicrox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-brand transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand transition-colors">Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand" />
                <span className="text-gray-400">info@morphicrox.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand" />
                <span className="text-gray-400">123 Design Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MorphicRox. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
