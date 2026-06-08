import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const leaders = [
  {
    role: "Founder",
    name: "Er. Vijai Kumar",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    role: "Founder",
    name: "Dr. Krishnan",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    role: "Chairman",
    name: "Mrs. Divya Bharathi",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    role: "Managing Director",
    name: "Er. Vijai Kumar",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-light-green/20">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-light-green text-primary font-semibold rounded-full mb-4 text-sm sm:text-base">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-green mb-3 sm:mb-4">
            Our Leadership Team
          </h2>
          <p className="text-base sm:text-lg text-text/70 max-w-2xl mx-auto px-2">
            Guided by experienced leadership committed to precision surveying
            and trusted service across Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.role}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="group text-center"
            >
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mb-5 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="relative w-full h-full object-cover rounded-full shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1">
                {leader.role}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-dark-green">
                {leader.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
