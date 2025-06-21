
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

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Luxury Hotel Bathroom Suite",
      description:
        "Complete bathroom renovation for 5‑star hotel with premium ceramic fixtures",
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
    {
      id: 3,
      title: "Corporate Office Washrooms",
      description:
        "High‑traffic commercial bathroom installation with durable ceramic solutions",
      image:
        "https://images.unsplash.com/photo-1584622662821-6d4c7ea37027?auto=format&fit=crop&w=800&q=80",
      category: "Commercial",
    },
    {
      id: 4,
      title: "Spa Retreat Center",
      description: "Serene spa environment with custom ceramic installations",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      category: "Hospitality",
    },
    {
      id: 5,
      title: "Restaurant Kitchen Design",
      description:
        "Commercial kitchen with slip‑resistant ceramic flooring and walls",
      image:
        "https://images.unsplash.com/photo-1556909114-3934c1000-8a5f?auto=format&fit=crop&w=800&q=80",
      category: "Commercial",
    },
    {
      id: 6,
      title: "Residential Master Bath",
      description:
        "Elegant master bathroom featuring vessel sinks and ceramic tile work",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
      category: "Residential",
    },
  ];

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-black mb-4">
          Our Portfolio
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse through some of our exceptional work. From residential
          renovations to large‑scale commercial projects, we deliver
          excellence in every installation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            variants={sectionVariants}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm bg-brand text-white px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
