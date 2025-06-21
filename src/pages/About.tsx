
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import WhatWeDo from "../components/about/WhatWeDo";
import Portfolio from "../components/about/Portfolio";
import CompanyStats from "../components/about/CompanyStats";

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

  return (
    <div className="min-h-screen">
      <Header />

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <AboutHero />

      {/* ── MAIN CONTENT (curtain moves this block) ─────────────────── */}
      <main
        id="about-main-content"
        className="relative bg-white z-30 mt-[-10vh]"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
          <AboutIntro />
          <WhatWeDo />
          <Portfolio />
          <CompanyStats />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default About;
