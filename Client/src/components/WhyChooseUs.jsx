import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheck, FaUsers, FaClock, FaAward, FaDollarSign, FaSmile } from 'react-icons/fa';

const features = [
  {
    icon: FaCheck,
    title: 'Accurate Measurements',
    description: 'Precision surveying with 100% accuracy using advanced DGPS technology.',
  },
  {
    icon: FaAward,
    title: 'Advanced DGPS Technology',
    description: 'State-of-the-art satellite positioning systems for reliable results.',
  },
  {
    icon: FaUsers,
    title: 'Experienced Surveyors',
    description: 'Team of skilled professionals with decades of combined experience.',
  },
  {
    icon: FaClock,
    title: 'Fast Service',
    description: 'Quick turnaround times without compromising on quality.',
  },
  {
    icon: FaDollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive rates offering excellent value for professional services.',
  },
  {
    icon: FaSmile,
    title: 'Customer Satisfaction',
    description: 'Dedicated to exceeding client expectations on every project.',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-dark-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid2" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid2)" />
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 text-light-green font-semibold rounded-full mb-4 text-sm sm:text-base">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Why SRI VELAN?
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto px-2">
            We deliver exceptional surveying services with precision, reliability,
            and customer satisfaction at the core of everything we do.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="p-5 sm:p-8 bg-white/10 backdrop-blur-lg rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm sm:text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
