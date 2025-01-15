import AboutOptions from './aboutOptions';
import restroPic from '../../assets/about-us-restro.jpg';

export default function OurStory() {
  return (
    <div className="max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24 flex flex-col lg:flex-row justify-between m-auto">
      {/* Text Section */}
      <div className="lg:w-2/4 w-full text-center lg:text-left mb-8 lg:mb-0">
        <div className="m-auto">
          <h1 className="text-3xl mb-4">Our Story</h1>
          <div className="mb-8 lg:mb-0 w-full lg:w-3/4">
            <AboutOptions
              title="Family-friendly"
              content="Perfect for an enjoyable outing with loved ones."
            />
            <hr className="my-6 border-t border-gray-300" />
            <AboutOptions
              title="Varied Menu"
              content="Something for everyone to savor."
            />
            <hr className="my-6 border-t border-gray-300" />
            <AboutOptions
              title="Memorable Experience"
              content="Create lasting memories with loved ones."
            />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex-1">
        <div className="w-full m-auto">
          <p className="text-sm font-light text-gray-700 w-1/2 lg:w-full m-auto lg:text-left text-center">
            At The Boondocks Grill, our team is passionate about creating a
            memorable dining experience. Our culinary team meticulously crafts
            each dish, infusing it with flavor and love. Our servers are
            attentive and dedicated to ensuring that our guests feel welcome and
            comfortable. Together, we strive to create a warm and inviting
            atmosphere that our guests will remember for years to come.
          </p>
          <div className="mt-8 sm:mt-16">
            <img src={restroPic} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
