import ImageRow from './imageRow';
import { Link } from 'react-router-dom';

const Component3 = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=3689&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Background"
          className="object-cover h-80 w-full brightness-50"
          style={{ objectPosition: 'center 50%' }}
        />
        {/* Text Content */}
        <div className="absolute text-center lg:text-left w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex lg:flex-row flex-col justify-around max-w-7xl">
          <div className="md:w-3/5 sm:w-full lg:m-0 m-auto">
            <p className="text-xl md:text-2xl mb-2 text-center lg:text-left">
              The Boondocks Grill&apos;s Culinary Delights
            </p>
            <p className="text-white font-light text-sm md:text-base mt-2 md:mt-4 text-center lg:text-left">
              At The Boondocks Grill, we offer a diverse range of dishes that
              appeals to all palates. Our menu boasts hearty, home-style dishes,
              as well as lighter options for those seeking healthy alternatives.
              From savory appetizers to delectable entrees and mouth-watering
              desserts, our culinary team delivers an unforgettable dining
              experience.
            </p>
          </div>

          <Link
            to="https://boondocks2.popmenu.com/#menu?location=boondocks"
            className="lg:my-auto mt-5"
            target="_blank"
          >
            <button className="sm:text-sm text-xs border border-white p-2 m-auto lg:m-0 block hover:bg-white hover:text-black transition duration-300">
              VIEW ALL MENU
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 py-0 lg:py-10">
        <div className="flex flex-col lg:flex-row lg:space-x-8 lg:w-3/4 sm:w-2/4 mx-auto py-10 p-2 space-y-4 lg:space-y-0">
          <ImageRow
            imgSrc="https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="lasagna"
          />
          <ImageRow
            imgSrc="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pasta"
          />
          <ImageRow
            imgSrc="https://images.unsplash.com/photo-1580959375944-abd7e991f971?q=80&w=2205&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="beef dip"
          />
        </div>
      </div>
    </div>
  );
};

export default Component3;
