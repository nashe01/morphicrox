// src/pages/About.tsx
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, Variants, cubicBezier } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  1. Animation variants                                              */
/* ------------------------------------------------------------------ */

const ease = cubicBezier(0.25, 0.1, 0.25, 1);

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease },
  },
};

/* ------------------------------------------------------------------ */
/*  2. Page component                                                  */
/* ------------------------------------------------------------------ */

const About: React.FC = () => {
  /* ----- curtain/parallax scroll effect (unchanged) ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroSection = document.getElementById("about-hero-section");
      const mainContent = document.getElementById("about-main-content");

      if (heroSection && mainContent) {
        const heroHeight = heroSection.offsetHeight;
        const maxScroll = heroHeight * 0.5;

        const curtainOffset = Math.min(scrolled * 0.7, maxScroll);

        mainContent.style.transform = `translateY(-${curtainOffset}px)`;
        heroSection.style.transform = `translateY(-${scrolled * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ----- mock data ------------------------------------------------- */
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

  /* ------------------------------------------------------------------ */
  /*  3. Mark‑up                                                       */
  /* ------------------------------------------------------------------ */

  return (
    <div className="min-h-screen">
      <Header />

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <motion.section
        id="about-hero-section"
        className="relative h-[80vh] overflow-hidden pt-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="About MorphicRox"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center pb-16">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight font-pin-sans">
                About
                <span className="block font-bold text-brand">MorphicRox</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                At MorphicRox, we believe in engineered perfection. Our
                commitment to excellence drives us to create premium ceramic
                solutions that transform spaces and elevate experiences.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── MAIN CONTENT (curtain moves this block) ─────────────────── */}
      <main
        id="about-main-content"
        className="relative bg-white z-30 mt-[-10vh]"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
          {/* Section 1: Intro ------------------------------------------------ */}
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

          {/* Section 2: What We Do ----------------------------------------- */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl font-light text-black mb-8">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Design & Consultation", "Manufacturing", "Installation", "Support"].map(
                (title, i) => (
                  <motion.div
                    key={title}
                    variants={sectionVariants}
                    className="text-center p-6 bg-white rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-brand mb-4">
                      {title}
                    </h3>
                    <p className="text-gray-600">
                      {[
                        "Expert design consultation and 3D visualization to bring your vision to life with precision and creativity.",
                        "State‑of‑the‑art ceramic manufacturing using the latest technology for superior quality and durability.",
                        "Professional installation services by certified technicians ensuring perfect fit and finish.",
                        "Comprehensive after‑sales support and maintenance services to keep your installations pristine.",
                      ][i]}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Section 3: Portfolio ----------------------------------------- */}
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

          {/* Section 4: Company stats -------------------------------------- */}
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
              {[
                ["500+", "Projects Completed"],
                ["15+", "Years of Experience"],
                ["98%", "Client Satisfaction"],
                ["24/7", "Customer Support"],
              ].map(([value, label]) => (
                <div key={label}>
                  <h3 className="text-4xl font-bold text-brand mb-2">
                    {value}
                  </h3>
                  <p className="text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default About;

