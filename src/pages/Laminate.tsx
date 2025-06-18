
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Laminate = () => {
  const laminateProducts = [
    {
      id: 1,
      name: "Wood-Look Laminate",
      description: "Realistic wood grain patterns with ceramic durability",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      price: "$45/sq ft"
    },
    {
      id: 2,
      name: "Stone-Look Laminate",
      description: "Natural stone appearance with easy maintenance",
      image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=800&q=80",
      price: "$52/sq ft"
    },
    {
      id: 3,
      name: "Abstract Pattern Laminate",
      description: "Modern abstract designs for contemporary spaces",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      price: "$38/sq ft"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4 font-pin-sans">
              Ceramic <span className="font-bold text-brand">Laminate</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the beauty of natural materials with the durability of ceramic. Our laminate collection offers stunning designs that mimic wood, stone, and contemporary patterns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {laminateProducts.map((product) => (
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
                      Get Sample
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-light text-black mb-6">Laminate Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Water Resistant</h3>
                <p className="text-gray-600">Superior moisture resistance compared to traditional laminate materials.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Realistic Textures</h3>
                <p className="text-gray-600">Advanced printing technology creates authentic-looking surfaces.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Easy Installation</h3>
                <p className="text-gray-600">Quick and simple installation process for faster project completion.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-3 text-brand">Cost Effective</h3>
                <p className="text-gray-600">Get the look of premium materials at a fraction of the cost.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-black mb-6">Perfect for Any Space</h2>
              <p className="text-gray-600 mb-4">
                Our ceramic laminate collection is ideal for high-traffic areas where durability meets design. Whether you're renovating a kitchen, bathroom, or commercial space, our laminate surfaces provide the perfect solution.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Residential kitchens and bathrooms</li>
                <li>• Commercial offices and retail spaces</li>
                <li>• Healthcare and educational facilities</li>
                <li>• Hospitality and restaurant environments</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" 
                alt="Laminate Installation" 
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

export default Laminate;
