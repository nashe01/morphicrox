
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Bathtubs = () => {
  const bathtubProducts = [
    {
      id: 1,
      name: "Freestanding Ceramic Tub",
      description: "Elegant freestanding bathtub with smooth ceramic finish",
      image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=800&q=80",
      price: "$4,999"
    },
    {
      id: 2,
      name: "Corner Soaking Tub",
      description: "Deep soaking tub designed for corner installation",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      price: "$3,799"
    },
    {
      id: 3,
      name: "Luxury Whirlpool Tub",
      description: "Premium whirlpool bathtub with therapeutic jets",
      image: "https://images.unsplash.com/photo-1584622662821-6d4c7ea37027?auto=format&fit=crop&w=800&q=80",
      price: "$7,499"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4 font-pin-sans">
              Luxury <span className="font-bold text-brand">Bathtubs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Indulge in the ultimate relaxation experience with our collection of premium ceramic bathtubs. Each piece is designed to be the centerpiece of your bathroom sanctuary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {bathtubProducts.map((product) => (
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
            <h2 className="text-3xl font-light text-black mb-6">Bathtub Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand">Ergonomic Design</h3>
                <p className="text-gray-600 mb-4">Our bathtubs are designed with human comfort in mind, featuring optimal depth and contours for the perfect soak.</p>
                
                <h3 className="text-xl font-semibold mb-3 text-brand">Premium Ceramic</h3>
                <p className="text-gray-600">Made from high-quality ceramic materials that resist staining, cracking, and maintain their beautiful finish for years.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand">Easy Maintenance</h3>
                <p className="text-gray-600 mb-4">Non-porous surface makes cleaning effortless while preventing bacteria and mold growth.</p>
                
                <h3 className="text-xl font-semibold mb-3 text-brand">Custom Options</h3>
                <p className="text-gray-600">Available in various sizes and configurations to fit your specific bathroom layout and design preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bathtubs;
