
import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";
import { useContent } from "@/hooks/useContent";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

/* 1️⃣ Heading animation: slides in from the left */
const headingVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease },
  },
};

/* 2️⃣ Parent container for staggering cards */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.6,   // wait for heading, then start cards
      staggerChildren: 0.4, // 0.4 s gap between cards
    },
  },
};

/* 3️⃣ Individual card animation */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease }, // each card ≈ 2 s
  },
};

const WhatWeDo: React.FC = () => {
  const { getContent } = useContent('about');

  const services = [
    {
      title: "Design & Consultation",
      description:
        "Expert design consultation and 3D visualization to bring your vision to life with precision and creativity.",
    },
    {
      title: "Manufacturing",
      description:
        "State-of-the-art ceramic manufacturing using the latest technology for superior quality and durability.",
    },
    {
      title: "Installation",
      description:
        "Professional installation services by certified technicians ensuring perfect fit and finish.",
    },
    {
      title: "Support",
      description:
        "Comprehensive after-sales support and maintenance services to keep your installations pristine.",
    },
  ];

  return (
    <motion.section
      className="mt-24" // pushes whole block down; adjust as needed
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }} // plays once
    >
      {/* Animated heading */}
      <motion.h2
        variants={headingVariants}
        className="text-3xl font-light mb-8 text-center"
      >
        <span className="text-brand">
          {getContent('what_we_do_title', 'What ')}
        </span>
        <span className="text-black">We Do</span>
      </motion.h2>

      {/* Staggered cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            className="text-center p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-brand mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhatWeDo;
