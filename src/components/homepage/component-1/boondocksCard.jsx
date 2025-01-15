import PropTypes from 'prop-types';

const BoondocksCard = ({ imgSrc, title, context }) => {
  return (
    <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-8 mx-auto">
      {/* Image */}
      <img
        className="h-48 md:h-64 w-full object-cover"
        style={{ objectPosition: 'center 60%' }}
        src={imgSrc}
        alt="The Boondocks Grill"
      />

      {/* Card Content */}
      <div className="p-4 md:p-6">
        <p className="text-xl md:text-2xl mb-2 text-left">{title}</p>
        <p className="text-gray-500 font-light text-sm md:text-base text-left mt-2 md:mt-4">
          {context}
        </p>
      </div>
    </div>
  );
};

BoondocksCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
};

export default BoondocksCard;
