import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Footer from '../components/Footer';

const Hospitality = () => {
  return (
    <PageWrapper>
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Hospitality <span className="font-bold text-amber-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Elevate guest experiences with our premium ceramic solutions designed specifically for hotels, restaurants, and hospitality venues.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                alt="Hotel Bathrooms" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hotel Bathrooms</h3>
                <p className="text-gray-600">Luxurious bathroom solutions for hotels</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant Facilities" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Restaurant Facilities</h3>
                <p className="text-gray-600">Hygienic solutions for food service venues</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                alt="Spa & Wellness" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Spa & Wellness</h3>
                <p className="text-gray-600">Serene ceramic solutions for wellness spaces</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default Hospitality;
