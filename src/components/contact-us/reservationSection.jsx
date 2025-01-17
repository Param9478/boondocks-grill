import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ReservationSection = () => {
  return (
    <section className="p-8 text-center bg-white  rounded-md">
      <h1 className="text-3xl mb-4 text-center text-black">OUR LOCATION</h1>
      <p className="text-lg mb-5">
        <FaMapMarkerAlt className="inline mr-2 mb-1" /> 5023 53 Ave, High
        Prairie, AB T0G 1E0
      </p>

      <p className="mb-5 text-sm font-light text-gray-600 w-full">
        Reserve your table at The Boondocks Grill to experience our delicious
        food and exceptional service. Call or visit our website to make a
        reservation today.
      </p>

      <div className="bg-black text-white py-2 px-4 rounded-md inline-block hover:bg-gray-800 transition-colors duration-300">
        BOOK A TABLE NOW
      </div>

      <div className="mt-5 text-center">
        <h2 className="text-xl mb-4">TELEPHONE RESERVATIONS</h2>
        <p className="text-lg mb-4">
          <FaPhoneAlt className="inline mr-2 mb-1" /> 780 523 5544
        </p>
      </div>
    </section>
  );
};

export default ReservationSection;
