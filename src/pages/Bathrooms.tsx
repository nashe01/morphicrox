import React from 'react';
import { motion, Variants, cubicBezier } from "framer-motion";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Bathrooms = () => {
  const ease = cubicBezier(0.25, 0.1, 0.25, 1);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 1.4,
        ease,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease },
    },
  };
  const bathroomCategories = [
    {
      title: "Vanities & Cabinets",
      description: "Premium storage solutions with elegant design and superior craftsmanship. Our vanities combine functionality with style, featuring soft-close drawers and premium hardware.",
      image: "/images/spar1.jpeg",
      features: ["Soft-close mechanisms", "Water-resistant finish", "Custom sizing available"]
    },
    {
      title: "Ceramic Basins",
      description: "Elegant washbasins in various styles and sizes, from contemporary vessel sinks to classic undermount designs. Each basin is crafted for both beauty and durability.",
      image: "/images/sink2.jpg",
      features: ["Multiple mounting options", "Stain-resistant surface", "Easy maintenance"]
    },
    {
      title: "Bathroom Accessories",
      description: "Complete your bathroom with matching accessories including towel bars, soap dispensers, and storage solutions. All designed to complement our ceramic collections.",
      image: "/images/bathroom5.jpg",
      features: ["Coordinated finishes", "Premium materials", "Professional installation"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <motion.div 
          className="max-w-7xl mx-auto px-6 py-16"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={textVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4 font-pin-sans">
              Bathroom <span className="font-bold text-brand">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover our comprehensive range of bathroom ceramic fittings and furniture designed to create luxurious and functional spaces. From contemporary minimalism to classic elegance, we have solutions for every style preference.
            </p>
          </motion.div>
          
          <motion.div variants={cardVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {bathroomCategories.map((category, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
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

                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={cardVariants} className="bg-gray-50 p-8 rounded-lg mb-16">
            <motion.h2 variants={textVariants} className="text-3xl font-light text-black mb-6 text-center">Why Choose Our Bathroom Solutions?</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Premium Quality</h3>
                <p className="text-gray-600">Every piece is crafted from the finest ceramic materials with attention to detail.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Custom Design</h3>
                <p className="text-gray-600">Work with our design team to create a bathroom that reflects your personal style.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Expert Installation</h3>
                <p className="text-gray-600">Professional installation ensures perfect fit and long-lasting performance.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Lifetime Support</h3>
                <p className="text-gray-600">Comprehensive warranty and ongoing support for peace of mind.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={textVariants}>
              <h2 className="text-3xl font-light text-black mb-6">Transform Your Bathroom Experience</h2>
              <p className="text-gray-600 mb-4">
                Your bathroom should be more than just functional—it should be a personal sanctuary where you can relax and rejuvenate. Our ceramic solutions combine cutting-edge design with superior functionality to create spaces that enhance your daily routine.
              </p>
              <p className="text-gray-600 mb-6">
                From compact powder rooms to luxurious master suites, we have the expertise and products to bring your vision to life. Our team works closely with you throughout the entire process, from initial design consultation to final installation.
              </p>

            </motion.div>
            <motion.div variants={cardVariants}>
              <img 
                src="/images/bathroom6.jpg" 
                alt="Luxury Bathroom" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Bathrooms;
