
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

const AboutIntro: React.FC = () => {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div>
        <p className="text-xl text-gray-600 mb-6">
          With years of expertise in the industry, we specialize in
          providing high‑quality bathroom furniture, kitchen solutions,
          office installations, and hospitality fixtures that combine
          functionality with aesthetic appeal.
        </p>
        <p className="text-gray-600 mb-6">
          Our team of skilled professionals works tirelessly to ensure
          that every product meets the highest standards of quality and
          design, delivering solutions that stand the test of time.
        </p>
        <p className="text-gray-600">
          From concept to installation, we work closely with our clients
          to bring their vision to life with precision and creativity.
        </p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
          alt="Our Workshop"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default AboutIntro;
