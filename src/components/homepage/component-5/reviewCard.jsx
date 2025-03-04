import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const ReviewCard = ({ reviewerData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTextTruncated, setIsTextTruncated] = useState(false);
  const textRef = useRef(null);
  const fullTextRef = useRef(null);

  // Check if text is truncated on mount and window resize
  useEffect(() => {
    const checkIfTruncated = () => {
      if (textRef.current) {
        const { scrollHeight, clientHeight } = textRef.current;
        setIsTextTruncated(scrollHeight > clientHeight);
      }
    };

    checkIfTruncated();
    window.addEventListener('resize', checkIfTruncated);

    return () => {
      window.removeEventListener('resize', checkIfTruncated);
    };
  }, [reviewerData.review]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="'bg-gradient-to-br from-yellow-50 to-white border-yellow-300/20 max-w-xl w-full mx-auto p-6 md:p-8 rounded-xl shadow-lg border border-gray-300 hover:border-yellow-500/50 transition-all duration-300 font-light relative z-10 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(234, 179, 8, 0.15)',
      }}
    >
      {/* User info section */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-gray-900 font-semibold text-lg">
            {reviewerData.name}
          </h3>
          <p className="text-gray-500 text-sm">{reviewerData.date}</p>
        </div>

        {/* Rating stars */}
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
      </div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent mb-4"
      />

      {/* Review content */}
      <div className="flex-grow overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          {isExpanded ? (
            <motion.p
              key="expanded"
              ref={fullTextRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              className="text-gray-700 mb-2"
            >
              {reviewerData.review}
            </motion.p>
          ) : (
            <motion.p
              key="collapsed"
              ref={textRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-700 mb-2 line-clamp-6"
            >
              {reviewerData.review}
            </motion.p>
          )}
        </AnimatePresence>

        {isTextTruncated && (
          <motion.button
            onClick={toggleReadMore}
            className="text-yellow-600 hover:text-yellow-700 font-medium text-sm mt-2 flex items-center space-x-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </motion.svg>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

ReviewCard.propTypes = {
  reviewerData: PropTypes.shape({
    imgSrc: PropTypes.string,
    review: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;
