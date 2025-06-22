import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

/* -------------------------------------------------- */
/* 1. Section entrance animation                       */
/* -------------------------------------------------- */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease },
  },
};

/* -------------------------------------------------- */
/* 2. Infinite upward scroll for the history text      */
/* -------------------------------------------------- */
const scrollVariants: Variants = {
  animate: {
    y: ["40%", "-100%"],
    transition: {
      duration: 30,
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
      {/* ---------- Heading ---------- */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        <span className="text-[#DC8C34]">Know </span>
        <span className="text-black">About Us</span>
      </h2>

      {/* ---------- Content Grid ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* --- Left side: Company history --- */}
        <div className="flex flex-col space-y-4">
          {/* History Label */}
          <h3 className="text-2xl font-semibold text-[#DC8C34]">
            Company History
          </h3>

          {/* Scrolling history container */}
          <div className="relative h-80 overflow-hidden">
            <motion.div
              variants={scrollVariants}
              animate="animate"
              className="space-y-6"
            >
              <p className="text-lg text-black">
                With years of expertise in the industry, we specialize in providing
                high-quality bathroom furniture, kitchen solutions, office
                installations, and hospitality fixtures that combine functionality
                with aesthetic appeal.
              </p>
              <p className="text-lg text-black">
                Our team of skilled professionals works tirelessly to ensure that
                every product meets the highest standards of quality and design,
                delivering solutions that stand the test of time.
              </p>
              <p className="text-lg text-black">
                From concept to installation, we work closely with our clients to
                bring their vision to life with precision and creativity.
              </p>
              <p className="text-lg text-black">
                Over the past decade we have expanded our manufacturing facility
                three times, adopting cutting-edge CNC technology and sustainable
                materials.
              </p>
              <p className="text-lg text-black">
                In 2020 we launched our bespoke design studio, enabling fully
                customised solutions for luxury residential projects.
              </p>
              <p className="text-lg text-black">
                Strategic partnerships with leading hardware suppliers keep our
                product lines at the forefront of innovation.
              </p>
              <p className="text-lg text-black">
                A dedicated after-sales support team ensures seamless maintenance
                and long-term customer satisfaction.
              </p>
              <p className="text-lg text-black">
                Today, we proudly serve clients across Southern Africa, supplying
                premium fixtures to hotels, corporate offices, and private homes.
              </p>
              <p className="text-lg text-black">
                Our commitment to eco-friendly practices guides every decision, from
                sourcing FSC-certified timber to optimising energy use in our
                workshops.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- Right side: Image --- */}
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




