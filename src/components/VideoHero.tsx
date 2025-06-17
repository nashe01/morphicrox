
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
            src="https://s.pinimg.com/webapp/Pin-Sans-MacOS-Regular-708c49dd.woff2"
            type="video/mp4"
          />
          {/* Fallback image */}
          <img
            src="https://images.unsplash.com/photo-1584622662821-6d4c7ea37027?auto=format&fit=crop&w=1920&q=80"
            alt="Modern ceramic bathroom fittings"
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
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight font-pin-sans">
              Engineered
              <span className="block font-bold">Perfection</span>
              <span className="block text-brand">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
              Transform your spaces with premium ceramic solutions crafted for bathrooms, kitchens, offices, and hospitality
            </p>
            <button className="group bg-white text-black px-8 py-4 rounded-none hover:bg-brand hover:text-white transition-all duration-300 flex items-center space-x-2 font-medium">
              <span>Explore Collections</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation - Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="grid grid-cols-4 h-32">
          {/* For Bathrooms */}
          <a href="/bathrooms" className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-end p-6">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="relative z-10 text-white">
              <p className="text-sm font-light mb-1">For</p>
              <h3 className="text-xl font-bold text-brand">Bathrooms</h3>
              <ArrowRight className="w-4 h-4 mt-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* For Kitchens */}
          <a href="/kitchens" className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-end p-6">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="relative z-10 text-white">
              <p className="text-sm font-light mb-1">For</p>
              <h3 className="text-xl font-bold text-brand">Kitchens</h3>
              <ArrowRight className="w-4 h-4 mt-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* For Hospitality */}
          <a href="/hospitality" className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-end p-6">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="relative z-10 text-white">
              <p className="text-sm font-light mb-1">For</p>
              <h3 className="text-xl font-bold text-brand">Hospitality</h3>
              <ArrowRight className="w-4 h-4 mt-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* For Office */}
          <a href="/office" className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-end p-6">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="relative z-10 text-white">
              <p className="text-sm font-light mb-1">For</p>
              <h3 className="text-xl font-bold text-brand">Office</h3>
              <ArrowRight className="w-4 h-4 mt-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
