
import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/9aeca46e-6ec2-4e7f-a3fa-94e925134823.png" 
              alt="MorphicRox Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation - pushed to far right */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">
                HOME
              </a>
              <a href="/bathrooms" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                BATHROOMS
              </a>
              <a href="/kitchens" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                KITCHENS
              </a>
              <a href="/office" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                OFFICE
              </a>
              <a href="/hospitality" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                HOSPITALITY
              </a>
              <a href="/about" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                ABOUT US
              </a>
              <a href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
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
      </div>
    </header>
  );
};

export default Header;
