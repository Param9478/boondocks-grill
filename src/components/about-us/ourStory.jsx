import AboutOptions from './aboutOptions';
// import restroPic from '../../assets/about-us-restro.jpg';
import burgerBaron from '../../assets/burger-baron.jpg';

export default function OurStory() {
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
                title="Take Out"
                content="Don't feel like cooking? We've got you! Enjoy our full menu for takeout—just give us a call! 📞 🍽️"
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
            <div className="mt-8 sm:mt-18">
              <img src={burgerBaron} alt="Restaurant" className="w-full rounded-xl" />
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
