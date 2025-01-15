import { Link } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';

const Menu = () => {
  const menuItems = useMemo(
    () => [
      {
        name: 'Italian Loaf',
        price: '$10',
        description:
          'Ham, pepperoni, onions, and mozzarella cheese baked on a 10-inch loaf.',
      },
      {
        name: 'Potato Skins',
        price: '$14',
        description:
          'You get an abundance of these tasty treats, topped with sour cream, baked cheese and bacon bits.',
      },
      {
        name: 'Deep Fried Pickles',
        price: '$12',
        description:
          'Caution: Highly Addictive. Pickle skewers breaded and seasoned, then deep fried. Served with our dill sauce.',
      },
      {
        name: 'Donair Calzone',
        price: '$12',
        description:
          'Beef donair, caesar sauce, onions, tomatoes & mozza-cheddar. Served with a side of sweet sauce.',
      },
      {
        name: 'Bacon Mozza Cheddar Burger',
        price: '$9',
        description:
          'A thick and juicy beef patty topped with Mozza and Cheddar cheese, Bacon, Lettuce and Tomato with our homemade white sauce.',
      },
      {
        name: 'Beef Donair',
        price: '$10',
        description:
          'Donair meat, tomatoes, onions and lettuce served with Caesar, dill or east coast sweet sauce.',
      },
      {
        name: 'Buffalo Chicken Sandwich',
        price: '$12',
        description:
          'Seasoned chicken breast tossed in hot sauce and baked with cheese on a garlic loaf.',
      },
      {
        name: 'Steak or Chicken Fajita',
        price: '$12',
        description:
          'A flour tortilla stuffed with grilled Beef or Chicken breast, sautéed Onions, Peppers, Salsa and served with sour cream.',
      },
      // Add more menu items as needed
    ],
    []
  );

  const [displayItems, setDisplayItems] = useState(menuItems.slice(0, 4));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayItems(menuItems.slice(0, 4));
      } else {
        setDisplayItems(menuItems);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuItems]);

  return (
    <div className="opacity-90 bg-black text-white p-6 md:p-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl text-center mb-6">OUR MENU</h1>

        <div className="py-4 text-center relative hidden sm:block">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 border-t-2 border-white w-1/4"></div>
          <span className="text-2xl">Get Relax. Eat.</span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 border-t-2 border-white w-1/4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 p-4 md:p-6">
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 text-left bg-gray-800 p-4 md:p-6 rounded-lg"
            >
              <p className="text-xl md:text-2xl mb-2 text-left">
                {item.name} - {item.price}
              </p>
              <p className="text-white font-light text-sm md:text-base text-left mt-2 md:mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="https://boondocks2.popmenu.com/#menu?location=boondocks"
          rel="noreferrer"
          target="_blank"
        >
          <button className="block text-md border border-white p-3 mx-auto mt-6 hover:bg-white hover:text-black transition duration-300">
            VIEW ALL MENU
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
