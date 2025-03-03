import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import pizza from '../../assets/header/pizza.png';

const Header = ({
  title = 'Welcome to The Boondocks Grill',
  content = 'Discover our amazing menu and cozy atmosphere.',
  fullWidth = false,
  isHomePage = false, // New prop to determine if it's the home page
}) => {
  const contentWidthClass = fullWidth ? 'w-full' : 'max-w-screen-sm';
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useSpring(0, { bounce: 0 });
  const mouseY = useSpring(0, { bounce: 0 });
  const spotlightSize = isMobile ? 200 : 400;

  const spotlightLeft = useTransform(
    mouseX,
    (x) => `${x - spotlightSize / 2}px`
  );
  const spotlightTop = useTransform(
    mouseY,
    (y) => `${y - spotlightSize / 2}px`
  );

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!parentElement || isMobile) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement, isMobile]
  );

  // Handle touch move for mobile
  const handleTouchMove = useCallback(
    (event) => {
      if (!parentElement) return;
      const touch = event.touches[0];
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(touch.clientX - left);
      mouseY.set(touch.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));

    // Add touch events for mobile
    parentElement.addEventListener('touchmove', handleTouchMove);
    parentElement.addEventListener('touchstart', () => setIsHovered(true));
    parentElement.addEventListener('touchend', () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
      parentElement.removeEventListener('mouseleave', () =>
        setIsHovered(false)
      );

      parentElement.removeEventListener('touchmove', handleTouchMove);
      parentElement.removeEventListener('touchstart', () => setIsHovered(true));
      parentElement.removeEventListener('touchend', () => setIsHovered(false));
    };
  }, [parentElement, handleMouseMove, handleTouchMove]);

  return (
    <div className="relative">
      <Navbar />
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-hidden mt-16">
        {/* Spotlight Effect */}
        <motion.div
          ref={containerRef}
          className="pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200 from-yellow-500/40 via-orange-500/20 to-transparent"
          style={{
            width: spotlightSize,
            height: spotlightSize,
            left: spotlightLeft,
            top: spotlightTop,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Content Structure - Mobile: Image-first approach */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8 md:py-12">
          {/* Mobile-specific layout (flex column with image on top) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Food Image - Top positioned on mobile, right side on desktop */}
            <motion.div
              className="relative w-full md:w-2/5 lg:w-1/3 max-w-xs mx-auto md:mx-0 overflow-hidden order-first md:order-last mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Sparkle effects */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-yellow-500"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Image container with animations - Better positioning for mobile */}
              <motion.div
                className="relative mx-auto w-3/4 md:w-full pt-4 md:pt-0"
                initial={{ scale: 0.8, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2,
                }}
              >
                {/* Circle background for the image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-gradient-to-b from-yellow-500/20 to-orange-600/5 blur-md" />

                {/* Shadow beneath the food */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/5 h-4 bg-black/30 rounded-full blur-md" />

                {/* Food Image with float animation */}
                <motion.div
                  className="relative w-4/5 mx-auto"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 1, 0, -1, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <motion.img
                    src={pizza}
                    alt="Delicious pizza"
                    className="w-full h-auto drop-shadow-2xl"
                  />

                  {/* Steam/aroma particles - reduced for mobile */}
                  {[...Array(isMobile ? 3 : 5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-white"
                      style={{
                        width: 8 + Math.random() * 6,
                        height: 8 + Math.random() * 6,
                        left: `${40 + Math.random() * 20}%`,
                        top: `${10 + Math.random() * 20}%`,
                        opacity: 0.1 + Math.random() * 0.3,
                      }}
                      animate={{
                        y: [0, -60 - Math.random() * 40],
                        opacity: [0, 0.6, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Text Content - Below image on mobile, left side on desktop */}
            <motion.div
              className="text-center md:text-left relative z-10 md:flex-1 md:pr-6 order-last md:order-first"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* Badge for special offer - only shown on home page */}
              {isHomePage && (
                <motion.div
                  className="absolute right-2 md:right-auto md:left-0 top-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full transform -translate-y-1/2"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', delay: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                >
                  Enjoy $3 Delivery Anywhere in High Prairie!
                </motion.div>
              )}

              {/* Title with highlighted words */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 mt-6 md:mt-6"
              >
                {title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-2">
                    {i % 3 === 1 ? (
                      <span className="text-yellow-500">{word} </span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                ))}
              </motion.h1>

              {/* Animated divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent md:ml-0 md:mr-auto mx-auto mb-4 sm:mb-6"
              />

              {/* Content paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className={`text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 mx-auto md:mx-0 ${contentWidthClass}`}
              >
                {content}
              </motion.p>

              {/* Social proof - only shown on home page */}
              {isHomePage && (
                <motion.div
                  className="flex justify-center md:justify-start items-center space-x-2 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    4.8/5 from over 200+ reviews
                  </span>
                </motion.div>
              )}

              {/* Action buttons with improved mobile layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-8 md:mb-0"
              >
                {/* Primary CTA */}
                <motion.a
                  href="https://boondocks2.popmenu.com/#menu?location=boondocks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-yellow-500 text-white px-8 py-3 rounded-lg text-center font-medium transform transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Order Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href="/menu"
                  className="w-full sm:w-auto border border-gray-700 text-white px-8 py-3 rounded-lg text-center hover:border-yellow-500 transform transition-all duration-300 font-medium hover:text-yellow-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Menu
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background particles - fewer for mobile */}
        {[...Array(isMobile ? 4 : 12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-500/10"
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
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  fullWidth: PropTypes.bool,
  isHomePage: PropTypes.bool,
};

export default Header;
