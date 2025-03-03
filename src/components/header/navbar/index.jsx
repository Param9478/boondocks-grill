import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900 shadow-lg shadow-black/20'
          : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition-all duration-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <motion.div
                className="flex flex-shrink-0 items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/" className="flex items-center space-x-2">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    alt="boondocks"
                    className="h-12 md:h-14"
                    src="https://popmenucloud.com/cdn-cgi/image/width=300,height=300,format=auto,fit=scale-down/thkqwlos/4ce608ec-da8e-4d45-876b-f429f0b380c3.png"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-white text-lg font-bold tracking-wide">
                      THE BOONDOCKS
                    </h4>
                    <div className="hidden sm:block w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
                    <span className="hidden sm:block text-yellow-500 text-xs tracking-wider">
                      GRILL & BAR
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Desktop menu */}
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-1 md:space-x-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link
                      to={item.path}
                      className={`relative px-3 py-2 text-md font-medium group overflow-hidden`}
                    >
                      <span
                        className={`relative z-10 ${
                          location.pathname === item.path
                            ? 'text-yellow-500'
                            : 'text-gray-300 group-hover:text-white transition-colors duration-200'
                        }`}
                      >
                        {item.name}
                      </span>

                      {/* Animated hover effect */}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform ${
                          location.pathname === item.path
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        } transition-transform duration-300 origin-left`}
                      />
                    </Link>
                  </motion.div>
                ))}

                {/* Order Now button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a
                    href="https://boondocks2.popmenu.com/#menu?location=boondocks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden group bg-yellow-500 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Order Now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>

                    {/* Hover effect */}
                    <span className="absolute bottom-0 left-0 w-full h-full bg-yellow-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom -z-10" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link
                      to={item.path}
                      className={`${
                        location.pathname === item.path
                          ? 'bg-gray-900 border-l-4 border-yellow-500 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      } block rounded-md px-3 py-3 text-base font-medium transition-all duration-200`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Order Now button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <a
                    href="https://boondocks2.popmenu.com/#menu?location=boondocks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-white bg-yellow-500 px-4 py-3 rounded-md font-medium hover:bg-yellow-600 transition-all duration-300 items-center justify-center space-x-2"
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
                </motion.div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
