import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function AboutOptions({ title, content }) {
  return (
    <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start">
      <div className="lg:w-12 lg:h-12 bg-black rounded-full text-xl h-10 w-10 flex justify-center items-center text-white mb-4 lg:mb-0">
        <FontAwesomeIcon icon={faCube} />
      </div>
      <div className="lg:ml-4">
        <h1 className="text-lg">{title}</h1>
        <p className="text-sm text-gray-700 font-light">{content}</p>
      </div>
    </div>
  );
}
AboutOptions.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
