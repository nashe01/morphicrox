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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'HOME', href: '/' },
              { label: 'LAMINATE', href: '/laminate' },
              { label: 'ABOUT', href: '/about' },
              { label: 'CONTACT', href: '/contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black font-medium hover:text-brand transition-colors px-3 py-2"
              >
                {item.label}
              </a>
            ))}

            {/* PRODUCTS Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black font-medium px-4 py-2 rounded-full hover:bg-gray-100 data-[state=open]:bg-black data-[state=open]:text-white transition-all">
                    PRODUCTS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-[900px] p-6 bg-white border border-gray-200 rounded-lg shadow-xl space-x-10">
                      {/* Left Links */}
                      <div className="w-1/4">
                        <h4 className="font-semibold mb-4 text-black">All Products</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          {[
                            { label: "Showers", href: "/products/showers" },
                            { label: "Bathtub/Shower Combos", href: "/products/bathtub-shower-combos" },
                            { label: "Bathtubs", href: "/products/bathtubs" },
                            { label: "Countertops", href: "/products/countertops" },
                            { label: "Sinks", href: "/products/sinks" },
                          ].map((item) => (
                            <li key={item.href}>
                              <a
                                href={item.href}
                                className="hover:text-brand transition-colors"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Images */}
                      <div className="w-3/4 grid grid-cols-3 gap-4">
                        {[
                          { src: "/images/showers.jpg", alt: "Showers" },
                          { src: "/images/sinks.jpg", alt: "Sinks" },
                          { src: "/images/countertops.jpg", alt: "Countertops" },
                        ].map(({ src, alt }, idx) => (
                          <img
                            key={idx}
                            src={src}
                            alt={alt}
                            className="rounded-lg object-cover h-36 w-full hover:scale-105 transition-transform"
                          />
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Cart & Search */}
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

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            {[
              { label: 'HOME', href: '/' },
              { label: 'PRODUCTS', href: '#' },
              { label: 'LAMINATE', href: '/laminate' },
              { label: 'ABOUT', href: '/about' },
              { label: 'CONTACT', href: '/contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-black font-medium hover:text-brand transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


