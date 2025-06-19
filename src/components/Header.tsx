import React, { useState } from 'react';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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

              {/* Mega Menu for PRODUCTS */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-black hover:text-brand transition-colors font-medium bg-transparent px-4 py-2 rounded-full hover:bg-gray-100 data-[state=open]:bg-black data-[state=open]:text-white">
                      PRODUCTS
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex gap-10 py-6 px-8 w-[800px] bg-white border border-gray-200 rounded-md shadow-lg">
                        {/* Left Links */}
                        <div className="min-w-[160px] space-y-2">
                          <h3 className="font-semibold text-black">All Products</h3>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {[
                              { label: "Showers", href: "/products/showers" },
                              { label: "Bathtub/Shower Combos", href: "/products/bathtub-shower-combos" },
                              { label: "Bathtubs", href: "/products/bathtubs" },
                              { label: "Countertops", href: "/products/countertops" },
                              { label: "Sinks", href: "/products/sinks" },
                            ].map((item) => (
                              <li key={item.href}>
                                <a href={item.href} className="hover:text-brand transition-colors">
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right Image Previews */}
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            "/images/showers.jpg",
                            "/images/sinks.jpg",
                            "/images/countertops.jpg",
                          ].map((src, idx) => (
                            <img
                              key={idx}
                              src={src}
                              alt="Product Preview"
                              className="w-full h-32 object-cover rounded-md hover:scale-105 transition-transform"
                            />
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a href="/laminate" className="text-brand font-medium hover:text-brand-600 transition-colors">
                LAMINATE
              </a>
              <a href="/about" className="text-brand font-medium hover:text-brand-600 transition-colors">
                ABOUT
              </a>
              <a href="/contact" className="text-brand font-medium hover:text-brand-600 transition-colors">
                CONTACT
              </a>
            </nav>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>

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

        {/* Mobile Navigation Menu */}
        {mobileOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <a href="/" className="block text-brand font-medium hover:text-brand-600 transition-colors">
              HOME
            </a>
            <details className="group">
              <summary className="cursor-pointer text-brand font-medium hover:text-brand-600">
                PRODUCTS
              </summary>
              <div className="ml-4 mt-2 space-y-1">
                {[
                  { label: "Showers", href: "/products/showers" },
                  { label: "Bathtub/Shower Combos", href: "/products/bathtub-shower-combos" },
                  { label: "Bathtubs", href: "/products/bathtubs" },
                  { label: "Countertops", href: "/products/countertops" },
                  { label: "Sinks", href: "/products/sinks" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-gray-700 hover:text-brand transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
            <a href="/laminate" className="block text-brand font-medium hover:text-brand-600 transition-colors">
              LAMINATE
            </a>
            <a href="/about" className="block text-brand font-medium hover:text-brand-600 transition-colors">
              ABOUT
            </a>
            <a href="/contact" className="block text-brand font-medium hover:text-brand-600 transition-colors">
              CONTACT
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


