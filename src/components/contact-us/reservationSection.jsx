import React from 'react'

const ReservationSection = () => {
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl mb-4">OUR LOCATION</h1>
      <p className="text-lg">5023 53 Ave, High Prairie, AB T0G 1E0</p>

      <p className="mb-5 text-sm text-gray-600 font-light w-2/5 m-auto">
        Reserve your table at The Boondocks Grill to experience our delicious
        food and exceptional service. Call or visit our website to make a
        reservation today.
      </p>

      <div className="bg-black text-white py-2 px-4  inline-block hover:bg-gray-800">
        BOOK A TABLE NOW
      </div>

      <div className="mt-5">
        <h2 className="text-xl mb-4">TELEPHONE RESERVATIONS</h2>
        <p className="text-lg mb-4"> 780 523 5544</p>
      </div>
    </section>
  )
}

export default ReservationSection
