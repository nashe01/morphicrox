
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            About <span className="font-bold text-amber-600">MorphicRox</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-600 mb-6">
                At MorphicRox, we believe in engineered perfection. Our commitment to excellence drives us to create premium ceramic solutions that transform spaces and elevate experiences.
              </p>
              <p className="text-gray-600 mb-6">
                With years of expertise in the industry, we specialize in providing high-quality bathroom furniture, kitchen solutions, office installations, and hospitality fixtures that combine functionality with aesthetic appeal.
              </p>
              <p className="text-gray-600">
                Our team of skilled professionals works tirelessly to ensure that every product meets the highest standards of quality and design, delivering solutions that stand the test of time.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="About MorphicRox" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
