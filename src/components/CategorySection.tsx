import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePageContent, getContentByKey } from "@/hooks/usePageContent";

interface Category {
  title: string;
  description: string;
  image: string;
  color: string;
  key: string;
}

const categories: Category[] = [
  {
    title: "Bathroom Furniture",
    description: "Premium vanities, cabinets, and storage solutions",
    image:
      "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=800&q=80",
    color: "from-amber-500 to-orange-600",
    key: "bathroom_category_title"
  },
  {
    title: "Ceramics & Fixtures",
    description: "Elegant basins, toilets, and ceramic accessories",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-teal-600",
    key: "kitchen_category_title"
  },
  {
    title: "Luxury Collections",
    description: "Curated sets for complete bathroom transformation",
    image:
      "https://images.unsplash.com/photo-1584622662821-6d4c7ea37027?auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500 to-pink-600",
    key: "hospitality_category_title"
  },
  {
    title: "Custom Solutions",
    description: "Bespoke designs tailored to your space",
    image:
      "https://images.unsplash.com/photo-1584622831365-4136e2a05ffe?auto=format&fit=crop&w=800&q=80",
    color: "from-green-500 to-emerald-600",
    key: "office_category_title"
  },
];

// Custom cubic-bezier easing
const ease = cubicBezier(0.25, 0.1, 0.25, 1);

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 1.4,
      ease,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease },
  },
};

const CategorySection: React.FC = () => {
  const { content, loading } = usePageContent('home');

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-lg">Loading categories...</div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="category-section"
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Our <span className="font-bold">Collections</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getContentByKey(content, 'collections_description', 'Discover our comprehensive range of bathroom solutions designed to elevate your space')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const categoryTitle = getContentByKey(content, category.key, category.title);
            const categoryDescription = getContentByKey(content, `${category.key.replace('_title', '_description')}`, category.description);
            
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group relative overflow-hidden bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={categoryTitle}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                  />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold mb-2">{categoryTitle}</h3>
                  <p className="text-sm mb-4 text-white/90">
                    {categoryDescription}
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-amber-200 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {categoryTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">{categoryDescription}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default CategorySection;
