import BoondocksCard from './boondocksCard';

export default function Component1() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 pt-12 sm:pt-24 flex lg:flex-row flex-col">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left lg:w-1/4 md:w-3/4 m-auto">
          {/* <div className="flex-1 text-center lg:text-left lg:w-1/4 w-full"> */}
          <div className="lg:w-3/4 w-full m-auto">
            <h1 className="text-3xl mb-3">Exceptional Dining Experience</h1>
            <p className="text-gray-500 font-light text-sm md:text-base text-left px-3 lg:p-0">
              Step into The Boondocks Grill, and you’ll be transported to a
              cozy, welcoming space where you can relax and indulge in delicious
              food. Our commitment to providing an exceptional dining experience
              is reflected in everything we do, from our warm and attentive
              service to our carefully crafted menu. Whether you’re dining with
              family, catching up with friends, or enjoying a romantic meal, we
              aim to make every moment memorable.
            </p>
          </div>
          {/* <div className="lg:w-3/4 m-auto">
            <h1 className="text-3xl mb-4">Exceptional Dining Experience</h1>
            <p className="font-light text-gray-700 text-xs">
              Step into The Boondocks Grill, and you’ll be transported to a
              cozy, welcoming space where you can relax and indulge in delicious
              food. Our commitment to providing an exceptional dining experience
              is reflected in everything we do, from our warm and attentive
              service to our carefully crafted menu. Whether you’re dining with
              family, catching up with friends, or enjoying a romantic meal, we
              aim to make every moment memorable.
            </p>
          </div> */}
          <div className="mt-8 sm:mt-16">
            <BoondocksCard
              imgSrc="https://images.unsplash.com/photo-1499186024912-c374ac2e9cb2?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Family-friendly Atmosphere"
              context="The Boondocks Grill offers a warm, inviting atmosphere, perfect for family meals or special occasions. With its cozy ambiance and friendly staff, every visit promises a memorable experience. Children are always welcome, with menu options designed to delight guests of all ages."
            />
          </div>
        </div>

        {/* Card Section */}
        <div className="flex-1">
          <div>
            <BoondocksCard
              imgSrc="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Varied Menu Options"
              context="The Boondocks Grill’s menu caters to all tastes, offering hearty comfort food and lighter, healthy choices. Every dish is made with the freshest ingredients, bursting with flavor and nutrition. Guests can enjoy exploring new flavors or sticking to their classic favorites, ensuring a meal to remember for all."
            />
          </div>
          <div className="mt-8 sm:mt-8">
            <BoondocksCard
              imgSrc="https://images.unsplash.com/flagged/photo-1564697259787-6fc88465d327?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Memorable Dining Experience"
              context="At The Boondocks Grill, we create lasting memories with exceptional food, warm ambiance, and attentive service. Perfect for special occasions or a casual night out, our cozy atmosphere and friendly staff ensure a delightful dining experience for all ages."
            />
          </div>
        </div>
      </div>
    </>
  );
}
