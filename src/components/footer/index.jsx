import {
  FaClock,
  FaFacebook,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-white py-12 lg:py-16">
      <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info and Social */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            THE BOONDOCKS GRILL
          </h3>
          <div className="space-y-3">
            <a
              href="https://www.facebook.com/TheBoondocksGrill"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start hover:text-yellow-500 transition-colors"
            >
              <FaFacebook className="mr-2 text-lg" />
              Follow us on Facebook
            </a>
            <a
              href="tel:7805235544"
              className="flex items-center justify-center md:justify-start hover:text-yellow-500 transition-colors"
            >
              <FaPhoneAlt className="mr-2 text-lg" />
              Call Us
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            Our Location
          </h3>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaMapMarkerAlt className="text-lg" />
            <p className="text-sm">
              5023 53 Ave,
              <br />
              High Prairie, AB T0G 1E0
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            Opening Hours
          </h3>
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
            <FaClock className="text-lg" />
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm mr-4">Mon - Thu:</span>
                <span className="text-sm">11:00 AM - 9:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm mr-4">Fri - Sat:</span>
                <span className="text-sm">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span className="text-sm mr-4">Sun:</span>
                <span className="text-sm">Enjoy your day off!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
