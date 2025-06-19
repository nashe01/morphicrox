import React, { useState } from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  /* ---------- product data & state ---------- */
  const categories = [
    { label: "Showers", href: "/products/showers", image: "/images/showers.jpg" },
    { label: "Bathtub/Shower Combos", href: "/products/bathtub-shower-combos", image: "/images/combos.jpg" },
    { label: "Bathtubs", href: "/products/bathtubs", image: "/images/bathtubs.jpg" },
    { label: "Countertops", href: "/products/countertops", image: "/images/countertops.jpg" },
    { label: "Sinks", href: "/products/sinks", image: "/images/sinks.jpg" },
  ];
  const [previewSrc, setPreviewSrc] = useState(categories[0].image);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---------- render ---------- */
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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* HOME */}
            <a href="/" className="text-black font-medium hover:text-brand px-3 py-2 transition-colors">
              HOME
            </a>

            {/* PRODUCTS mega‑menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black font-medium px-4 py-2 rounded-full hover:bg-gray-100 data-[state=open]:bg-black data-[state=open]:text-white transition-all">
                    PRODUCTS
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <div className="flex w-[880px] p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
                      {/* Category list */}
                      <ul className="w-1/3 space-y-2 text-sm">
                        {categories.map((c) => (
                          <li key={c.href}>
                            <a
                              href={c.href}
                              onMouseEnter={() => setPreviewSrc(c.image)}
                              onFocus={() => setPreviewSrc(c.image)}
                              className="text-gray-700 hover:text-brand transition-colors"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {/* Preview image (right‑aligned, smaller, slide‑in) */}
                      <div className="ml-auto w-1/2 flex justify-end items-end">
                        <img
                          key={previewSrc} /* re‑mount to trigger animation */
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

            {/* Remaining links */}
            {[
              { label: "LAMINATE", href: "/laminate" },
              { label: "ABOUT", href: "/about" },
              { label: "CONTACT", href: "/contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black font-medium hover:text-brand px-3 py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
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

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <a href="/" className="block text-black font-medium hover:text-brand">HOME</a>
            <details className="group">
              <summary className="cursor-pointer text-black font-medium hover:text-brand">PRODUCTS</summary>
              <div className="ml-4 mt-2 space-y-1">
                {categories.map((c) => (
                  <a key={c.href} href={c.href} className="block text-sm text-gray-700 hover:text-brand">
                    {c.label}
                  </a>
                ))}
              </div>
            </details>
            <a href="/laminate" className="block text-black font-medium hover:text-brand">LAMINATE</a>
            <a href="/about"   className="block text-black font-medium hover:text-brand">ABOUT</a>
            <a href="/contact" className="block text-black font-medium hover:text-brand">CONTACT</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
