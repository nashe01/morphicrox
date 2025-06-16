
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
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <VideoHero />
      <CategorySection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
