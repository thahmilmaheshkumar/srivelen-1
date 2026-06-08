import { motion, useScroll, useTransform } from "framer-motion";
import { FaSatellite, FaPlay } from "react-icons/fa";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-green via-primary to-secondary">
        <motion.div style={{ y }} className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </motion.div>

        {[
          { top: "20%", left: "10%", size: "300px", delay: 0 },
          { top: "60%", left: "80%", size: "200px", delay: 1 },
          { top: "80%", left: "20%", size: "150px", delay: 2 },
        ].map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 blur-3xl"
            style={{
              top: shape.top,
              left: shape.left,
              width: shape.size,
              height: shape.size,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6"
            >
              <FaSatellite className="text-light-green shrink-0" />
              <span className="text-white/90 text-xs sm:text-sm">
                Professional Surveying Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4"
            >
              SRI VELAN
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-light-green mb-4 sm:mb-6"
            >
              SATELLITE (DGPS) &
              <br />
              DIGITAL LAND SURVEYING
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl"
            >
              Professional Surveying Solutions for Your Valuable Land. Accurate
              measurements using advanced DGPS technology and modern equipment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.a
                href="#contact"
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-white text-primary font-semibold rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>

              <motion.a
                href="#services"
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay className="text-sm" />
                Explore Services
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-6 md:gap-8"
            >
              {[
                { value: "10+", label: "Years Experience" },
                { value: "4000+", label: "Projects" },
                { value: "3999+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] xs:text-xs sm:text-sm text-white/70 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block mt-8 lg:mt-0"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-light-green/50 to-white/30 rounded-2xl flex items-center justify-center">
                  <FaSatellite className="text-5xl md:text-6xl lg:text-8xl text-white drop-shadow-2xl" />
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-light-green/30 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-8 h-8 bg-white rounded-full" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-6 h-6 bg-primary rounded-lg" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
