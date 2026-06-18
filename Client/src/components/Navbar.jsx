import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Equipment", href: "#equipment" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 min-w-0"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={logo}
              alt="SRI VELAN logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-contain shrink-0 shadow-lg bg-white"
            />
            <div className="min-w-0">
              <span
                className={`text-lg sm:text-2xl font-bold truncate block ${scrolled ? "text-dark-green" : "text-white"}`}
              >
                SRI VELAN
              </span>
              <p
                className={`text-xs hidden xs:block ${scrolled ? "text-primary" : "text-light-green"}`}
              >
                Digital Land Surveying Solutions
              </p>
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors ${
                  scrolled
                    ? "text-text hover:text-primary"
                    : "text-white hover:text-light-green"
                }`}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="hidden md:block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
          </motion.a>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={`w-6 h-0.5 ${scrolled ? "bg-dark-green" : "bg-white"} mb-1.5 transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div
              className={`w-6 h-0.5 ${scrolled ? "bg-dark-green" : "bg-white"} mb-1.5 transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`w-6 h-0.5 ${scrolled ? "bg-dark-green" : "bg-white"} transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-text hover:text-primary font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
