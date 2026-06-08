import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaSatellite, FaBroadcastTower, FaCrosshairs, FaTools } from 'react-icons/fa';

const equipment = [
  {
    icon: FaSatellite,
    name: 'DGPS Rover',
    description: 'Portable DGPS rover unit for real-time kinematic positioning with centimeter-level accuracy.',
    specs: ['Real-time GPS/GNSS', 'Centimeter accuracy', 'Bluetooth connectivity', 'Long battery life'],
  },
  {
    icon: FaBroadcastTower,
    name: 'DGPS Base Station',
    description: 'Fixed base station providing correction signals for enhanced positioning accuracy.',
    specs: ['Multi-frequency GNSS', 'UHF radio link', 'Remote monitoring', 'Solar power option'],
  },
  {
    icon: FaCrosshairs,
    name: 'Total Station',
    description: 'Electronic theodolite integrated with distance measurement for precise angular and linear surveying.',
    specs: ['Angle accuracy 2"', 'Distance range 5000m', 'Reflectorless measurement', 'Onboard memory'],
  },
  {
    icon: FaTools,
    name: 'Survey Instruments',
    description: 'Complete range of professional surveying accessories and auxiliary equipment.',
    specs: ['Tripods & prisms', 'Data collectors', 'Leveling equipment', 'Marking tools'],
  },
];

const Equipment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section
      id="equipment"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-light-green/30 to-white"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-light-green text-primary font-semibold rounded-full mb-4 text-sm sm:text-base">
            Our Equipment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-green mb-3 sm:mb-4">
            Advanced Surveying Equipment
          </h2>
          <p className="text-base sm:text-lg text-text/70 max-w-2xl mx-auto px-2">
            We use industry-leading DGPS technology and precision instruments
            to deliver accurate and reliable surveying results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group perspective-1000"
            >
              <motion.div
                className="relative p-5 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{
                  rotateY: hoveredItem === i ? 5 : 0,
                  rotateX: hoveredItem === i ? -5 : 0,
                  scale: hoveredItem === i ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg shrink-0"
                    animate={{
                      scale: hoveredItem === i ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="text-white text-2xl sm:text-3xl" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-dark-green mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-text/70 text-sm mb-3 sm:mb-4">
                      {item.description}
                    </p>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                      {item.specs.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-center gap-2 text-xs text-text/60"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === i ? 1 : 0 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
