import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

// 3 hero images (Unsplash placeholder example)
const images = [
  "https://i.ibb.co.com/FbbZ9ShC/banner1.jpg",
  "https://i.ibb.co.com/mVNdGpdS/banner2.jpg",
  "https://i.ibb.co.com/FkkNtdzS/banner3.jpg",
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  // Slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-gray-100 dark:bg-gray-900 flex items-center">
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt={`Banner ${current}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay for text */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32 text-center md:text-left">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Elevate Your Corporate Asset Management
        </motion.h1>
        <motion.p
          key={current + "-text"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-lg"
        >
          Streamline your employee and HR operations with our all-in-one
          platform.
        </motion.p>
        <motion.div
          key={current + "-buttons"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center md:justify-start gap-4"
        >
          <Link
            to="/login"
            className="px-6 py-3 bg-[#00e5ff] text-white rounded-lg font-semibold hover:bg-primary-focus transition"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
