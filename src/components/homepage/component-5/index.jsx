/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import ReviewCard from './ReviewCard';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Component5 = () => {
  const sliderRef = useRef(null);
  const reviewerImages = [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review:
        "I took my niece here for dinner tonight, it was absolutely packed! To be fair, it's a Friday night. We managed to get a table quickly, menu and drinks in no time. The food was hot and delicious, service was great even being so busy. Highly recommend!",
      name: 'Brittney Thorburn',
      date: 'a year ago',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review:
        'Great family restaurant. Food was amazing and service was great. Went here twice while I was in town. It was always the place to go to when I lived here years ago. Owners are awesome people.',
      name: 'Hanan',
      date: '3 years ago',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review: `I'm giving it a 5 star for 2 reasons. 
1. The staff are so friendly and nice. Always coming to check if you're okay and if you need anything. It's not like some restaurants where you have to call the staff just to get their attention.
2. The food I had was good. I had the pepper steak and my dad had the chicken mushroom fettuccine and it was really good.
Good experience in small town High Prairie`,
      name: 'Andrew Achoba',
      date: '2 years ago',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review: `Real Food!
        The turkey wrap had real turkey meat. The lettuce and tomato and the rest of the rock was all very fresh. The potato bacon soup had real potatoes and real bacon and was incredibly good. 
        You Gotta Eat Here!`,
      name: 'Donald Stone',
      date: '6 years ago',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review: `First time I have ever been to High Prairie, I stopped here for lunch. The restaurant was clean and welcoming. The staff were prompt and friendly. I had the lunch special (crispy chicken dill wrap with fries and gravy). Super impressive gravy and dill sauce in the wrap! The portion was generous but not over the top, which I appreciate. Overall a great experience and I will definitely be stopping in again on my next trip.`,
      name: 'Chelsey Deveau',
      date: '2 years ago',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    // Custom styling for slider dots to match light theme
    customPaging: function () {
      return (
        <div className="w-3 h-3 mx-1 rounded-full bg-gray-200 hover:bg-yellow-500 transition-colors duration-300"></div>
      );
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-20 relative overflow-hidden">
      {/* Background particles matching light theme */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-500/10"
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0.2,
            scale: 0.2,
          }}
          animate={{
            x: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            opacity: [0.2, 0.5, 0.2],
            scale: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: `${Math.random() * 2 + 1}vw`,
            height: `${Math.random() * 2 + 1}vw`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-yellow-500">Guests</span> Say
          </h2>

          {/* Animated divider matching light theme style */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"
          />

          <p className="text-gray-600 max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have experienced at The Boondocks Grill.
          </p>
        </motion.div>

        {/* Custom navigation buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <motion.button
            onClick={() => sliderRef.current.slickPrev()}
            className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-yellow-500 hover:text-white border border-gray-200 shadow-sm transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={() => sliderRef.current.slickNext()}
            className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-yellow-500 hover:text-white border border-gray-200 shadow-sm transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </motion.button>
        </div>

        {/* Reviews slider */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pb-12"
        >
          <Slider ref={sliderRef} {...settings} className="reviews-slider">
            {reviewerImages.map((data, index) => (
              <div key={index} className="px-3 py-2">
                <ReviewCard reviewerData={data} />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            href="https://boondocks2.popmenu.com/#menu?location=boondocks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-medium transform transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              <span>Visit Us Today</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Add custom styling for slider dots to match light theme */}
        <style jsx>{`
          :global(.reviews-slider .slick-dots li button:before) {
            color: #ea580c;
            opacity: 0.4;
          }
          :global(.reviews-slider .slick-dots li.slick-active button:before) {
            color: #ea580c;
            opacity: 1;
          }
          :global(.reviews-slider .slick-prev:before),
          :global(.reviews-slider .slick-next:before) {
            color: #ea580c;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Component5;
