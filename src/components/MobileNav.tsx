
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors">
          <Menu className="w-6 h-6 text-black" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-white">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          <a 
            href="/" 
            className="text-lg font-medium text-black hover:text-brand transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </a>
          
          <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium text-black hover:text-brand transition-colors py-2">
              PRODUCTS
              <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 ml-4 mt-2">
              <a 
                href="/products/showers" 
                className="block text-gray-600 hover:text-brand transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Showers
              </a>
              <a 
                href="/products/bathtub-shower-combos" 
                className="block text-gray-600 hover:text-brand transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Bathtub/Shower Combos
              </a>
              <a 
                href="/products/bathtubs" 
                className="block text-gray-600 hover:text-brand transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Bathtubs
              </a>
              <a 
                href="/products/countertops" 
                className="block text-gray-600 hover:text-brand transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Countertops
              </a>
              <a 
                href="/products/sinks" 
                className="block text-gray-600 hover:text-brand transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Sinks
              </a>
            </CollapsibleContent>
          </Collapsible>
          
          <a 
            href="/laminate" 
            className="text-lg font-medium text-black hover:text-brand transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            LAMINATE
          </a>
          <a 
            href="/about" 
            className="text-lg font-medium text-black hover:text-brand transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </a>
          <a 
            href="/contact" 
            className="bg-brand text-white px-4 py-3 rounded-md font-medium text-center hover:bg-brand/90 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
