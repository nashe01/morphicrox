import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Footer from '../../components/Footer';

const Showers = () => {
  const showerProducts = [
    {
      id: 1,
      name: "Premium Walk-In Shower",
      description: "Spacious walk-in shower with ceramic walls and premium fixtures",
      image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=800&q=80",
      price: "$2,499"
    },
    {
      id: 2,
      name: "Corner Shower Unit",
      description: "Space-saving corner shower with glass doors and ceramic base",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      price: "$1,899"
    },
    {
      id: 3,
      name: "Luxury Rain Shower",
      description: "High-end rain shower system with multiple spray settings",
      image: "https://images.unsplash.com/photo-1584622662821-6d4c7ea37027?auto=format&fit=crop&w=800&q=80",
      price: "$3,299"
    }
  ];

  return (
    <PageWrapper>
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4 font-pin-sans">
              Premium <span className="font-bold text-brand">Showers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your daily routine with our collection of premium shower solutions. Each shower is crafted with the finest ceramic materials and innovative design for the ultimate bathing experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {showerProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brand">{product.price}</span>
                    <button className="bg-brand text-white px-4 py-2 rounded-md hover:bg-brand/90 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-black mb-6">Why Choose Our Showers?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand">Premium Materials</h3>
                <p className="text-gray-600">Our showers are crafted from the highest quality ceramic materials, ensuring durability and elegance that lasts for years.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand">Expert Installation</h3>
                <p className="text-gray-600">Professional installation service included with every purchase, ensuring perfect fit and finish.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand">Custom Design</h3>
                <p className="text-gray-600">Work with our design team to create a shower that perfectly matches your space and style preferences.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand">Lifetime Support</h3>
                <p className="text-gray-600">Comprehensive warranty and ongoing support for all our shower installations.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default Showers;
