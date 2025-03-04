import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ReservationSection = ({ itemVariants }) => {
  return (
    <motion.section
      variants={itemVariants}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <div className="grid md:grid-cols-2 gap-0">
        <motion.div
          className="bg-white p-8 lg:p-12 text-left space-y-6"
          whileHover={{
            backgroundColor: 'rgba(254, 252, 232, 1)',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            variants={itemVariants}
          >
            <span className="text-yellow-500">Visit</span> Us
          </motion.h2>

          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-6 w-2/3"
            variants={itemVariants}
          />

          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.p
              className="flex items-center text-gray-700 group"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaMapMarkerAlt
                className="text-yellow-500 mr-3 group-hover:scale-110 transition-transform"
                size={24}
              />
              5023 53 Ave, High Prairie, AB T0G 1E0
            </motion.p>
            <motion.a
              href="tel:7805235544"
              className="flex items-center text-gray-700 transition group"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaPhoneAlt
                className="text-yellow-500 mr-3 group-hover:scale-110 transition-transform"
                size={24}
              />
              <span>Call: 780 523 5544</span>
            </motion.a>
          </motion.div>

          <motion.p
            className="text-gray-700 font-light text-sm leading-relaxed"
            variants={itemVariants}
          >
            Reserve your table at The Boondocks Grill to experience our
            delicious food and exceptional service. Call us today to make a
            reservation or use our online booking system.
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 lg:p-12"
          whileHover={{
            backgroundImage:
              'linear-gradient(to bottom right, rgba(254, 249, 195, 1), rgba(253, 224, 71, 0.3))',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
          >
            <span className="text-yellow-500">Opening</span> Hours
          </motion.h2>

          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-6 w-2/3"
            variants={itemVariants}
          />

          <motion.div
            className="space-y-4 text-gray-700"
            variants={itemVariants}
          >
            {[
              { day: 'Monday - Thursday', hours: '11:00 AM – 9:30 PM' },
              { day: 'Friday - Saturday', hours: '11:00 AM – 10:00 PM' },
              {
                day: 'Sunday',
                hours: 'Closed – Time to recharge! See you soon.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex justify-between items-center"
                whileHover={{
                  x: 5,
                  transition: { type: 'spring', stiffness: 400, damping: 10 },
                }}
              >
                <span className="font-medium">{item.day}:</span>
                <span>{item.hours}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative accent */}
          <motion.div
            className="absolute bottom-4 right-4 w-16 h-16 opacity-10"
            style={{
              backgroundImage:
                'repeating-radial-gradient(circle at center, rgba(234, 179, 8, 0.4) 0, rgba(234, 179, 8, 0.1) 10px)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
ReservationSection.propTypes = {
  itemVariants: PropTypes.object.isRequired,
};
export default ReservationSection;
