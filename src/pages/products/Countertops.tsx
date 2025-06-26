
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Countertops = () => {
  const countertopProducts = [
    {
      id: 1,
      name: "Kitchen Ceramic Countertop",
      description: "Durable ceramic countertop perfect for kitchen applications",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      price: "$89/sq ft"
    },
    {
      id: 2,
      name: "Bathroom Vanity Top",
      description: "Elegant vanity countertop with integrated bowl options",
      image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=800&q=80",
      price: "$95/sq ft"
    },
    {
      id: 3,
      name: "Commercial Grade Surface",
      description: "Heavy-duty ceramic surface for commercial applications",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      price: "$120/sq ft"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4 font-pin-sans">
              Ceramic <span className="font-bold text-brand">Countertops</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect blend of beauty and functionality with our premium ceramic countertops. Ideal for kitchens, bathrooms, and commercial spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {countertopProducts.map((product) => (
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
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-black mb-6">Countertop Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Heat Resistant</h3>
                <p className="text-gray-600">Withstands high temperatures without damage or discoloration.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Scratch Resistant</h3>
                <p className="text-gray-600">Extremely hard surface that resists scratches and daily wear.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Non-Porous</h3>
                <p className="text-gray-600">Prevents bacteria growth and staining for hygienic surfaces.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Low Maintenance</h3>
                <p className="text-gray-600">Easy to clean and maintain with simple household cleaners.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Countertops;
