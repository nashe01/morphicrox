
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Bathrooms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Bathroom <span className="font-bold text-amber-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Discover our comprehensive range of bathroom ceramic fittings and furniture designed to create luxurious and functional spaces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=800&q=80" 
                alt="Bathroom Vanities" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vanities & Cabinets</h3>
                <p className="text-gray-600">Premium storage solutions with elegant design</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" 
                alt="Ceramic Basins" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ceramic Basins</h3>
                <p className="text-gray-600">Elegant washbasins in various styles and sizes</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584622662821-6d4c7ea37027?auto=format&fit=crop&w=800&q=80" 
                alt="Bathroom Accessories" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Accessories</h3>
                <p className="text-gray-600">Complete your bathroom with matching accessories</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bathrooms;
