import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Footer from '../../components/Footer';

const Sinks = () => {
  const sinkProducts = [
    {
      id: 1,
      name: "Vessel Sink",
      description: "Elegant vessel sink for modern bathroom vanities",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      price: "$299"
    },
    {
      id: 2,
      name: "Undermount Kitchen Sink",
      description: "Seamless undermount sink for clean kitchen aesthetics",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      price: "$449"
    },
    {
      id: 3,
      name: "Pedestal Sink",
      description: "Classic pedestal sink for traditional bathroom designs",
      image: "https://images.unsplash.com/photo-1584622662821-6d4c7ea37027?auto=format&fit=crop&w=800&q=80",
      price: "$399"
    }
  ];

  return (
    <PageWrapper>
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4 font-pin-sans">
              Ceramic <span className="font-bold text-brand">Sinks</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your space with our exquisite collection of ceramic sinks. From modern vessel sinks to classic pedestal designs, find the perfect fit for your style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sinkProducts.map((product) => (
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
            <h2 className="text-3xl font-light text-black mb-6">Sink Collection Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand">Variety of Styles</h3>
                <p className="text-gray-600">From contemporary vessel sinks to traditional drop-in models, we offer styles to match any design aesthetic.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand">Superior Durability</h3>
                <p className="text-gray-600">Our ceramic sinks are fired at high temperatures, creating a surface that's resistant to chips, cracks, and stains.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand">Easy Installation</h3>
                <p className="text-gray-600">Designed for straightforward installation with all necessary hardware and detailed instructions included.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default Sinks;
