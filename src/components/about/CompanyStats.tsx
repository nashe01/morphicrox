
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

const CompanyStats: React.FC = () => {
  const stats = [
    ["500+", "Projects Completed"],
    ["15+", "Years of Experience"],
    ["98%", "Client Satisfaction"],
    ["24/7", "Customer Support"],
  ];

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
      className="bg-gray-50 p-8 rounded-lg"
    >
      <h2 className="text-3xl font-light text-black mb-8 text-center">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map(([value, label]) => (
          <div key={label}>
            <h3 className="text-4xl font-bold text-brand mb-2">
              {value}
            </h3>
            <p className="text-gray-600">{label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CompanyStats;
