import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FaTimes, FaExpand } from "react-icons/fa";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1621918963788-c355a196bd8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1cnZleSUyMEVxdWlwbWVudCUyMFNldHVwJTIwRXF1aXBtZW50fGVufDB8fDB8fHww",
    alt: "Survey Equipment Setup",
    category: "Equipment",
  },
  {
    src: "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Land Surveying in Progress",
    category: "Survey",
  },
  {
    src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Construction Site Survey",
    category: "Project",
  },
  {
    src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "DGPS Equipment",
    category: "Equipment",
  },
  {
    src: "https://images.pexels.com/photos/15927511/pexels-photo-15927511.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Land Measurement",
    category: "Survey",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2l0ZSUyMExheW91dCUyME1hcmtpbmclMjBQcm9qZWN0fGVufDB8fDB8fHww",
    alt: "Site Layout Marking",
    category: "Project",
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Equipment", "Survey", "Project"];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-24 bg-light-green/20">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-4 py-2 bg-light-green text-primary font-semibold rounded-full mb-4 text-sm sm:text-base">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-green mb-3 sm:mb-4">
            Our Work Gallery
          </h2>
          <p className="text-base sm:text-lg text-text/70 max-w-2xl mx-auto px-2">
            Explore images of our surveying equipment, projects, and field work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-medium text-sm sm:text-base transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-white text-text hover:bg-primary/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                    <span className="text-light-green text-sm">
                      {image.category}
                    </span>
                  </div>
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaExpand className="text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-green/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaTimes className="text-white text-xl" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
