
import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">Bath</span>
              <span className="text-2xl font-light text-gray-600">Luxe</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">
              HOME
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              PRODUCTS
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              COLLECTIONS
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              ABOUT US
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              CONTACT
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
