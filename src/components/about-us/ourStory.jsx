/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Car,
  Truck,
  Laptop,
} from 'lucide-react';
import slider1 from '../../assets/slider1.webp';
import slider2 from '../../assets/slider2.webp';
import slider3 from '../../assets/slider3.webp';
import slider4 from '../../assets/slider4.webp';
import PropTypes from 'prop-types';

// Redesigned AboutOptions component to match BoondocksCard style
const AboutOptions = ({ title, content, icon }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <motion.div className="group relative" variants={cardVariants}>
      <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500 transition-all duration-300 group-hover:w-2"></div>

        {/* Icon container with animation */}
        <motion.div
          className="flex-shrink-0 w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-500"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-700 font-light leading-relaxed text-sm">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

AboutOptions.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

// Redesigned OurStory component to match Component1 style
export default function OurStory() {
  const images = [
    {
      src: slider1,
      alt: 'Burger Baron Historical Photo',
    },
    {
      src: slider2,
      alt: 'Burger Baron Historical Photo',
    },
    {
      src: slider3,
      alt: 'Burger Baron Historical Photo',
    },
    {
      src: slider4,
      alt: 'Burger Baron Historical Photo',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  // Mouse enter/leave handlers for the carousel
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const optionsData = [
    {
      title: 'Dine In',
      content:
        'Our restaurant seats 90 and serves all your favorite dishes. Bring your family and friends! 🍔 🍕 🥗 🥩 🍝',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: 'Take Out & Drive-Thru',
      content:
        'No time to cook? No problem! Enjoy our full menu with our convenient drive-thru and take-out options—just give us a call! 📞 🍽️',
      icon: <Car className="w-6 h-6" />,
    },
    {
      title: 'Delivery',
      content:
        "All-day delivery to anywhere in High Prairie—home, work, or beyond. We've got you covered! 🚚 🍔",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      title: 'Online Ordering',
      content:
        "Skip the call and order online—it's quick, easy, and convenient! 📱 💻 🍕",
      icon: <Laptop className="w-6 h-6" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="relative">
      {/* Decorative separator between sections */}
      <div className="h-16 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
        {/* Diagonal stripes accent */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(234, 179, 8, 0.2) 10px, rgba(234, 179, 8, 0.2) 20px)',
              backgroundSize: '28.28px 28.28px',
            }}
          ></div>
        </div>

        {/* Center accent line */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 bg-yellow-500/60"></div>

        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/30"
            style={{
              width: 4 + Math.random() * 4,
              height: 4 + Math.random() * 4,
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <motion.div
        className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mx-auto max-w-7xl px-4 pt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <motion.h1
              className="text-3xl font-bold mb-6 text-gray-800"
              variants={itemVariants}
            >
              Our <span className="text-yellow-500">Story</span> & Services
            </motion.h1>

            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-6 mx-auto w-2/3"
              variants={itemVariants}
            />
          </motion.div>

          <div className="flex lg:flex-row flex-col gap-8 lg:gap-12">
            {/* Services Section */}
            <motion.div className="flex-1 lg:w-1/2" variants={itemVariants}>
              <motion.div variants={containerVariants} className="space-y-6">
                {optionsData.map((option, index) => (
                  <AboutOptions
                    key={index}
                    title={option.title}
                    content={option.content}
                    icon={option.icon}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Story & Carousel Section */}
            <motion.div className="flex-1 lg:w-1/2" variants={itemVariants}>
              {/* Story text */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg mb-8 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  A <span className="text-yellow-500">Rich</span> History
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm">
                  Our diner has been a beloved fixture for 40 years, initially
                  opening as a Burger Baron in 1987. Over the years, it has
                  undergone numerous transformations and name changes. In 2008,
                  it reopened as The Boondocks Grill and has proudly served the
                  High Prairie community ever since. The restaurant has remained
                  within the Mouallem Family and has a rich history featured in
                  films like 'The Last Baron' and 'The Lebanese Burger Mafia,'
                  as well as in numerous publications such as the Calgary
                  Herald, Reader's Digest, Swerve, CBC, and Alberta Venture.
                </p>
              </motion.div>

              {/* Image carousel */}
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-xl"
                variants={itemVariants}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="aspect-video"
                  >
                    <img
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2.5 shadow-lg backdrop-blur-sm hover:bg-white transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-800" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2.5 shadow-lg backdrop-blur-sm hover:bg-white transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 text-gray-800" />
                </motion.button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        currentImageIndex === index
                          ? 'bg-white w-6'
                          : 'bg-white/60'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sponsorship note */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="inline-block bg-yellow-50 px-6 py-4 rounded-lg border border-yellow-100">
              <p className="text-yellow-800 font-medium">
                The Boondocks Grill proudly sponsors many of High Prairie&apos;s
                esteemed clubs and organizations. Reach out, and let&apos;s
                explore how we can work together.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Background accents */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0.2,
              scale: 0.2,
            }}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: `${Math.random() * 2 + 1}vw`,
              height: `${Math.random() * 2 + 1}vw`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
