import PropTypes from 'prop-types';
const RenderMenuItems = ({ category }) => (
  <div className="grid md:grid-cols-2 gap-6">
    <div className="relative h-full">
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-full object-contain rounded-xl"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-xl">
        <h2 className="text-3xl font-bold text-white text-center px-4">
          {category.title}
        </h2>
      </div>
    </div>
    <div className="p-6 max-h-[600px] overflow-y-auto">
      {category.items?.map((section, idx) => (
        <div key={idx} className="mb-8 last:mb-0">
          <h3 className="text-xl font-semibold text-yellow-600 mb-4">
            {section.category}
          </h3>
          <div className="space-y-4">
            {section.dishes.map((dish, dishIdx) => (
              <div
                key={dishIdx}
                className="bg-white/60 p-4 rounded-lg backdrop-blur-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800">{dish.name}</h4>
                  <span className="text-yellow-600 font-semibold">
                    ${dish.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 w-4/5 mt-1">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
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
  }),
};

export default RenderMenuItems;
