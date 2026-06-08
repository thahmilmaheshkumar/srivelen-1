import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaAward, FaCheck, FaSatellite } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const floatingShapes = [
    { top: "10%", left: "5%", size: "60px", delay: 0 },
    { top: "60%", left: "10%", size: "40px", delay: 1 },
    { top: "30%", left: "90%", size: "50px", delay: 2 },
    { top: "80%", left: "85%", size: "70px", delay: 0.5 },
  ];

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden"
    >
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-light-green/50"
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-[260px] sm:h-[350px] lg:h-[400px] bg-gradient-to-br from-light-green to-secondary/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FaSatellite className="text-6xl sm:text-8xl lg:text-9xl text-primary/30" />
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-6 bg-primary text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <FaAward className="text-2xl sm:text-4xl" />
                  <div>
                    <div className="text-xl sm:text-3xl font-bold">10+</div>
                    <div className="text-xs sm:text-sm opacity-80">
                      Years Experience
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-light-green text-primary font-semibold rounded-full mb-4">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-green mb-4 sm:mb-6">
              About SRI VELAN
            </h2>

            <p className="text-base sm:text-lg text-text/80 mb-4 sm:mb-6 leading-relaxed">
              Since 2012 ,SRI VELAN provides highly accurate Satellite (DGPS)
              and Digital Land Surveying services using advanced surveying
              equipment and modern technology. We specialize in land mapping,
              area calculations, DTCP layout marking, land subdivision,
              blueprint drawing, structural design, and soil testing services.
            </p>

            <p className="text-text/70 mb-8">
              With over a decade of experience, our team of expert surveyors
              delivers precise measurements and reliable results for
              residential, commercial, and industrial projects across Tamil
              Nadu.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Satellite DGPS Survey",
                "Digital Land Mapping",
                "DTCP Layout Marking",
                "Blueprint Drawing",
                "Structural Design",
                "Soil Testing Services",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaCheck className="text-primary text-sm" />
                  </div>
                  <span className="text-text/80">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
