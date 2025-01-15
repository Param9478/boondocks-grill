import PropTypes from 'prop-types';
import Navbar from './navbar';

const Header = ({
  title = 'Welcome to The Boondocks Grill',
  content = 'Discover our amazing menu and cozy atmosphere.',
  imgSrc,
  fullWidth = false,
}) => {
  const contentWidthClass = fullWidth ? 'w-full' : 'max-w-screen-sm';

  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden mt-16">
        <img
          src={imgSrc}
          alt="Header Background"
          className="object-cover h-96 w-full brightness-50"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
            {title}
          </h1>
          <p
            className={`pt-6 m-auto sm:text-md font-light drop-shadow-md ${contentWidthClass}`}
          >
            {content}
          </p>
          <div className="flex justify-center mt-8 text-center">
            <a
              href="https://boondocks2.popmenu.com/#menu?location=boondocks"
              target="_blank"
              rel="noopener noreferrer"
              className="order-now-button text-white text-center bg-yellow-500 w-40 px-6 py-2 rounded-md font-medium hover:bg-yellow-600 transition transform hover:scale-105 flex justify-center items-center space-x-2"
            >
              <span>Order Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

export default Header;
