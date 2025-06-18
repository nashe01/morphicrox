
import React from 'react';
import { Search, ShoppingBag, ChevronDown } from 'lucide-react';
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

          {/* Navigation - pushed to far right */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-brand font-medium hover:text-brand-600 transition-colors">
                HOME
              </a>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-black hover:text-brand transition-colors font-medium bg-transparent">
                      PRODUCTS
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px] bg-white border shadow-lg">
                        <NavigationMenuLink asChild>
                          <a
                            href="/products/showers"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-brand focus:bg-gray-100 focus:text-brand"
                          >
                            <div className="text-sm font-medium leading-none">SHOWERS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              Premium shower solutions for modern bathrooms
                            </p>
                          </a>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <a
                            href="/products/bathtub-shower-combos"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-brand focus:bg-gray-100 focus:text-brand"
                          >
                            <div className="text-sm font-medium leading-none">BATHTUB/SHOWER COMBOS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              Complete bathtub and shower combination units
                            </p>
                          </a>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <a
                            href="/products/bathtubs"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-brand focus:bg-gray-100 focus:text-brand"
                          >
                            <div className="text-sm font-medium leading-none">BATHTUBS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              Luxurious bathtubs for relaxation and comfort
                            </p>
                          </a>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <a
                            href="/products/countertops"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-brand focus:bg-gray-100 focus:text-brand"
                          >
                            <div className="text-sm font-medium leading-none">COUNTERTOPS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              Durable ceramic countertops for kitchens and baths
                            </p>
                          </a>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <a
                            href="/products/sinks"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-brand focus:bg-gray-100 focus:text-brand"
                          >
                            <div className="text-sm font-medium leading-none">SINKS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
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
              <a href="/contact" className="text-black hover:text-brand transition-colors font-medium bg-brandg px-4 py-2 rounded-md">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
