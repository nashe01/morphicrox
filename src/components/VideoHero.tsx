
import React from 'react';
import { ArrowRight } from 'lucide-react';

const VideoHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fab9f11bcf5c834c7d2c81c3e8e0e4d&profile_id=164&oauth2_token_id=1747418641"
            type="video/mp4"
          />
          {/* Fallback image */}
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80"
            alt="Modern bathroom"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Luxury
              <span className="block font-bold">Bathroom</span>
              <span className="block text-amber-400">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
              Transform your space with premium bathroom furniture and ceramics crafted for modern living
            </p>
            <button className="group bg-white text-gray-900 px-8 py-4 rounded-none hover:bg-amber-50 transition-all duration-300 flex items-center space-x-2 font-medium">
              <span>Explore Collections</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
