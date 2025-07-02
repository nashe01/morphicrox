import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Kitchens = () => {
  const kitchenSolutions = [
    {
      title: "Countertops",
      description: "Durable ceramic surfaces for modern kitchens that resist heat, stains, and scratches. Available in various colors and patterns to match any design aesthetic.",
      image: "/images/countertops1.jpg",
      features: ["Heat resistant up to 500°F", "Non-porous surface", "20+ color options"]
    },
    {
      title: "Kitchen Sinks",
      description: "Functional and stylish ceramic sink solutions designed for heavy daily use. From farmhouse to undermount styles, each sink combines beauty with practicality.",
      image: "/images/sink4.jpeg",
      features: ["Sound dampening technology", "Scratch resistant coating", "Multiple configuration options"]
    },
    {
      title: "Backsplashes",
      description: "Decorative ceramic tiles for kitchen walls that protect against splashes while adding visual interest. Choose from classic subway tiles to modern geometric patterns.",
      image: "/images/backsplash1.jpg",
      features: ["Easy to clean surface", "Moisture resistant", "Custom pattern options"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4 font-pin-sans">
              Kitchen <span className="font-bold text-brand">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Transform your kitchen with our premium ceramic surfaces and innovative design solutions for modern culinary spaces. Create a kitchen that's both beautiful and built to last with our comprehensive range of ceramic products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {kitchenSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-1 mb-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-brand">• {feature}</li>
                    ))}
                  </ul>
                 
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-light text-black mb-6 text-center">Kitchen Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                <h3 className="text-lg font-semibold mb-2 text-brand">Consultation</h3>
                <p className="text-gray-600">We discuss your needs, style preferences, and budget to create the perfect plan.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                <h3 className="text-lg font-semibold mb-2 text-brand">Design</h3>
                <p className="text-gray-600">Our design team creates detailed plans and 3D renderings of your new kitchen.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                <h3 className="text-lg font-semibold mb-2 text-brand">Selection</h3>
                <p className="text-gray-600">Choose from our extensive collection of colors, patterns, and finishes.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
                <h3 className="text-lg font-semibold mb-2 text-brand">Installation</h3>
                <p className="text-gray-600">Professional installation ensures perfect results and long-lasting performance.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-black mb-6">The Heart of Your Home</h2>
              <p className="text-gray-600 mb-4">
                Your kitchen is more than just a place to cook—it's where families gather, memories are made, and creativity flourishes. Our ceramic solutions are designed to enhance these moments while providing the durability and functionality that modern kitchens demand.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're planning a complete kitchen renovation or updating specific elements, our team has the expertise to guide you through every step. From initial concept to final installation, we're committed to creating a kitchen that exceeds your expectations.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-brand mb-2">Residential Projects</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Family kitchens</li>
                    <li>• Luxury renovations</li>
                    <li>• Compact spaces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brand mb-2">Commercial Projects</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Restaurant kitchens</li>
                    <li>• Café counters</li>
                    <li>• Food service areas</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/kitchen1.jpeg"
                alt="Modern Kitchen"
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

export default Kitchens;
