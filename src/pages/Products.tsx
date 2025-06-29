import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/ProductsHero';
import { useContent } from '@/hooks/useContent';
import { motion, Variants } from 'framer-motion';

/* ─── Animation variants ─────────────────────────────────────────────── */
const introFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const gridStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};
/* ────────────────────────────────────────────────────────────────────── */

const Products = () => {
  const { getContent } = useContent('products');

  /* Hard-coded categories; replace with API data as needed */
  const productCategories = [
    {
      title: 'Bathroom Sinks & Basins',
      description:
        'Premium ceramic sinks and basins in various styles and sizes, from contemporary vessel sinks to classic undermount designs. Each basin is crafted for both beauty and durability.',
      image:
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      features: ['Multiple mounting options', 'Stain-resistant surface', 'Easy maintenance']
    },
    {
      title: 'Toilets & WCs',
      description:
        'Modern and efficient toilet solutions featuring advanced flushing technology, water-saving designs, and elegant aesthetics. Our toilets combine comfort with environmental responsibility.',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      features: ['Water-efficient flushing', 'Soft-close seats', 'Easy-clean coating']
    },
    {
      title: 'Bathtubs & Showers',
      description:
        'Luxurious bathing solutions from freestanding tubs to walk-in showers. Our ceramic shower trays and bathtub surrounds offer durability and timeless style for any bathroom space.',
      image:
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
      features: ['Non-slip surfaces', 'Custom sizing available', 'Premium finishes']
    },
    {
      title: 'Kitchen Sinks',
      description:
        'Durable ceramic kitchen sinks designed for heavy daily use. Available in single and double bowl configurations with various mounting options to suit any kitchen design.',
      image:
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
      features: ['Heat resistant', 'Scratch resistant', 'Deep bowl design']
    },
    {
      title: 'Countertops & Surfaces',
      description:
        'Beautiful ceramic countertops and wall surfaces that resist stains, heat, and scratches. Perfect for kitchens, bathrooms, and commercial applications.',
      image:
        'https://images.unsplash.com/photo-1556912167-f556f1bb6da8?auto=format&fit=crop&w=800&q=80',
      features: ['Heat resistant up to 300 °C', 'Non-porous surface', 'Hygienic & food-safe']
    },
    {
      title: 'Tiles & Flooring',
      description:
        'Premium ceramic tiles for floors and walls in various sizes, colors, and textures. From classic subway tiles to modern large-format options.',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      features: ['Slip-resistant options', 'Frost resistant', 'Easy maintenance']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <ProductsHero />

      {/* Product Categories Section */}
      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Section Title */}
          <motion.div
            variants={introFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
              Explore Our <span className="font-bold text-brand">Product Range</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {getContent(
                'categories_description',
                'Browse through our comprehensive collection of premium ceramic products. Each category offers a wide selection of styles, sizes, and finishes to meet your specific needs.'
              )}
            </p>
          </motion.div>

          {/* Product cards (staggered) */}
          <motion.div
            variants={gridStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {productCategories.map((cat, i) => (
              <motion.div
                key={i}
                variants={cardFade}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">{cat.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{cat.description}</p>
                  <ul className="space-y-2">
                    {cat.features.map((feat, idx) => (
                      <li key={idx} className="text-sm text-brand flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why choose us section */}
          <motion.div 
            variants={introFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-light text-black mb-8 text-center">
              Why Choose Our Products?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-brand">Premium Quality</h3>
                <p className="text-gray-600">
                  Every piece is crafted from the finest ceramic materials with attention to detail.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-brand">Durability</h3>
                <p className="text-gray-600">
                  Our products are built to withstand daily use and maintain their beauty over time.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-brand">Design Variety</h3>
                <p className="text-gray-600">
                  Choose from a wide range of styles, sizes, and finishes to match any design vision.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-brand">Expert Support</h3>
                <p className="text-gray-600">
                  Professional consultation and installation support for every project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;