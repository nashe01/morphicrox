
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
  type LucideIcon,          // 👈 type for icons
} from "lucide-react";
import { motion, Variants, cubicBezier } from "framer-motion";

/* ───── animation ───── */
const ease = cubicBezier(0.25, 0.1, 0.25, 1);
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6, ease } },
};

/* ───── social-link data (typed) ───── */
type SocialLink = { href: string; Icon: LucideIcon };
const socials: SocialLink[] = [
  { href: "https://instagram.com/morphicrox", Icon: Instagram },
  { href: "https://linkedin.com/company/morphicrox", Icon: Linkedin },
  { href: "https://youtube.com/@morphicrox", Icon: Youtube },
];

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <Header />

    {/* ───────── Hero ───────── */}
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

    {/* ───────── animated card ───────── */}
    <motion.section
      className="relative z-20"
      variants={cardVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-4xl mx-auto -mt-24 bg-white rounded-2xl shadow-xl px-6 py-8 md:px-10 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* left – info */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">Get in touch</h2>
          <p className="text-gray-500 mb-8">
            Sociology viverra lectus placerat sem efficitur molestie vehicula
            cubilia leo etiam nam.
          </p>

          <ul className="space-y-6">
            {[
              {
                icon: Phone,
                title: "Call Us",
                lines: ["Phone: +263 79 123 4567", "Fax: +263 77 765 4321"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@morphicrox.com", "sales@morphicrox.com"],
              },
              {
                icon: MapPin,
                title: "Head Office",
                lines: ["Coventry Road", "Marondera, Zimbabwe"],
              },
              {
                icon: Clock,
                title: "Business Hours",
                lines: ["Mon – Fri 08:00 – 18:00", "Sat 09:00 – 16:00"],
              },
            ].map(({ icon: Icon, title, lines }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-black">{title}</h3>
                  {lines.map((t) => (
                    <p key={t} className="text-gray-600">
                      {t}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* socials */}
          <div className="mt-8">
            <p className="font-semibold text-black mb-4">
              Follow our social media
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-brand text-white hover:bg-brand/90 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* right – form */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6">
            Send us a message
          </h2>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* name full width */}
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 placeholder-gray-400 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone"
              className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 placeholder-gray-400 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 placeholder-gray-400 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none"
            />

            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 placeholder-gray-400 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 placeholder-gray-400 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-brand text-white py-3 rounded-lg hover:bg-brand/90 transition font-medium"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>

    {/* ───────── Map ───────── */}
    <section className="max-w-6xl mx-auto mt-16 px-6 pb-16">
      <div className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-light text-black mb-6">
          Visit Our Showroom
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Experience our products firsthand at our state-of-the-art
              showroom. Our design consultants are available to help you explore
              our complete range of ceramic solutions and find the perfect fit
              for your project.
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
            />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
