import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Equipment", href: "#equipment" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const links = [
    {
      name: FaFacebook,
      href: "#",
    },
    {
      name: FaInstagram,
      href: "#",
    },
    {
      name: FaLinkedin,
      href: "#",
    },
    {
      name: FaTwitter,
      href: "#",
    },
  ];

  const services = [
    "Satellite Survey",
    "Digital Land Survey",
    "DTCP Layout Marking",
    "Blueprint Drawing",
    "Structural Design",
    "Soil Testing",
  ];

  return (
    <footer className="bg-dark-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid4"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid4)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-10 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="SRI VELAN logo"
                className="w-12 h-12 rounded-lg object-contain shadow-lg bg-white shrink-0"
              />
              <div>
                <span className="text-2xl font-bold text-white">SRI VELAN</span>
                <p className="text-xs text-light-green">Surveying Solutions</p>
              </div>
            </a>
            <p className="text-white/70 mb-6 leading-relaxed">
              Professional Satellite (DGPS) and Digital Land Surveying services
              with precision and reliability.
            </p>
            <div className="flex gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <link.name className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span className="text-white/70">
                  23A, KM Complex, Near Sub Registrar Office, Aval Poondurai -
                  638115
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <div className="text-white/70">
                  <a
                    href="tel:+919488382277"
                    className="hover:text-primary transition-colors"
                  >
                    +91 94883 82277
                  </a>
                  <br />
                  <a
                    href="tel:+919698818277"
                    className="hover:text-primary transition-colors"
                  >
                    +91 96988 18277
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:srivelanconsultancy@gmail.com"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  srivelanconsultancy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 sm:py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-white/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} SRI VELAN. All rights reserved.
          </p>
          <p className="text-white/50 text-xs sm:text-sm">
            Designed with precision, just like our surveys.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
