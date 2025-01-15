import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', path: '/' },
  {
    name: 'Menu',
    path: '/menu',
    // target: '_blank',
  },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <Disclosure
      as="nav"
      className="fixed w-full z-50 top-0 bg-gray-800 shadow-lg"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Link to="/" className="flex flex-shrink-0 items-center">
                <img
                  alt="boondocks"
                  className="h-14"
                  src="https://popmenucloud.com/cdn-cgi/image/width=300,height=300,format=auto,fit=scale-down/thkqwlos/4ce608ec-da8e-4d45-876b-f429f0b380c3.png"
                />
                <h4 className="hidden sm:block text-white ml-2">
                  THE BOONDOCKS GRILL
                </h4>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    target={item.target}
                    className={`relative px-3 py-2 text-md font-medium group ${
                      location.pathname === item.path
                        ? 'text-yellow-500'
                        : 'text-gray-300 hover:text-white transition-colors duration-200'
                    }`}
                    aria-current={
                      location.pathname === item.path ? 'page' : undefined
                    }
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-hover:w-2/3 transition-all duration-300 ${
                        location.pathname === item.path ? 'w-1/3' : ''
                      }`}
                    />
                  </Link>
                ))}
                <a
                  href="https://boondocks2.popmenu.com/#menu?location=boondocks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order-now-button text-white bg-yellow-500 px-4 py-2 rounded-md font-medium hover:bg-yellow-600 transition transform hover:scale-105 flex items-center space-x-2"
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

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  target={item.target}
                  className={`${
                    location.pathname === item.path
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } block rounded-md px-3 py-2 text-base font-medium`}
                  aria-current={
                    location.pathname === item.path ? 'page' : undefined
                  }
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://boondocks2.popmenu.com/#menu?location=boondocks"
                target="_blank"
                rel="noopener noreferrer"
                className="order-now-button text-white bg-yellow-500 px-4 py-2 rounded-md font-medium hover:bg-yellow-600 transition transform hover:scale-105 flex items-center space-x-2"
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
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
