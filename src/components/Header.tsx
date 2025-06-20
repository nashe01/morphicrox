
import React, { useState } from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

/* -----------------------------------------------------------
   Data: product categories + preview images
   ----------------------------------------------------------- */
const categories = [
  { label: "Showers", href: "/products/showers", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop" },
  { label: "Bathtub/Shower Combos", href: "/products/bathtub-shower-combos", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop" },
  { label: "Bathtubs", href: "/products/bathtubs", image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=400&h=300&fit=crop" },
  { label: "Countertops", href: "/products/countertops", image: "https://images.unsplash.com/photo-1556912167-f556f1bb6da8?w=400&h=300&fit=crop" },
  { label: "Sinks", href: "/products/sinks", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop" },
];

const Header = () => {
  const [previewSrc, setPreviewSrc] = useState(categories[0].image);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src="/lovable-uploads/9aeca46e-6ec2-4e7f-a3fa-94e925134823.png"
            alt="MorphicRox Logo"
            className="h-12 w-auto"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* HOME */}
            <a
              href="/"
              className="text-brand font-medium px-3 py-2 transition-all hover:underline underline-offset-8"
            >
              HOME
            </a>

            {/* PRODUCTS (Mega Menu) */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-brand font-medium px-3 py-2 bg-transparent transition-all hover:underline underline-offset-8"
                  >
                    PRODUCTS
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <div className="flex w-[700px] p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
                      {/* Category list (left) */}
                      <ul className="w-1/2 space-y-2 text-sm">
                        {categories.map((c) => (
                          <li key={c.href}>
                            <a
                              href={c.href}
                              onMouseEnter={() => setPreviewSrc(c.image)}
                              onFocus={() => setPreviewSrc(c.image)}
                              className="block text-gray-700 hover:text-brand transition-colors duration-200"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {/* Preview image (right) */}
                      <div className="ml-auto w-1/2 flex justify-end items-end">
                        <img
                          key={previewSrc}
                          src={previewSrc}
                          alt="Product preview"
                          className="h-32 w-56 object-cover rounded-md shadow animate-slidein"
                        />
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Other Links */}
            {[
              { label: "LAMINATE", href: "/laminate" },
              { label: "ABOUT", href: "/about" },
              { label: "CONTACT", href: "/contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-brand font-medium px-3 py-2 transition-all hover:underline underline-offset-8"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand text-white text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <a href="/" className="block text-brand font-medium">HOME</a>
            <details className="group">
              <summary className="cursor-pointer text-brand font-medium">PRODUCTS</summary>
              <div className="ml-4 mt-2 space-y-1">
                {categories.map((c) => (
                  <a key={c.href} href={c.href} className="block text-sm text-gray-700 hover:text-brand">
                    {c.label}
                  </a>
                ))}
              </div>
            </details>
            <a href="/laminate" className="block text-brand font-medium">LAMINATE</a>
            <a href="/about" className="block text-brand font-medium">ABOUT</a>
            <a href="/contact" className="block text-brand font-medium">CONTACT</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
