import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Promotion = ({ PizzaDeal, showPromotion, setShowPromotion }) => {
  if (!showPromotion) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: 'spring', damping: 20 }}
      className="mt-16 sm:mt-20 max-w-6xl mx-auto"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden relative border border-yellow-200">
        <div className="flex flex-col md:flex-row">
          {/* Left content section */}
          <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-center">
            <div className="flex items-center mb-2">
              <div className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                Classic Combo
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Pizza & Wings Special Deal
            </h3>

            <p className="text-gray-600 mb-4">
              Choose medium, large, or extra large pizza with your favorite
              toppings, 10 wings of your choice, and a 2L Pepsi - the perfect
              combo for takeout or delivery!
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-2">
              <div className="bg-yellow-50 px-4 py-2 rounded-lg border border-yellow-200">
                <span className="text-sm text-gray-500">
                  Price varies by size and toppings
                </span>
              </div>

              <motion.a
                href="https://boondocks2.popmenu.com/#menu?location=boondocks"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Order Now</span> <ChevronRight className="w-4 h-4" />
              </motion.a>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Not available for small or giant pizzas. Available for takeout and
              delivery only
            </p>
          </div>

          {/* Right side image - smaller and contained */}
          <div className="md:w-2/5 relative h-48 sm:h-64 md:h-auto overflow-hidden">
            <img
              src={PizzaDeal}
              alt="Pizza Special Deal"
              className="object-cover w-full h-full"
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setShowPromotion(false)}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full p-1.5 transition-colors shadow-sm"
          aria-label="Close promotion"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

// PropTypes definition
Promotion.propTypes = {
  PizzaDeal: PropTypes.string.isRequired,
  showPromotion: PropTypes.bool.isRequired,
  setShowPromotion: PropTypes.func.isRequired,
};

// Default props
Promotion.defaultProps = {
  showPromotion: false,
};

export default Promotion;
