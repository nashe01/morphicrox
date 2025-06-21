import React from "react";
import { Award, Truck, Shield, Users } from "lucide-react";
import { motion, Variants, cubicBezier } from "framer-motion";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Crafted with the finest materials and attention to detail",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Complimentary delivery and installation services",
  },
  {
    icon: Shield,
    title: "10 Year Warranty",
    description: "Extended warranty coverage on all our products",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Professional consultation and design assistance",
  },
];

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,                // Delayed section entry
      when: "beforeChildren",
      staggerChildren: 0.4,      // More time between cards
      duration: 1.6,
      ease,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease,
    },
  },
};

const FeaturesSection: React.FC = () => (
  <motion.section
    className="py-20 bg-white"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ amount: 0.25 }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <motion.div variants={cardVariants} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-4 font-pin-sans">
          Why Choose <span className="font-bold text-brand">MorphicRox</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience the difference with our commitment to excellence and
          customer satisfaction
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            className="text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-brand rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default FeaturesSection;
