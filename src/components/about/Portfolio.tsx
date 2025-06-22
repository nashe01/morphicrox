
import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";
import { useContent } from "@/hooks/useContent";
import { useNavigate } from "react-router-dom";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

const headingVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 1.4, ease } },
};

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.5, staggerChildren: 0.25 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
};

const Portfolio: React.FC = () => {
  const { getContent } = useContent('about');
  const navigate = useNavigate();

  const portfolioItems = [
    {
      id: 1,
      title: "Luxury Hotel Bathroom Suite",
      description:
        "Complete bathroom renovation for 5-star hotel with premium ceramic fixtures",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      category: "Hospitality",
    },
    {
      id: 2,
      title: "Modern Kitchen Transformation",
      description:
        "Contemporary kitchen design featuring ceramic countertops and backsplash",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      category: "Residential",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
      className="space-y-12"
    >
      {/* Section Heading */}
      <motion.h2
        variants={headingVariants}
        className="text-3xl font-light text-center mt-8"
      >
        <span className="text-brand">
          {getContent('portfolio_title', 'Our ')}
        </span>
        <span className="text-black">Work</span>
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={gridVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
      >
        {/* Two Image Cards */}
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col gap-3">
              <span className="self-start text-sm bg-brand text-white px-3 py-1 rounded-full">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}

        {/* Text Panel */}
        <motion.div
          key="explore-panel"
          variants={itemVariants}
          className="flex flex-col h-full text-center px-2 md:px-4 lg:px-6 pt-6 pb-4"
        >
          {/* Text Content */}
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold text-brand mb-4">Explore</h3>
            <p className="text-gray-600 mb-4">
              {getContent('portfolio_explore_text', 'Discover our full gallery of projects featuring both high-quality images and behind-the-scenes videos that showcase our attention to detail, creativity, and craftsmanship.')}
            </p>
            <p className="text-gray-600 mb-4">
              Our gallery highlights the materials, techniques,
              and finishes that define our work.
            </p>
            <p className="text-gray-600">
              See how we bring our clients' visions to life from concept to completion.
            </p>
          </div>

          {/* Button with minimal top margin */}
          <div className="mt-2">
            <button 
              onClick={() => navigate('/gallery')}
              className="px-6 py-2 rounded-full bg-brand text-white hover:bg-brand/90 transition"
            >
              Gallery
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
