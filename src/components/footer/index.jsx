import { motion } from 'framer-motion';
import {
  FaClock,
  FaFacebook,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 lg:py-16">
      <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info and Social */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            THE BOONDOCKS GRILL
          </h3>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-4"></div>
          <div className="space-y-3">
            <motion.a
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              href="https://www.facebook.com/TheBoondocksGrill"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start hover:text-yellow-500 transition-colors duration-300 group"
            >
              <FaFacebook className="mr-2 text-lg group-hover:text-yellow-500 transition-colors duration-300" />
              Follow us on Facebook
            </motion.a>
            <motion.a
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              href="tel:7805235544"
              className="flex items-center justify-center md:justify-start hover:text-yellow-500 transition-colors duration-300 group"
            >
              <FaPhoneAlt className="mr-2 text-lg group-hover:text-yellow-500 transition-colors duration-300" />
              Call Us
            </motion.a>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            Our Location
          </h3>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-4"></div>
          <motion.div
            className="flex items-center justify-center md:justify-start space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <FaMapMarkerAlt className="text-lg text-yellow-500" />
            <p className="text-sm">
              5023 53 Ave,
              <br />
              High Prairie, AB T0G 1E0
            </p>
          </motion.div>
        </motion.div>

        {/* Opening Hours */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            Opening Hours
          </h3>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-4"></div>
          <motion.div
            className="flex items-center justify-center md:justify-start space-x-2 mb-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <FaClock className="text-lg text-yellow-500" />
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm mr-4">Mon - Thu:</span>
                <span className="text-sm">11:00 AM - 9:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm mr-4">Fri - Sat:</span>
                <span className="text-sm">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span className="text-sm mr-4">Sun:</span>
                <span className="text-sm">
                  Time to recharge! See you soon.
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>
          © {new Date().getFullYear()} The Boondocks Grill. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
