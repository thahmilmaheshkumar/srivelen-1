import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import api from "../api/axios";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";

const services = [
  "Satellite Survey",
  "Digital Land Survey",
  "Area Calculation & Land Mapping",
  "Land Partition & Sub Division",
  "DTCP Site Layout Marking",
  "Blueprint Drawing",
  "Structural Design",
  "Land Soil Testing",
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await api.post("/api/enquiry", formData);

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(
        error.response?.data?.message ||
          "Unable to connect to server. Please make sure the server is running and try again.",
      );
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-24 bg-dark-green relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid3"
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
          <rect width="100" height="100" fill="url(#grid3)" />
        </svg>
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 text-light-green font-semibold rounded-full mb-4 text-sm sm:text-base">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto px-2">
            Have a surveying project in mind? Contact us today for a free quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-white/70">
                      23A, KM Complex,
                      <br />
                      Near Sub Registrar Office,
                      <br />
                      Aval Poondurai - 638115
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-white/70">
                      <a
                        href="tel:+919488382277"
                        className="hover:text-primary transition-colors"
                      >
                        +91 94883 82277
                      </a>
                      <br />
                      <a
                        href="tel:+919698818277"
                        className="hover:text-primary transition-colors"
                      >
                        +91 96988 18277
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:srivelanconsultancy@gmail.com"
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      srivelanconsultancy@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl h-48 sm:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.1761644652455!2d77.71794843478384!3d11.231270454306127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9713821290d0d%3A0x48d7fcf1d40571de!2sSri%20Velan%20Land%20Surveying!5e0!3m2!1sen!2sin!4v1780895574136!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-dark-green mb-2">
                    Thank You!
                  </h3>
                  <p className="text-text/70">
                    We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-primary text-white rounded-full"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-green mb-4 sm:mb-6">
                    Send Enquiry
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-500" : "border-gray-200"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-200"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Location *"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${errors.location ? "border-red-500" : "border-gray-200"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                      />
                      {errors.location && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border ${errors.service ? "border-red-500" : "border-gray-200"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white`}
                    >
                      <option value="">Select Service *</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message *"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-500" : "border-gray-200"} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Enquiry
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
