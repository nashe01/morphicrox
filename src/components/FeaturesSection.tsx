
import React from "react";
import { Award, Truck, Shield, Users } from "lucide-react";
import { motion, Variants, cubicBezier } from "framer-motion";
import { useContent } from "@/hooks/useContent";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, when: "beforeChildren", staggerChildren: 0.4, duration: 1.6, ease },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show:   { opacity: 1, y: 0, transition: { duration: 1.2, ease } },
};

const FeaturesSection: React.FC = () => {
  const { getContent } = useContent('home');

  const features = [
    { 
      icon: Award,  
      title: getContent('features_premium_quality_title', 'Premium Quality'), 
      description: getContent('features_premium_quality_desc', 'Crafted with the finest materials and attention to detail')
    },
    { 
      icon: Truck,  
      title: getContent('features_free_delivery_title', 'Free Delivery'),    
      description: getContent('features_free_delivery_desc', 'Complimentary delivery and installation services')
    },
    { 
      icon: Shield, 
      title: getContent('features_warranty_title', '10 Year Warranty'), 
      description: getContent('features_warranty_desc', 'Extended warranty coverage on all our products')
    },
    { 
      icon: Users,  
      title: getContent('features_support_title', 'Expert Support'),   
      description: getContent('features_support_desc', 'Professional consultation and design assistance')
    },
  ];

  return (
    <motion.section
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 font-pin-sans">
            {getContent('features_why_choose_title',)} <span className="font-bold text-brand">MorphicRox</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence and customer satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={cardVariants} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-brand rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
