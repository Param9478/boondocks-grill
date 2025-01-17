import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ reviewerData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-black max-w-xl w-full mx-auto p-6 md:p-8 font-light rounded-2xl shadow-md mt-10 relative z-10 text-center h-auto">
      <div className="mb-1">
        <p className="text-white font-semibold text-lg text-left">
          {reviewerData.name}
        </p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
        <p className="text-white text-sm">{reviewerData.date}</p>
      </div>
      <div className="h-auto overflow-hidden">
        <p className={`text-white mb-2 ${isExpanded ? '' : 'line-clamp-6'}`}>
          {reviewerData.review}
        </p>
        {reviewerData.review.length > 90 && (
          <button
            onClick={toggleReadMore}
            className="text-yellow-500 underline mt-2"
          >
            {isExpanded ? 'Read Less ↑' : 'Read More ↓'}
          </button>
        )}
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  reviewerData: PropTypes.shape({
    imgSrc: PropTypes.string, // Removed the 'isRequired' constraint since the image is optional
    review: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired, // Added date field
  }).isRequired,
};

export default ReviewCard;
