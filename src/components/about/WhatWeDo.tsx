
import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease },
  },
};

const WhatWeDo: React.FC = () => {
  const services = [
    {
      title: "Design & Consultation",
      description: "Expert design consultation and 3D visualization to bring your vision to life with precision and creativity."
    },
    {
      title: "Manufacturing",
      description: "State‑of‑the‑art ceramic manufacturing using the latest technology for superior quality and durability."
    },
    {
      title: "Installation",
      description: "Professional installation services by certified technicians ensuring perfect fit and finish."
    },
    {
      title: "Support",
      description: "Comprehensive after‑sales support and maintenance services to keep your installations pristine."
    }
  ];

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
    >
      <h2 className="text-3xl font-light text-black mb-8">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={sectionVariants}
            className="text-center p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-brand mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
