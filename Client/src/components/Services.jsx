import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaSatellite,
  FaMap,
  FaCalculator,
  FaDivide,
  FaDraftingCompass,
  FaBuilding,
  FaFlask,
  FaMountain,
} from 'react-icons/fa';

const services = [
  {
    icon: FaSatellite,
    title: 'Satellite Survey',
    description:
      'High-precision DGPS satellite surveying for accurate land measurements and positioning data.',
  },
  {
    icon: FaMountain,
    title: 'Digital Land Survey',
    description:
      'Modern digital land surveying techniques for comprehensive terrain analysis and mapping.',
  },
  {
    icon: FaCalculator,
    title: 'Area Calculation & Land Mapping',
    description:
      'Precise area calculations and detailed land mapping using advanced surveying equipment.',
  },
  {
    icon: FaDivide,
    title: 'Land Partition & Sub Division',
    description:
      'Professional land partition and subdivision services for property development projects.',
  },
  {
    icon: FaMap,
    title: 'DTCP Site Layout Marking',
    description:
      'DTCP-approved site layout marking services for residential and commercial developments.',
  },
  {
    icon: FaDraftingCompass,
    title: 'Blueprint Drawing',
    description:
      'Detailed blueprint drawings and technical documentation for construction projects.',
  },
  {
    icon: FaBuilding,
    title: 'Structural Design',
    description:
      'Expert structural design services ensuring safety and compliance with building codes.',
  },
  {
    icon: FaFlask,
    title: 'Land Soil Testing',
    description:
      'Comprehensive soil testing services for foundation assessment and construction planning.',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-light-green/30"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-light-green text-primary font-semibold rounded-full mb-4 text-sm sm:text-base">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-green mb-3 sm:mb-4">
            Professional Surveying Services
          </h2>
          <p className="text-base sm:text-lg text-text/70 max-w-2xl mx-auto px-2">
            We offer a comprehensive range of surveying and engineering services
            using state-of-the-art technology and equipment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(15, 157, 88, 0.25)',
              }}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark-green mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-text/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
