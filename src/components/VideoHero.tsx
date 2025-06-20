import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
  { label: "Bathrooms", href: "/bathrooms" },
  { label: "Kitchens", href: "/kitchens" },
  { label: "Hospitality", href: "/hospitality" },
  { label: "Office", href: "/office" },
];

/* 1️⃣  Hero section: 0 → 1 opacity, 50 → 0 px slide‑up over 0.8 s */
const heroFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

/* 2️⃣  Cards: stay invisible, then begin at t = 0.9 s and fade for 1 s */
const fadeUpCards = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.9, duration: 1, ease: easeOut },
  },
};

const VideoHero = () => {
  /* One in‑view trigger for everything */
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={heroRef}
      className="relative h-[90vh] overflow-hidden"
      id="hero-section"
      variants={heroFadeUp}
      initial="hidden"
      animate={heroInView ? "visible" : "hidden"}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/aa70e3f3-87b5-47e3-add9-56b3854b6698.png"
          alt="Modern ceramic fittings"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Text */}
      <div className="relative z-10 h-full flex items-center pb-32">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight font-pin-sans">
              Engineered
              <span className="block font-bold">Perfection</span>
              <span className="block text-brand">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
              Transform your spaces with premium ceramic solutions crafted for
              bathrooms, kitchens, offices, and hospitality
            </p>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* no gap; crisp inner/outer edges */}
        <div className="grid grid-cols-4 h-36 divide-x divide-white/25 border-x border-white/25">
          {categories.map((cat) => (
            <motion.a
              key={cat.label}
              href={cat.href}
              className="group relative overflow-hidden backdrop-blur-sm flex items-end p-6 pb-10 bg-white/10 hover:bg-white/20 transition-all duration-300"
              variants={fadeUpCards}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              whileHover={{ y: -4, rotateX: -2, rotateY: 2 }}
              style={{
                perspective: "600px",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="relative z-10 text-white pointer-events-none">
                <p className="text-sm font-light mb-1">For</p>
                <h3 className="text-xl font-bold text-brand">{cat.label}</h3>
                <ArrowRight className="w-4 h-4 mt-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-48 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </motion.section>
  );
};

export default VideoHero;
