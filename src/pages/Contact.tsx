import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-8 font-pin-sans">
            Contact <span className="font-bold text-brand">Us</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-black mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-brand" />
                  <div>
                    <p className="font-semibold text-black">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-brand" />
                  <div>
                    <p className="font-semibold text-black">Email</p>
                    <p className="text-gray-600">info@morphicrox.com</p>
                    <p className="text-gray-600">sales@morphicrox.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-brand" />
                  <div>
                    <p className="font-semibold text-black">Address</p>
                    <p className="text-gray-600">123 Design Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-brand" />
                  <div>
                    <p className="font-semibold text-black">Business Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-black mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/morphicrox" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-brand text-white rounded-full hover:bg-brand/90 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/company/morphicrox" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-brand text-white rounded-full hover:bg-brand/90 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://youtube.com/@morphicrox" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-brand text-white rounded-full hover:bg-brand/90 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">Project Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent">
                    <option>Bathroom Renovation</option>
                    <option>Kitchen Renovation</option>
                    <option>Commercial Project</option>
                    <option>New Construction</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-brand text-white py-3 px-6 rounded-lg hover:bg-brand/90 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-black mb-6">Visit Our Showroom</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  Experience our products firsthand at our state-of-the-art showroom. Our design consultants are available to help you explore our complete range of ceramic solutions and find the perfect fit for your project.
                </p>
                <div className="space-y-2">
                  <p className="text-black font-semibold">Free Services:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Design consultation</li>
                    <li>• Product samples</li>
                    <li>• 3D visualization</li>
                    <li>• Installation guidance</li>
                  </ul>
                </div>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492404069!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
