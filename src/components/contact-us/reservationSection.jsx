import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ReservationSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl rounded-lg mx-auto px-6 py-16 bg-white"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="text-left space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Visit Us</h2>
          <div className="space-y-4">
            <p className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="text-yellow-500 mr-3" size={24} />
              5023 53 Ave, High Prairie, AB T0G 1E0
            </p>
            <a
              href="tel:7805235544"
              className="flex items-center text-gray-700  p-2 transition"
            >
              <FaPhoneAlt className="text-yellow-500 mr-3" size={24} />
              <span>Call: 780 523 5544</span>
            </a>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Reserve your table at The Boondocks Grill to experience our
            delicious food and exceptional service. Call us today to make a
            reservation.
          </p>
        </div>

        <div className="bg-yellow-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hours</h2>
          <div className="space-y-2 text-gray-700">
            <p>Monday - Thursday: 11am - 9:30pm</p>
            <p>Friday - Saturday: 11am - 10:00pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReservationSection;
