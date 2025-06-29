// src/components/VideoHero.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { usePageContent, getContentByKey } from "@/hooks/usePageContent";

/* ------------------------------------------------------------------ */
/*  1. Data                                                            */
/* ------------------------------------------------------------------ */

const categories = [
  { label: "Bathrooms", href: "/bathrooms", key: "bathroom_category_title" },
  { label: "Kitchens", href: "/kitchens", key: "kitchen_category_title" },
  { label: "Hospitality", href: "/hospitality", key: "hospitality_category_title" },
  { label: "Office", href: "/office", key: "office_category_title" },
];

/* ------------------------------------------------------------------ */
/*  2. Variants                                                        */
/* ------------------------------------------------------------------ */

const heroFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const fadeUpCards = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.9, duration: 1, ease: easeOut },
  },
};

/* ------------------------------------------------------------------ */
/*  3. Component                                                       */
/* ------------------------------------------------------------------ */

const VideoHero: React.FC = () => {
  const { content, loading } = usePageContent("home");
  
  // Only trigger once, then stop observing
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Get content from database
  const heroTitle = getContentByKey(content, "hero_title", "Engineered");
  const heroSubtitle = getContentByKey(content, "hero_subtitle", "Perfection");
  const heroDescription = getContentByKey(content, "hero_description", "Transform your spaces with premium ceramic solutions crafted for bathrooms, kitchens, offices, and hospitality");

  if (loading) {
    return (
      <div className="relative h-[90vh] overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <motion.section
      ref={heroRef}
      id="hero-section"
      className="relative h-[90vh] overflow-hidden"
      variants={heroFadeUp}
      initial="hidden"
      animate={heroInView ? "visible" : "hidden"}
    >
      {/* Background image ------------------------------------------------ */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/aa70e3f3-87b5-47e3-add9-56b3854b6698.png"
          alt="Modern ceramic fittings"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero text ------------------------------------------------------- */}
      <div className="relative z-10 h-full flex items-center pb-32">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight font-pin-sans">
              {heroTitle}
              <span className="block font-bold">{heroSubtitle}</span>
              <span className="block text-brand">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
              {heroDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Category cards -------------------------------------------------- */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-visible">
        <div className="grid grid-cols-4 h-36 divide-x divide-white/25 border-x border-white/25 relative z-0">
          {categories.map((cat) => {
            const categoryTitle = getContentByKey(content, cat.key, cat.label);
            const categoryDescription = getContentByKey(content, `${cat.key.replace('_title', '_description')}`, '');
            
            return (
              <motion.a
                key={cat.label}
                href={cat.href}
                className="group relative overflow-visible backdrop-blur-sm flex items-end p-6 pb-10 bg-white/10 hover:bg-white/20"
                variants={fadeUpCards}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  rotateX: -2,
                  rotateY: 2,
                  zIndex: 10,
                  transition: { duration: 0.25 },
                }}
                transition={{ duration: 0.12 }}
                style={{
                  perspective: "600px",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="relative z-10 text-white pointer-events-none">
                  <p className="text-sm font-light mb-1">For</p>
                  <h3 className="text-xl font-bold text-brand">{categoryTitle}</h3>
                  {categoryDescription && (
                    <p className="text-xs text-gray-300 mt-1 line-clamp-2">{categoryDescription}</p>
                  )}
                  <ArrowRight className="w-4 h-4 mt-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator ------------------------------------------------ */}
      <div className="absolute bottom-48 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </motion.section>
  );
};

export default VideoHero;
