
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
    
    // Curtain scroll effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroSection = document.getElementById('hero-section');
      const mainContent = document.getElementById('main-content');
      
      if (heroSection && mainContent) {
        // Apply transform to create curtain effect
        const heroHeight = heroSection.offsetHeight;
        const translateY = Math.min(scrolled * 0.5, heroHeight);
        
        // Move hero up slower than scroll (parallax effect)
        heroSection.style.transform = `translateY(-${translateY}px)`;
        
        // Move main content to create curtain effect
        mainContent.style.transform = `translateY(-${Math.max(0, scrolled - heroHeight)}px)`;
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
      <div id="main-content" className="relative bg-white z-20">
        <CategorySection />
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
