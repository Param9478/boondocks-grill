import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const RenderMenuItems = ({ category }) => {
  // Animation variants matching Component1 style
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
    <div className="grid md:grid-cols-2 gap-8 relative">
      {/* Decorative floating particles matching Component1 */}
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

      <motion.div
        className="relative lg:h-[600px] group overflow-hidden rounded-xl"
        variants={itemVariants}
        whileHover={{
          y: -5,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-contain rounded-xl transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 group-hover:from-black/70 group-hover:to-black/30 transition-all rounded-xl flex items-center justify-center">
          <div className="text-center p-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white tracking-tight"
              variants={itemVariants}
            >
              <span className="text-yellow-500">
                {category.title.split(' ')[0]}
              </span>
              {category.title.split(' ').length > 1 && (
                <span> {category.title.split(' ').slice(1).join(' ')}</span>
              )}
            </motion.h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-4 mx-auto w-2/3"
              variants={itemVariants}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="p-6 max-h-[600px] overflow-y-auto custom-scrollbar bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {category.items?.map((section, idx) => (
          <motion.div
            key={`${section.category}-${idx}`}
            className="mb-4 last:mb-0"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-yellow-500">{section.category}</span>
              <div className="h-px flex-grow bg-yellow-200 ml-4" />
            </h3>
            <div className="space-y-4">
              {section.dishes.map((dish, dishIdx) => (
                <motion.div
                  key={dishIdx}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-5 rounded-xl backdrop-blur-md shadow-md transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-semibold text-gray-800 text-lg group-hover:text-yellow-500 transition-colors">
                      {dish.name}
                    </h4>
                    <span className="text-yellow-500 font-bold text-lg whitespace-nowrap">
                      ${dish.price}
                    </span>
                  </div>
                  {dish.description && (
                    <p className="text-gray-700 font-light mt-2 leading-relaxed">
                      {dish.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Diagonal stripes accent like in Component1 */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(234, 179, 8, 0.2) 10px, rgba(234, 179, 8, 0.2) 20px)',
            backgroundSize: '28.28px 28.28px',
          }}
        ></div>
      </div> */}
    </div>
  );
};

RenderMenuItems.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        dishes: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            description: PropTypes.string,
          })
        ).isRequired,
      })
    ),
  }).isRequired,
};

export default RenderMenuItems;

// eslint-disable-next-line react/no-unknown-property
<style jsx global>{`
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #f59e0b transparent;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #f59e0b;
    border-radius: 20px;
    border: 2px solid transparent;
  }
`}</style>;
