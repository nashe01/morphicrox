import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

/* 1. Section entrance */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease } },
};

/* 2. Infinite upward scroll */
const scrollVariants: Variants = {
  animate: {
    y: ["40%", "-100%"], // 40 % offset so heading enters in view
    transition: { duration: 30, ease: "linear", repeat: Infinity },
  },
};

interface Props {
  pauseOnHover?: boolean;
}

const AboutIntro: React.FC<Props> = ({ pauseOnHover = false }) => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ amount: 0.3, once: true }}
    className="space-y-12"
  >
    {/* ---------- Main Section Heading ---------- */}
    <h2 className="text-3xl lg:text-4xl font-bold text-center">
      <span className="text-[#DC8C34]">Know </span>
      <span className="text-black">About Us</span>
    </h2>

    {/* ---------- Content Grid ---------- */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* --- Left column: scrolling history --- */}
      <div
        className="relative h-80 mt-6 overflow-hidden"
        /* pause animation on hover if desired */
        onMouseEnter={(e) => {
          if (pauseOnHover) (e.currentTarget.firstChild as HTMLDivElement).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) (e.currentTarget.firstChild as HTMLDivElement).style.animationPlayState = "running";
        }}
        /* long fade top & bottom via mask-image */
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <motion.div
          variants={scrollVariants}
          animate="animate"
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold text-[#DC8C34] text-center">
            Company History
          </h3>

          {[
            "With years of expertise in the industry, we specialize in providing high-quality bathroom furniture, kitchen solutions, office installations, and hospitality fixtures that combine functionality with aesthetic appeal.",
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

      {/* --- Right column: Image --- */}
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

export default AboutIntro;





