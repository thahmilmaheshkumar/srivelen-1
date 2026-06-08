import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FaProjectDiagram,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  {
    icon: FaProjectDiagram,
    value: 4000,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: FaUsers,
    value: 3999,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: FaCalendarAlt,
    value: 14,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: FaCheckCircle,
    value: 100,
    suffix: "%",
    label: "Accurate Measurements",
  },
];

const AnimatedNumber = ({ value, suffix, inView }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });

  useMotionValueEvent(springValue, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return (
    <span className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
      <div className="absolute inset-0">
        {[
          { top: "10%", left: "5%", size: 100 },
          { top: "50%", left: "85%", size: 150 },
          { bottom: "10%", left: "30%", size: 80 },
        ].map((blob, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 blur-3xl"
            style={{
              top: blob.top,
              left: blob.left,
              bottom: blob.bottom,
              width: blob.size,
              height: blob.size,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="text-white text-2xl" />
              </motion.div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <div className="text-white/80 font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
