import PropTypes from 'prop-types';

const ImageRow = ({ imgSrc, alt }) => {
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full h-60 sm:h-80 object-cover m-auto mt-5 lg:mt-0 rounded-xl hidden sm:block"
    />
  );
};

ImageRow.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageRow;
