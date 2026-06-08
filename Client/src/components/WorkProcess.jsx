import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaSearchLocation, FaRuler, FaLaptop, FaFileAlt } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearchLocation,
    title: 'Site Visit',
    description: 'Our team visits your location to understand the survey requirements and gather preliminary information.',
  },
  {
    icon: FaRuler,
    title: 'Land Measurement',
    description: 'Using DGPS equipment, we conduct precise measurements and collect accurate positioning data.',
  },
  {
    icon: FaLaptop,
    title: 'Data Processing',
    description: 'Raw survey data is processed using advanced software to generate accurate maps and calculations.',
  },
  {
    icon: FaFileAlt,
    title: 'Report Delivery',
    description: 'Comprehensive survey report with all documentation is delivered to you for your records.',
  },
];

const WorkProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-light-green text-primary font-semibold rounded-full mb-4 text-sm sm:text-base">
            Work Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-green mb-3 sm:mb-4">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-text/70 max-w-2xl mx-auto px-2">
            Our streamlined process ensures accurate results and timely delivery
            for every surveying project we undertake.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <motion.div
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-shadow"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                    whileHover={{ scale: 1.2 }}
                  >
                    {i + 1}
                  </motion.div>

                  <div className="mt-8">
                    <motion.div
                      className="w-20 h-20 mx-auto mb-4 bg-light-green rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <step.icon className="text-3xl text-primary group-hover:text-white transition-colors" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-dark-green mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text/70 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
