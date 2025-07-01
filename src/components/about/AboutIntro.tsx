import React, { useState, useEffect } from "react";
import { motion, Variants, cubicBezier } from "framer-motion";
import { useContent } from "@/hooks/useContent";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease },
  },
};

const contentContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease },
  },
};

interface Props {
  pauseOnHover?: boolean;
}

const AboutIntro: React.FC<Props> = ({ pauseOnHover = false }) => {
  const { getContent } = useContent('about');
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const allTexts = [
    "With years of expertise in the industry, we specialize in providing high-quality bathroom furniture, kitchen solutions, office installations, and hospitality fixtures that combine functionality with aesthetic appeal. Our commitment to excellence has made us a trusted partner for architects, designers, and property developers across Southern Africa. We understand that every project is unique, which is why we offer bespoke solutions tailored to meet the specific requirements of each client. From our master craftsmen who bring decades of experience to our innovative design team that stays ahead of industry trends, we combine traditional craftsmanship with modern technology.",
    "Our team of skilled professionals works tirelessly to ensure that every product meets the highest standards of quality and design, delivering solutions that stand the test of time. This fusion allows us to create products that are not only beautiful but also durable, functional, and environmentally responsible. We take pride in our attention to detail and our ability to transform spaces into stunning, practical environments that exceed expectations.",
    "Over the past decade we have expanded our manufacturing facility three times, adopting cutting-edge CNC technology and sustainable materials. In 2020 we launched our bespoke design studio, enabling fully customised solutions for luxury residential projects. Strategic partnerships with leading hardware suppliers keep our product lines at the forefront of innovation. A dedicated after-sales support team ensures seamless maintenance and long-term customer satisfaction. Today, we proudly serve clients across Southern Africa, supplying premium fixtures to hotels, corporate offices, and private homes. Our commitment to eco-friendly practices guides every decision, from sourcing FSC-certified timber to optimising energy use in our workshops."
  ];

  useEffect(() => {
    if (currentTextIndex < allTexts.length) {
      const currentText = allTexts[currentTextIndex];
      
      if (currentCharIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex + 1);
        }, 30);

        return () => clearTimeout(timeout);
      } else {
        // Move to next text
        setTimeout(() => {
          setDisplayedTexts(prev => [...prev, currentText]);
          setCurrentTextIndex(currentTextIndex + 1);
          setCurrentCharIndex(0);
        }, 200);
      }
    }
  }, [currentTextIndex, currentCharIndex, allTexts]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3, once: true }}
          variants={headingVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#DC8C34]">
              {getContent('about_know_title', 'Know ')}
            </span>
            <span className="text-gray-900">About Us</span>
          </h2>
          <div className="w-16 h-1 bg-[#DC8C34] mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Layout */}
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3, once: true }}
          className="space-y-0"
        >
          {/* Top Row - Image and Initial Content */}
          <motion.div variants={columnVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Company History Title */}
            <div className="space-y-4 lg:pr-0 h-[500px] flex flex-col justify-start">
              <h3 className="text-2xl font-bold text-[#DC8C34]">
                Company History
              </h3>
              
              {/* Initial Typewriter Section */}
              <div className="space-y-3 flex-1">
                {/* Display first 2 completed texts */}
                {displayedTexts.slice(0, 2).map((text, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {text}
                  </p>
                ))}
                
                {/* Currently typing text (only if still in first 2 texts) */}
                {currentTextIndex < 2 && currentTextIndex < allTexts.length && (
                  <p className="text-gray-700 leading-relaxed">
                    <span>{allTexts[currentTextIndex].slice(0, currentCharIndex)}</span>
                    <span className="inline-block w-1 h-5 bg-[#DC8C34] ml-1 animate-pulse"></span>
                  </p>
                )}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:pl-0 h-[500px]">
              <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-[#DC8C34] h-full">
                <img
                  src="/images/stuff.png"
                  alt="Our Workshop"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom Section - Full Width Typewriter Text */}
          <motion.div variants={columnVariants} className="w-full">
            <div className="space-y-3">
              {/* Display remaining completed texts */}
              {displayedTexts.slice(2).map((text, index) => (
                <React.Fragment key={index + 2}>
                  {/* Add a blank line before the third paragraph */}
                  {index === 0 && <div className="h-6" />}
                  <p className="text-gray-700 leading-relaxed">
                    {text}
                  </p>
                </React.Fragment>
              ))}
              
              {/* Currently typing text (for texts after the first 2) */}
              {currentTextIndex >= 2 && currentTextIndex < allTexts.length && (
                <p className="text-gray-700 leading-relaxed">
                  <span>{allTexts[currentTextIndex].slice(0, currentCharIndex)}</span>
                  <span className="inline-block w-1 h-5 bg-[#DC8C34] ml-1 animate-pulse"></span>
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;
