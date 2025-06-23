
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContent } from '@/hooks/useContent';

const Products = () => {
  const { getContent } = useContent('products');

  const productCategories = [
    {
      title: "Bathroom Sinks & Basins",
      description: "Premium ceramic sinks and basins in various styles and sizes, from contemporary vessel sinks to classic undermount designs. Each basin is crafted for both beauty and durability.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      features: ["Multiple mounting options", "Stain-resistant surface", "Easy maintenance"]
    },
    {
      title: "Toilets & WCs",
      description: "Modern and efficient toilet solutions featuring advanced flushing technology, water-saving designs, and elegant aesthetics. Our toilets combine comfort with environmental responsibility.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      features: ["Water-efficient flushing", "Soft-close seats", "Easy-clean coating"]
    },
    {
      title: "Bathtubs & Showers",
      description: "Luxurious bathing solutions from freestanding tubs to walk-in showers. Our ceramic shower trays and bathtub surrounds offer durability and timeless style for any bathroom space.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
      features: ["Non-slip surfaces", "Custom sizing available", "Premium finishes"]
    },
    {
      title: "Kitchen Sinks",
      description: "Durable ceramic kitchen sinks designed for heavy daily use. Available in single and double bowl configurations with various mounting options to suit any kitchen design.",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
      features: ["Heat resistant", "Scratch resistant", "Deep bowl design"]
    },
    {
      title: "Countertops & Surfaces",
      description: "Beautiful ceramic countertops and wall surfaces that resist stains, heat, and scratches. Perfect for kitchens, bathrooms, and commercial applications.",
      image: "https://images.unsplash.com/photo-1556912167-f556f1bb6da8?auto=format&fit=crop&w=800&q=80",
      features: ["Heat resistant up to 300°C", "Non-porous surface", "Hygienic and food-safe"]
    },
    {
      title: "Tiles & Flooring",
      description: "Premium ceramic tiles for floors and walls in various sizes, colors, and textures. From classic subway tiles to modern large format options.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      features: ["Slip-resistant options", "Frost resistant", "Easy maintenance"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4">
              Our <span className="font-bold text-brand">Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              {getContent('products_description', 'Discover our comprehensive range of premium ceramic products designed for residential, commercial, and hospitality applications. Each product is crafted with attention to detail and built to last.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-1 mb-4">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-brand">• {feature}</li>
                    ))}
                  </ul>
                  <button className="w-full bg-brand text-white py-2 px-4 rounded-md hover:bg-brand/90 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-light text-black mb-6 text-center">Why Choose Our Products?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Premium Quality</h3>
                <p className="text-gray-600">Every piece is crafted from the finest ceramic materials with attention to detail.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Durability</h3>
                <p className="text-gray-600">Our products are built to withstand daily use and maintain their beauty over time.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Design Variety</h3>
                <p className="text-gray-600">Choose from a wide range of styles, sizes, and finishes to match any design vision.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Expert Support</h3>
                <p className="text-gray-600">Professional consultation and installation support for every project.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
