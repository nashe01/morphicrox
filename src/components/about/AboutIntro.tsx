import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

/* Section entrance animation */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease },
  },
};

/* Continuous scrolling effect */
const scrollVariants: Variants = {
  animate: {
    y: ["0%", "-50%"],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const AboutIntro: React.FC = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
      className="space-y-12"
    >
      {/* Section Heading */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        <span className="text-[#DC8C34]">Know </span>
        <span className="text-black">About Us</span>
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: History Section */}
        <div className="flex flex-col space-y-4">
          {/* Company History Label */}
          <h3 className="text-2xl font-semibold text-[#DC8C34]">Company History</h3>

          {/* Scrolling Container */}
          <div className="relative h-56 overflow-hidden">
            <motion.div
              variants={scrollVariants}
              animate="animate"
              className="space-y-6 text-gray-700 text-lg"
            >
              {/* Duplicated Content Block for Seamless Loop */}
              {[...Array(2)].map((_, index) => (
                <div key={index} className="space-y-6">
                  <p>
                    With years of expertise in the industry, we specialize in providing
                    high‑quality bathroom furniture, kitchen solutions, office
                    installations, and hospitality fixtures that combine functionality
                    with aesthetic appeal.
                  </p>
                  <p>
                    Our team of skilled professionals works tirelessly to ensure that
                    every product meets the highest standards of quality and design,
                    delivering solutions that stand the test of time.
                  </p>
                  <p>
                    From concept to installation, we work closely with our clients to
                    bring their vision to life with precision and creativity.
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
            alt="Our Workshop"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutIntro;

