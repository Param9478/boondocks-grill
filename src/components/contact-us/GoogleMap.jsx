import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

// Animation variants - matching other components
const mapVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

const GoogleMap = () => {
  return (
    <motion.section
      variants={mapVariants}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <div className="bg-white p-6 rounded-t-lg">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          variants={mapVariants}
        >
          <span className="text-yellow-500">Find</span> Us
        </motion.h2>

        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-6 w-2/3"
          variants={mapVariants}
        />

        <motion.div
          className="flex items-center mb-4 text-gray-700"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <MapPin className="text-yellow-500 mr-3" size={24} />
          <p>
            The Boondocks Grill <br />
            5023 53 Ave, High Prairie, AB T0G 1E0
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative h-[400px] w-full shadow-inner overflow-hidden"
        whileHover={{
          boxShadow: 'inset 0 0 15px rgba(234, 179, 8, 0.3)',
        }}
      >
        {/* Decorative map border */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-500/10 via-yellow-500/30 to-yellow-500/10"></div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-yellow-500/10 via-yellow-500/30 to-yellow-500/10"></div>
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-yellow-500/10 via-yellow-500/30 to-yellow-500/10"></div>
          <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-yellow-500/10 via-yellow-500/30 to-yellow-500/10"></div>
        </div>

        {/* Map iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2263.723851680997!2d-116.49684896382675!3d55.43260947986274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539827c5003e33bb%3A0xe54be10bdc05f591!2sThe%20Boondocks%20Grill!5e0!3m2!1sen!2sca!4v1701825735198!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location"
        ></iframe>

        {/* Floating accent elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/20"
            style={{
              width: 8 + Math.random() * 6,
              height: 8 + Math.random() * 6,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              zIndex: 5,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </motion.div>

      {/* Decorative bottom accent */}
      <div className="h-3 bg-gradient-to-r from-yellow-100 via-yellow-500/50 to-yellow-100 rounded-b-lg"></div>
    </motion.section>
  );
};

export default GoogleMap;
