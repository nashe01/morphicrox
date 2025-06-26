import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Laminate = () => {
  const [activeCountertopTab, setActiveCountertopTab] = useState('colours');
  const [activeCabinetTab, setActiveCabinetTab] = useState('cabinets');

  const laminateProducts = [
    
  ];

  const countertopColours = [
    { name: "Marble White", color: "#F8F8FF", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Granite Black", color: "#2F2F2F", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" },
    { name: "Quartz Grey", color: "#A8A8A8", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Copper Brown", color: "#B87333", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" },
    { name: "Ocean Blue", color: "#006B96", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Forest Green", color: "#355E3B", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" }
  ];

  const countertopEdges = [
    { name: "Straight Edge", description: "Clean, modern straight cut", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Beveled Edge", description: "Angled edge for sophisticated look", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" },
    { name: "Bullnose Edge", description: "Rounded edge for safety and comfort", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Ogee Edge", description: "Decorative S-curve profile", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" },
    { name: "Waterfall Edge", description: "Contemporary continuous surface", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Mitered Edge", description: "Sharp 45-degree angle joint", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" }
  ];

  const cabinetTypes = [
    { name: "Base Cabinets", description: "Standard floor-mounted storage units", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Wall Cabinets", description: "Space-saving wall-mounted storage", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" },
    { name: "Tall Cabinets", description: "Full-height pantry and utility storage", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Corner Cabinets", description: "Maximize corner space efficiency", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" },
    { name: "Island Cabinets", description: "Freestanding kitchen island units", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Vanity Cabinets", description: "Bathroom storage with integrated sinks", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" }
  ];

  const doorFronts = [
    { name: "Shaker Style", description: "Classic recessed panel design", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Flat Panel", description: "Modern minimalist smooth surface", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" },
    { name: "Raised Panel", description: "Traditional elevated center panel", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Glass Front", description: "Transparent doors for display", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" },
    { name: "Louvered", description: "Ventilated slat design", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Distressed", description: "Vintage weathered appearance", image: "https://images.unsplash.com/photo-1584622781867-4d8147619355?auto=format&fit=crop&w=400&q=80" }
  ];

  const sinkModels = [
    { name: "Undermount Single Bowl", description: "Seamless single basin design", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" },
    { name: "Undermount Double Bowl", description: "Dual basin for multitasking", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Farmhouse Apron", description: "Exposed front panel style", image: "https://images.unsplash.com/photo-1584622662821-6d4c7ea37027?auto=format&fit=crop&w=400&q=80" },
    { name: "Top Mount Drop-In", description: "Traditional rim-mounted design", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" },
    { name: "Vessel Sink", description: "Above-counter bowl design", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80" },
    { name: "Integrated Sink", description: "One-piece countertop and basin", image: "https://images.unsplash.com/photo-1584622662821-6d4c7ea37027?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <PageWrapper>
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
          
          {/* Original Laminate Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

          {/* Countertops Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-black mb-8">Countertops</h2>
            
            <Tabs value={activeCountertopTab} onValueChange={setActiveCountertopTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="colours">Colours</TabsTrigger>
                <TabsTrigger value="edges">Edges</TabsTrigger>
              </TabsList>
              
              <TabsContent value="colours" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-black mb-4">Countertop Colours</h3>
                  <p className="text-gray-600">Explore our extensive range of countertop colours to find the perfect match for your design vision.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {countertopColours.map((colour, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <img src={colour.image} alt={colour.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <div 
                            className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3"
                            style={{ backgroundColor: colour.color }}
                          ></div>
                          <h4 className="text-lg font-semibold text-black">{colour.name}</h4>
                        </div>
                        <button className="w-full bg-brand text-white py-2 rounded-md hover:bg-brand/90 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="edges" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-black mb-4">Countertop Edges</h3>
                  <p className="text-gray-600">Choose from various edge profiles to complete your countertop design with the perfect finishing touch.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {countertopEdges.map((edge, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <img src={edge.image} alt={edge.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-black mb-2">{edge.name}</h4>
                        <p className="text-gray-600 mb-4">{edge.description}</p>
                        <button className="w-full bg-brand text-white py-2 rounded-md hover:bg-brand/90 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Cabinets/Door Fronts/Sinks Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-black mb-8">Cabinets, Door Fronts & Sinks</h2>
            
            <Tabs value={activeCabinetTab} onValueChange={setActiveCabinetTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="cabinets">Cabinets</TabsTrigger>
                <TabsTrigger value="doors">Door Fronts</TabsTrigger>
                <TabsTrigger value="sinks">Sinks</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cabinets" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-black mb-4">Cabinet Types</h3>
                  <p className="text-gray-600">Discover our comprehensive range of cabinet solutions for every space and storage need.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cabinetTypes.map((cabinet, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <img src={cabinet.image} alt={cabinet.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-black mb-2">{cabinet.name}</h4>
                        <p className="text-gray-600 mb-4">{cabinet.description}</p>
                        <button className="w-full bg-brand text-white py-2 rounded-md hover:bg-brand/90 transition-colors">
                          Explore Options
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="doors" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-black mb-4">Door Front Designs</h3>
                  <p className="text-gray-600">Choose from our collection of door front styles to match your aesthetic preferences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {doorFronts.map((door, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <img src={door.image} alt={door.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-black mb-2">{door.name}</h4>
                        <p className="text-gray-600 mb-4">{door.description}</p>
                        <button className="w-full bg-brand text-white py-2 rounded-md hover:bg-brand/90 transition-colors">
                          View Styles
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sinks" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-black mb-4">Sink Models</h3>
                  <p className="text-gray-600">Find the perfect sink model to complement your countertop and cabinet selection.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sinkModels.map((sink, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <img src={sink.image} alt={sink.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-black mb-2">{sink.name}</h4>
                        <p className="text-gray-600 mb-4">{sink.description}</p>
                        <button className="w-full bg-brand text-white py-2 rounded-md hover:bg-brand/90 transition-colors">
                          See Specifications
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
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
        </div>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default Laminate;
