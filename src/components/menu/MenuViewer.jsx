import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import menu from '../../assets/menu-1.webp';
import TakeoutSpecial from '../../assets/takeout-deals.webp';
import DesertMenu from '../../assets/Desert-menu.webp';
import Liquor from '../../assets/liquor.webp';
import RenderMenuItems from './RenderMenuItems';
import PizzaDeal from '../../assets/pizza-deal.webp';
import RenderPDFSection from './RenderPDFSection';

const MenuViewer = ({ MenuFile }) => {
  const menuCategories = [
    {
      id: 'full-menu',
      title: 'Full Menu',
      type: 'pdf',
      pdfUrl: MenuFile,
      previewImage: menu,
    },
    {
      id: 'takeout-special',
      title: 'Take Out Special',
      type: 'items',
      image: TakeoutSpecial,
      items: [
        {
          category: 'Takeout Deals',
          dishes: [
            {
              name: 'Wow Pasta Meal',
              price: '32',
              description: '2 Baked Spaghetti or Lasagna + 2 Cans of Pop',
            },
            {
              name: 'Pizza and Wings',
              price: '35',
              description:
                'Large Pizza (up to 3 toppings) + 10 Chicken Wings + 2 Cans Pop',
            },
            {
              name: '2-2-2 Calzone',
              price: '34',
              description: '2 Calzone + 2 Side Fries + 2 Can Pop',
            },
            {
              name: 'Wings ',
              price: '28',
              description:
                'Hot, Honey Garlic, Teriyaki, Sweet Chilli, BBQ, Salt & Pepper, Crispy',
            },
          ],
        },
      ],
    },
    {
      id: 'dessert-menu',
      title: 'Dessert Menu',
      type: 'items',
      image: DesertMenu,
      items: [
        {
          category: 'Sweet Treats',
          dishes: [
            { name: 'Colossal Carrot Cake', price: '7.00' },
            { name: 'Deep Apple Pie', price: '7.00' },
            { name: 'Chocolate Fudge Cake', price: '6.00' },
            { name: 'Salted Caramel Cheesecake', price: '7.00' },
            { name: 'French Cream Cheesecake', price: '7.00' },
            { name: 'Banana Cream Pie', price: '6.00' },
          ],
        },
      ],
    },
    {
      id: 'liquor-menu',
      title: 'Liquor',
      type: 'items',
      image: Liquor,
      items: [
        {
          category: 'Liquor',
          dishes: [
            { name: 'Domestic Beer', price: '7.00' },
            { name: 'Premium Beers', price: '7.50' },
            { name: 'Hi-Balls', price: '7.00' },
            { name: 'Cocktails', price: '8.00' },
            { name: 'House Wine', price: '6.50' },
            { name: 'Local Wine', price: '6.50' },
          ],
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [pdfExpanded, setPdfExpanded] = useState(false);

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % menuCategories.length);
    setPdfExpanded(false);
  };

  const prevCategory = () => {
    setActiveCategory(
      (prev) => (prev - 1 + menuCategories.length) % menuCategories.length
    );
    setPdfExpanded(false);
  };

  const currentCategory = menuCategories[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h5 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
            Discover Our Menu
          </h5>
          <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg">
            Explore our carefully curated selection of dishes and specials
          </p>
        </div>

        <div className="relative">
          {!pdfExpanded && (
            <div className="flex justify-between items-center mb-6 sm:hidden">
              <button
                onClick={prevCategory}
                className="bg-white p-2.5 rounded-full shadow-lg hover:bg-gray-50 transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-bold text-xl text-yellow-500">
                {currentCategory.title}
              </span>
              <button
                onClick={nextCategory}
                className="bg-white p-2.5 rounded-full shadow-lg hover:bg-gray-50 transition-all active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                {currentCategory.type === 'pdf' ? (
                  <RenderPDFSection
                    category={currentCategory}
                    pdfExpanded={pdfExpanded}
                    setPdfExpanded={setPdfExpanded}
                  />
                ) : (
                  <RenderMenuItems category={currentCategory} />
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {!pdfExpanded && (
            <>
              <button
                onClick={prevCategory}
                className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white p-4 rounded-full shadow-xl hover:bg-gray-50 transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextCategory}
                className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white p-4 rounded-full shadow-xl hover:bg-gray-50 transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {!pdfExpanded && (
          <div className="flex justify-center gap-2 sm:gap-2 mt-6 sm:mt-8">
            {menuCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all transform hover:scale-110 ${
                  idx === activeCategory
                    ? 'bg-yellow-500 scale-110'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-12 sm:mt-16 flex items-center justify-center px-4 sm:px-6">
        <img
          src={PizzaDeal}
          alt="Pizza Special Deal"
          className="object-cover rounded-xl sm:rounded-2xl shadow-xl w-full lg:w-2/3 xl:w-1/2 transition-transform hover:scale-[1.02] duration-300"
        />
      </div>
    </div>
  );
};

MenuViewer.propTypes = {
  MenuFile: PropTypes.string.isRequired,
};

export default MenuViewer;
