import { motion } from 'framer-motion';
import Header from '../header';
import GoogleMap from './GoogleMap';
import header from '../../assets/header.webp';
import ReservationSection from './reservationSection';
import ContactForm from './ContactForm';

// Animation variants - shared across components
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

// Main Contact Page Component
export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <Header
        title="Contact Us"
        content="We'd love to hear from you! Please don't hesitate to reach out to us with any questions, comments, or concerns – we're here to help."
        imgSrc={header}
        css="no-wrap"
      />

      {/* Decorative separator - matching Component1 */}
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
        className="max-w-7xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ReservationSection itemVariants={itemVariants} />
          <ContactForm itemVariants={itemVariants} />
          <GoogleMap />
        </motion.div>
      </motion.div>

      {/* Background accents - matching Component1 */}
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
    </div>
  );
}

// Redesigned ReservationSection Component

// Redesigned ContactForm Component
