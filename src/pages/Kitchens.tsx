
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Kitchens = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Kitchen <span className="font-bold text-amber-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Transform your kitchen with our premium ceramic surfaces and innovative design solutions for modern culinary spaces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Countertops" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Countertops</h3>
                <p className="text-gray-600">Durable ceramic surfaces for modern kitchens</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen Sinks" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kitchen Sinks</h3>
                <p className="text-gray-600">Functional and stylish ceramic sink solutions</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" 
                alt="Backsplashes" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Backsplashes</h3>
                <p className="text-gray-600">Decorative ceramic tiles for kitchen walls</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kitchens;
