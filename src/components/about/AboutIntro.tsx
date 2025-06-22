
import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";
import { useContent } from "@/hooks/useContent";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

/* 1️⃣  Heading: slide in from the left */
const headingVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease },
  },
};

/* 2️⃣  Parent container → staggers the two columns */
const contentContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.8,  // wait until heading is nearly done
      staggerChildren: 0.5, // half-second between columns
    },
  },
};

/* 3️⃣  Individual column entrance (slow) */
const columnVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease }, // ≈2 s per column
  },
};

/* 4️⃣  Infinite upward scroll for the history block (unchanged) */
const scrollVariants: Variants = {
  animate: {
    y: ["40%", "-100%"],
    transition: { duration: 30, ease: "linear", repeat: Infinity },
  },
};

interface Props {
  pauseOnHover?: boolean;
}

const AboutIntro: React.FC<Props> = ({ pauseOnHover = false }) => {
  const { getContent } = useContent('about');

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
      className="space-y-12"
    >
      {/* ---------- Animated Heading ---------- */}
      <motion.h2
        variants={headingVariants}
        className="text-3xl lg:text-4xl font-bold text-center"
      >
        <span className="text-[#DC8C34]">
          {getContent('about_know_title', 'Know ')}
        </span>
        <span className="text-black">About Us</span>
      </motion.h2>

      {/* ---------- Content Grid ---------- */}
      <motion.div
        variants={contentContainerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        {/* --- Left column: scrolling history --- */}
        <motion.div variants={columnVariants}>
          <div
            className="relative h-80 mt-6 overflow-hidden"
            onMouseEnter={(e) => {
              if (pauseOnHover)
                (e.currentTarget.firstChild as HTMLDivElement).style.animationPlayState =
                  "paused";
            }}
            onMouseLeave={(e) => {
              if (pauseOnHover)
                (e.currentTarget.firstChild as HTMLDivElement).style.animationPlayState =
                  "running";
            }}
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <motion.div variants={scrollVariants} animate="animate" className="space-y-6">
              <h3 className="text-3xl font-semibold text-[#DC8C34] text-center">
                Company History
              </h3>

              {[
                getContent('about_company_history', "With years of expertise in the industry, we specialize in providing high-quality bathroom furniture, kitchen solutions, office installations, and hospitality fixtures that combine functionality with aesthetic appeal."),
                "Our team of skilled professionals works tirelessly to ensure that every product meets the highest standards of quality and design, delivering solutions that stand the test of time.",
                "From concept to installation, we work closely with our clients to bring their vision to life with precision and creativity.",
                "Over the past decade we have expanded our manufacturing facility three times, adopting cutting-edge CNC technology and sustainable materials.",
                "In 2020 we launched our bespoke design studio, enabling fully customised solutions for luxury residential projects.",
                "Strategic partnerships with leading hardware suppliers keep our product lines at the forefront of innovation.",
                "A dedicated after-sales support team ensures seamless maintenance and long-term customer satisfaction.",
                "Today, we proudly serve clients across Southern Africa, supplying premium fixtures to hotels, corporate offices, and private homes.",
                "Our commitment to eco-friendly practices guides every decision, from sourcing FSC-certified timber to optimising energy use in our workshops.",
              ].map((line) => (
                <p key={line} className="text-lg text-black text-center">
                  {line}
                </p>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* --- Right column: Image --- */}
        <motion.div variants={columnVariants}>
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
            alt="Our Workshop"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutIntro;
