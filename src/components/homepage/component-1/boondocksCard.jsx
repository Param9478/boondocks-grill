import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const BoondocksCard = ({
  imgSrc,
  title,
  context,
  imgPosition,
  featured = false,
}) => {
  return (
    <motion.div
      className={`max-w-md overflow-hidden rounded-xl ${
        featured
          ? 'bg-gradient-to-br from-yellow-50 to-white border border-yellow-300/20'
          : 'bg-white border border-gray-200'
      } shadow-md hover:shadow-xl transition-all duration-300 mb-8 mx-auto`}
      whileHover={{
        scale: 1.02,
        boxShadow:
          '0 10px 25px -5px rgba(234, 88, 12, 0.1), 0 8px 10px -6px rgba(234, 88, 12, 0.1)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image container with overlay */}
      <div className="relative overflow-hidden" style={{ height: '220px' }}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-50 z-10"
          whileHover={{ opacity: 0.3 }}
        />

        <motion.img
          className="h-full w-full object-cover transition-transform duration-700"
          style={{
            objectPosition: `center ${imgPosition ? imgPosition : '40%'}`,
          }}
          src={imgSrc}
          alt="The Boondocks Grill"
          whileHover={{ scale: 1.05 }}
        />

        {/* Subtle yellow border accent on top of image */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-center mb-3">
          {featured && (
            <div className="h-4 w-1 bg-yellow-500 rounded-full mr-3"></div>
          )}
          <h3
            className={`text-xl md:text-2xl font-medium ${featured ? 'text-yellow-500' : 'text-gray-800'}`}
          >
            {title}
          </h3>
        </div>

        <p className="text-gray-600 font-light text-sm md:text-base text-left mt-3 md:mt-4">
          {context}
        </p>

        {/* Learn More Link */}
        <motion.div
          className="mt-4 text-sm font-medium text-yellow-500 flex items-center group cursor-pointer"
          whileHover={{ x: 5 }}
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

BoondocksCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  featured: PropTypes.bool,
  imgPosition: PropTypes.string,
};

export default BoondocksCard;
