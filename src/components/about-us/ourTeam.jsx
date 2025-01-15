import TeamPicture from './teamPicture'

export default function OurTeam() {
  return (
    <>
      <div className="m-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24">
        <div className="flex lg:flex-row flex-col items-center lg:text-left text-center">
          <div className="w-1/2">
            {/* Text Section */}
            <h1 className="text-2xl mb-4">
              Meet The Team Behind The Boondocks Grill
            </h1>
          </div>

          {/* Card Section */}
          <div className="w-1/2">
            <p className="text-sm font-light text-gray-700">
              Step into The Boondocks Grill, and you’ll be transported to a
              cozy, welcoming space where you can relax and indulge in delicious
              food. Our commitment to providing an exceptional dining experience
              is reflected in everything we do, from our warm and attentive
              service to our carefully crafted menu. Whether you’re dining with
              family, catching up with friends, or enjoying a romantic meal, we
              aim to make every moment memorable.
            </p>
          </div>
        </div>
      </div>
      <TeamPicture />
    </>
  )
}
