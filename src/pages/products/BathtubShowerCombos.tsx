
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BathtubShowerCombos = () => {
  const comboProducts = [
    {
      id: 1,
      name: "Classic Combo Unit",
      description: "Traditional bathtub and shower combination with ceramic surround",
      image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=800&q=80",
      price: "$3,499"
    },
    {
      id: 2,
      name: "Modern Alcove Combo",
      description: "Contemporary design with built-in storage and premium fixtures",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      price: "$4,299"
    },
    {
      id: 3,
      name: "Luxury Spa Combo",
      description: "High-end combination with whirlpool features and rainfall shower",
      image: "https://images.unsplash.com/photo-1584622662821-6d4c7ea37027?auto=format&fit=crop&w=800&q=80",
      price: "$5,899"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4 font-pin-sans">
              Bathtub & Shower <span className="font-bold text-brand">Combos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the best of both worlds with our innovative bathtub and shower combinations. Perfect for maximizing space while providing luxury and functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {comboProducts.map((product) => (
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
            <h2 className="text-3xl font-light text-black mb-6">Combo Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-brand">Space Efficient</h3>
                <p className="text-gray-600">Perfect for smaller bathrooms where space is at a premium but functionality cannot be compromised.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-brand">Versatile Design</h3>
                <p className="text-gray-600">Switch between relaxing baths and quick showers with ease, adapting to your daily needs.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-brand">Cost Effective</h3>
                <p className="text-gray-600">Get two essential bathroom features in one installation, saving on both purchase and installation costs.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BathtubShowerCombos;
