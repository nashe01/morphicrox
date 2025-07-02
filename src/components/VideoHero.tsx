// src/components/VideoHero.tsx
import React, { useRef, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  // Only trigger once, then stop observing
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const rewindInterval = useRef<NodeJS.Timeout | null>(null);

  const handleVideoEnd = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    // Start rewinding
    if (rewindInterval.current) clearInterval(rewindInterval.current);
    rewindInterval.current = setInterval(() => {
      if (!video) return;
      if (video.currentTime <= 0.05) {
        video.currentTime = 0;
        clearInterval(rewindInterval.current!);
        video.pause();
      } else {
        video.currentTime = Math.max(0, video.currentTime - 0.03); // Slow rewind
      }
    }, 30); // ~33fps
  }, []);

  useEffect(() => {
    return () => {
      if (rewindInterval.current) clearInterval(rewindInterval.current);
    };
  }, []);

  // Hardcoded hero content
  const heroTitle = "Engineered";
  const heroSubtitle = "Perfection";
  const heroDescription = "Transform your spaces with premium ceramic solutions crafted for bathrooms, kitchens, offices, and hospitality";

  return (
    <motion.section
      ref={heroRef}
      id="hero-section"
      className="relative h-[90vh] overflow-hidden"
      variants={heroFadeUp}
      initial="hidden"
      animate={heroInView ? "visible" : "hidden"}
    >
      {/* Background video ------------------------------------------------ */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/images/hero.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          onEnded={handleVideoEnd}
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
            const categoryTitle = cat.label;
            const categoryDescription = '';
            
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
