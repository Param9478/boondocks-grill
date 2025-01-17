import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const RenderMenuItems = ({ category }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative lg:h-[600px] group">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-contain rounded-xl transform transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20 group-hover:from-black/60 group-hover:to-black/30 transition-all rounded-xl flex items-center justify-center">
          <div className="text-center p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {category.title}
            </h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mt-4 rounded-full" />
          </div>
        </div>
      </div>

      <motion.div
        className="p-6 max-h-[600px] overflow-y-auto custom-scrollbar"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {category.items?.map((section, idx) => (
          <motion.div
            key={idx}
            className="mb-8 last:mb-0"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-yellow-500 mb-6 flex items-center">
              <span>{section.category}</span>
              <div className="h-px flex-grow bg-yellow-200 ml-4" />
            </h3>
            <div className="space-y-4">
              {section.dishes.map((dish, dishIdx) => (
                <motion.div
                  key={dishIdx}
                  variants={itemVariants}
                  className="bg-white/80 p-5 rounded-xl backdrop-blur-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
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
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {dish.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
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
