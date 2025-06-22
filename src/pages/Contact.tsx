import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-72 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/contact-hero.jpg')" }}
      >
        <span className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Contact us</h1>
          <p className="mt-4 max-w-xl font-light">
            Kassapay is ready to provide the right solution according to your
            needs
          </p>
        </div>
      </section>

      {/* Contact Card */}
      <section className="relative z-20">
        <div className="max-w-4xl mx-auto -mt-24 bg-white rounded-2xl shadow-xl px-6 py-8 md:px-10 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Get in touch</h2>
            <p className="text-gray-500 mb-8">
              Sociology viverra lectus placerat sem efficitur molestie vehicula
              cubilia leo etiam nam.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-brand text-white">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-black">Call Us</h3>
                  <p className="text-gray-600">Phone: +263 79 123 4567</p>
                  <p className="text-gray-600">Fax: +263 77 765 4321</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-brand text-white">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-black">Email</h3>
                  <p className="text-gray-600">info@morphicrox.com</p>
                  <p className="text-gray-600">sales@morphicrox.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-brand text-white">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-black">Head Office</h3>
                  <p className="text-gray-600">Coventry Road</p>
                  <p className="text-gray-600">Marondera, Zimbabwe</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-brand text-white">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-black">Business Hours</h3>
                  <p className="text-gray-600">Mon – Fri: 08:00 – 18:00</p>
                  <p className="text-gray-600">Sat: 09:00 – 16:00</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="font-semibold text-black mb-4">
                Follow our social media
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/morphicrox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-brand text-white hover:bg-brand/90 transition"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/company/morphicrox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-brand text-white hover:bg-brand/90 transition"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@morphicrox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-brand text-white hover:bg-brand/90 transition"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">
              Send us a message
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-brand text-white py-3 rounded-lg hover:bg-brand/90 transition font-medium"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto mt-16 px-6 pb-16">
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-light text-black mb-6">
            Visit Our Showroom
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Experience our products firsthand at our state-of-the-art
                showroom. Our design consultants are available to help you
                explore our complete range of ceramic solutions and find the
                perfect fit for your project.
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
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.123!2d31.5483036!3d-18.1859235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931ff4ff7bdc56b%3A0xcfa225363726f2b9!2sCoventry%20Rd%2C%20Marondera!5e0!3m2!1sen!2szw!4v1704067200000!5m2!1sen!2szw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
