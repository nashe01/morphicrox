
import React from 'react';
import { Search, ShoppingBag, ChevronDown } from 'lucide-react';
import MobileNav from './MobileNav';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <a href="/" className="text-brand font-medium hover:text-brand-600 transition-colors">
                HOME
              </a>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-black hover:text-brand transition-colors font-medium bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent">
                      PRODUCTS
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-1 p-4 w-[500px] bg-white border shadow-xl rounded-lg">
                        <NavigationMenuLink asChild>
                          <a
                            href="/products/showers"
                            className="group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-brand/5 hover:shadow-md focus:bg-brand/5 focus:shadow-md border border-transparent hover:border-brand/20"
                          >
                            <div className="text-sm font-semibold leading-none text-black group-hover:text-brand transition-colors">SHOWERS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-2">
                              Premium shower solutions for modern bathrooms
                            </p>
                          </a>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <a
                            href="/products/bathtub-shower-combos"
                            className="group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-brand/5 hover:shadow-md focus:bg-brand/5 focus:shadow-md border border-transparent hover:border-brand/20"
                          >
                            <div className="text-sm font-semibold leading-none text-black group-hover:text-brand transition-colors">BATHTUB/SHOWER COMBOS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-2">
                              Complete bathtub and shower combination units
                            </p>
                          </a>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <a
                            href="/products/bathtubs"
                            className="group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-brand/5 hover:shadow-md focus:bg-brand/5 focus:shadow-md border border-transparent hover:border-brand/20"
                          >
                            <div className="text-sm font-semibold leading-none text-black group-hover:text-brand transition-colors">BATHTUBS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-2">
                              Luxurious bathtubs for relaxation and comfort
                            </p>
                          </a>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <a
                            href="/products/countertops"
                            className="group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-brand/5 hover:shadow-md focus:bg-brand/5 focus:shadow-md border border-transparent hover:border-brand/20"
                          >
                            <div className="text-sm font-semibold leading-none text-black group-hover:text-brand transition-colors">COUNTERTOPS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-2">
                              Durable ceramic countertops for kitchens and baths
                            </p>
                          </a>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <a
                            href="/products/sinks"
                            className="group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-brand/5 hover:shadow-md focus:bg-brand/5 focus:shadow-md border border-transparent hover:border-brand/20"
                          >
                            <div className="text-sm font-semibold leading-none text-black group-hover:text-brand transition-colors">SINKS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-2">
                              Elegant ceramic sinks for every space
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <a href="/laminate" className="text-black hover:text-brand transition-colors font-medium">
                LAMINATE
              </a>
              <a href="/about" className="text-black hover:text-brand transition-colors font-medium">
                ABOUT
              </a>
              <a href="/contact" className="text-black hover:text-brand transition-colors font-medium bg-brand text-white px-4 py-2 rounded-md">
                CONTACT
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-black" />
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingBag className="w-5 h-5 text-black" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-black" />
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5 text-black" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
