import { useState, useEffect } from 'react';
import AboutOptions from './aboutOptions';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import burgerBaron from '../../assets/burger-baron.jpg';
import slider1 from '../../assets/slider1.JPG';
import slider2 from '../../assets/slider2.JPG';
import slider3 from '../../assets/slider3.JPG';
import slider4 from '../../assets/slider4.jpg';

export default function OurStory() {
  const images = [
    {
      src: slider1,
      alt: 'Burger Baron Historical Photo',
    },
    {
      src: slider2,
      alt: 'Burger Baron Historical Photo',
    },
    {
      src: slider3,
      alt: 'Burger Baron Historical Photo',
    },
    {
      src: slider4,
      alt: 'Burger Baron Historical Photo',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change slide every 3 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false); // Pause autoplay when manually navigating
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false); // Pause autoplay when manually navigating
  };

  // Mouse enter/leave handlers for the carousel
  const handleMouseEnter = () => {
    setIsAutoPlaying(false); // Pause on hover
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true); // Resume on mouse leave
  };

  return (
    <div>
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24 flex flex-col lg:flex-row justify-between m-auto">
        {/* Text Section */}
        <div className="lg:w-2/4 w-full text-center lg:text-left mb-8 lg:mb-0">
          <div className="m-auto">
            <h1 className="text-3xl mb-4">What We Offer</h1>
            <div className="mb-8 lg:mb-0 w-full lg:w-3/4">
              <AboutOptions
                title="Dine In"
                content="Our restaurant seats 90 and serves all your favorite dishes. Bring your family and friends! 🍔 🍕 🥗 🥩 🍝"
              />
              <hr className="my-6 border-t border-gray-300" />
              <AboutOptions
                title="Take Out & Drive-Thru"
                content="No time to cook? No problem! Enjoy our full menu with our convenient drive-thru and take-out options—just give us a call! 📞 🍽️"
              />
              <hr className="my-6 border-t border-gray-300" />
              <AboutOptions
                title="Delivery"
                content="All-day delivery to anywhere in High Prairie—home, work, or beyond. We’ve got you covered! 🚚 🍔"
              />
              <hr className="my-6 border-t border-gray-300" />
              <AboutOptions
                title="Online Ordering"
                content="Skip the call and order online—it's quick, easy, and convenient! 📱 💻 🍕"
              />
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="flex-1">
          <div className="w-full m-auto">
            <p className="text-sm font-light text-gray-700 lg:w-full m-auto">
              Our diner has been a beloved fixture for 40 years, initially
              opening as a Burger Baron in 1987. Over the years, it has
              undergone numerous transformations and name changes. In 2008, it
              reopened as The Boondocks Grill and has proudly served the High
              Prairie community ever since. The restaurant has remained within
              the Mouallem Family and has a rich history featured in films like
              &apos;The Last Baron&apos; and &apos;The Lebanese Burger
              Mafia,&apos; as well as in numerous publications such as the
              Calgary Herald, Reader&apos;s Digest, Swerve, CBC, and Alberta
              Venture.
            </p>
            <div
              className="relative mt-6"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="w-full max-h-64 lg:max-h-96 object-cover transition-transform duration-500"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      currentImageIndex === index ? 'bg-white' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 pt-6  m-auto text-center lg:text-left">
        <p className="text-sm text-center font-bold text-gray-700">
          The Boondocks Grill proudly sponsors many of High Prairie’s esteemed
          clubs and organizations. Reach out, and let&apos;s explore how we can
          work together.
        </p>
      </div>
    </div>
  );
}
