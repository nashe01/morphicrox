import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useContent } from "@/hooks/useContent";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

/* ── Animation Variants ─────────────────────────────────────────────── */
const heroVariants: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      duration: 1.2, 
      ease,
      staggerChildren: 0.2 
    } 
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease } 
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease, delay: 0.3 } 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease } 
  },
};

const ProductsHero: React.FC = () => {
  const { getContent } = useContent('products');

  const heroCategories = [
    {
      title: "Bathrooms",
      description: "Premium ceramic solutions for modern bathrooms",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
      href: "/bathrooms",
      gradient: "from-blue-500/20 to-purple-600/20"
    },
    {
      title: "Kitchens", 
      description: "Durable and beautiful kitchen ceramics",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
      href: "/kitchens",
      gradient: "from-orange-500/20 to-red-600/20"
    },
    {
      title: "Hospitality",
      description: "Commercial-grade ceramic solutions",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      href: "/hospitality", 
      gradient: "from-emerald-500/20 to-teal-600/20"
    }
  ];

  return (
    <motion.section
      className="relative min-h-[90vh] bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
      variants={heroVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Text */}
        <div className="text-center mb-16">
          <motion.div variants={titleVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-4">
              Premium
              <span className="block font-bold text-brand">Ceramic</span>
              <span className="block text-4xl md:text-5xl font-light">Products</span>
            </h1>
          </motion.div>
          
          <motion.div variants={subtitleVariants}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {getContent(
                'hero_description',
                'Discover our comprehensive collection of premium ceramic solutions designed for residential, commercial, and hospitality applications. Each product embodies our commitment to quality, durability, and timeless design.'
              )}
            </p>
            
            {/* Sparkles Icon */}
            <div className="flex items-center justify-center mt-6 text-brand">
              <Sparkles className="w-6 h-6 mr-2" />
              <span className="text-sm font-medium">Crafted with Precision</span>
              <Sparkles className="w-6 h-6 ml-2" />
            </div>
          </motion.div>
        </div>

        {/* Category Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={heroVariants}
        >
          {heroCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group relative"
            >
              <a 
                href={category.href}
                className="block relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient}`} />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="flex items-center text-brand group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium mr-2">Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={cardVariants}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-brand mb-2">500+</div>
              <div className="text-gray-600">Product Variants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand mb-2">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-500/10 rounded-full blur-lg" />
    </motion.section>
  );
};

export default ProductsHero; 