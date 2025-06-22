
import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";
import { useContent } from "@/hooks/useContent";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

/* ── 1. Background entrance ─────────────────────── */
const heroVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease } },
};

/* ── 2. Title slides from left (begins right after bg) ── */
const titleVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.3, ease, delay: 1.3 }, // 1.3 s delay
  },
};

/* ── 3. Paragraph slides from bottom (starts last) ── */
const paraVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease, delay: 2.1 }, // ≈0.8 s after title
  },
};

const AboutHero: React.FC = () => {
  const { getContent } = useContent('about');

  return (
    <motion.section
      id="about-hero-section"
      className="relative overflow-hidden"
      variants={heroVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
    >
      {/* Background */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt="About MorphicRox"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 -mt-10 md:-mt-16 relative z-10">
        {/* Title */}
        <motion.header variants={titleVariants} className="md:w-1/2 mt-10">
          <h1 className="text-3xl md:text-5xl font-light leading-tight font-pin-sans">
            {getContent('about_main_title', 'About')}
            <span className="block">
              <span className="text-[#DC8C34]">Morphic</span>
              <span className="text-black">Rox</span>
            </span>
          </h1>
        </motion.header>

        {/* Paragraph */}
        <motion.div variants={paraVariants} className="md:w-1/2 mt-4 md:mt-6">
          <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
            {getContent('about_description', 'At MorphicRox, we believe in engineered perfection. Our commitment to excellence drives us to create premium ceramic solutions that transform spaces and elevate experiences. Each design is a reflection of timeless aesthetics combined with durable functionality.')}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutHero;
