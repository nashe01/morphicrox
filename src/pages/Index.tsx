
import React, { useEffect } from 'react';
import Header from '../components/Header';
import VideoHero from '../components/VideoHero';
import CategorySection from '../components/CategorySection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add loading animation class to body
    document.body.classList.add('animate-fade-in');
    
    // Enhanced curtain scroll effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroSection = document.getElementById('hero-section');
      const mainContent = document.getElementById('main-content');
      
      if (heroSection && mainContent) {
        const heroHeight = heroSection.offsetHeight;
        const maxScroll = heroHeight * 0.8; // Start curtain effect earlier
        
        // Calculate how much to move main content up
        const curtainOffset = Math.min(scrolled * 1.2, maxScroll);
        
        // Move main content up to create curtain effect
        mainContent.style.transform = `translateY(-${curtainOffset}px)`;
        
        // Optional: Add slight parallax to hero for depth
        heroSection.style.transform = `translateY(-${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.body.classList.remove('animate-fade-in');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <VideoHero />
      <div id="main-content" className="relative bg-white z-30 mt-[-10vh]">
        <CategorySection />
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
