import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Property Developer',
    content: 'SRI VELAN provided exceptional DGPS surveying services for our residential project. Their accuracy and professionalism exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Lakshmi Devan',
    role: 'Land Owner',
    content: 'Very satisfied with the land partition survey. They completed the work quickly and the documentation was thorough. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Suresh Babu',
    role: 'Building Contractor',
    content: 'We have been working with SRI VELAN for multiple projects. Their structural design and survey services are top-notch and reliable.',
    rating: 5,
  },
  {
    name: 'Priya Mohan',
    role: 'Real Estate Agent',
    content: 'Accurate measurements and professional reports. They are our go-to surveying company for all property transactions.',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-light-green/30">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-light-green text-primary font-semibold rounded-full mb-4 text-sm sm:text-base">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-green mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-text/70 max-w-2xl mx-auto px-2">
            Hear from our satisfied clients about their experience with SRI VELAN
            surveying services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl relative"
          >
            <FaQuoteLeft className="text-2xl sm:text-4xl text-primary/20 absolute top-4 left-4 sm:top-8 sm:left-8" />

            <div className="text-center relative z-10 pt-6 sm:pt-0">
              <p className="text-base sm:text-xl md:text-2xl text-text/80 mb-6 sm:mb-8 leading-relaxed px-2">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-yellow-400 text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-bold text-dark-green">
                  {testimonials[current].name}
                </h4>
                <p className="text-text/60">{testimonials[current].role}</p>
              </div>
            </div>

            <div className="absolute bottom-0 right-4 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-tl-full" />
          </motion.div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
