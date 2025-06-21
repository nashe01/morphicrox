
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

const AboutHero: React.FC = () => {
  return (
    <motion.section
      id="about-hero-section"
      className="relative h-[80vh] overflow-hidden pt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt="About MorphicRox"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center pb-16">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight font-pin-sans">
              About
              <span className="block font-bold text-brand">MorphicRox</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              At MorphicRox, we believe in engineered perfection. Our
              commitment to excellence drives us to create premium ceramic
              solutions that transform spaces and elevate experiences.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutHero;
