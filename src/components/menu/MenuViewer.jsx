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
import Promotion from './Promotion';

const MenuViewer = ({ MenuFile }) => {
  const menuCategories = [
    {
      id: 'full-menu',
      title: 'Full Menu',
      type: 'pdf',
      pdfUrl: MenuFile,
      previewImage: menu,
      description: 'Our complete selection of appetizers, mains, and specials',
    },
    {
      id: 'takeout-special',
      title: 'Take Out Special',
      type: 'items',
      image: TakeoutSpecial,
      description: 'Perfect meal deals for enjoying at home',
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
      description: 'Sweet treats to complete your dining experience',
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
      description: 'Fine beverages to pair with your meal',
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
  const [showPromotion, setShowPromotion] = useState(true);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(234, 179, 8, 0.1) 10px, rgba(234, 179, 8, 0.1) 20px)',
            backgroundSize: '28.28px 28.28px',
          }}
        ></div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-400/20 pointer-events-none"
          style={{
            width: 4 + Math.random() * 6,
            height: 4 + Math.random() * 6,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h5 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
              <span className="text-yellow-500">Discover</span> Our Menu
            </h5>
          </motion.div>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto w-40 my-4"
            variants={itemVariants}
          />
          <motion.p
            className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore our carefully curated selection of dishes and specials,
            crafted with the freshest ingredients and passion
          </motion.p>
        </motion.div>

        <div className="relative">
          {!pdfExpanded && (
            <div className="flex justify-between items-center mb-6 sm:hidden">
              <button
                onClick={prevCategory}
                className="bg-white p-2.5 rounded-full shadow-lg hover:bg-gray-50 transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl text-yellow-500">
                  {currentCategory.title}
                </span>
                <span className="text-xs text-gray-500">
                  {activeCategory + 1}/{menuCategories.length}
                </span>
              </div>
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
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-yellow-100 relative">
                {!pdfExpanded && (
                  <div className="absolute top-3 left-3 z-10 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentCategory.title}
                  </div>
                )}
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
                className="hidden sm:flex sm:items-center sm:justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white p-4 rounded-full shadow-xl hover:bg-gray-50 transition-all hover:scale-110 group"
              >
                <span className="absolute right-full mr-2 bg-gray-800 text-white rounded-md py-1 px-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {
                    menuCategories[
                      (activeCategory - 1 + menuCategories.length) %
                        menuCategories.length
                    ].title
                  }
                </span>
                <ChevronLeft className="w-6 h-6 text-yellow-500" />
              </button>
              <button
                onClick={nextCategory}
                className="hidden sm:flex sm:items-center sm:justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white p-4 rounded-full shadow-xl hover:bg-gray-50 transition-all hover:scale-110 group"
              >
                <ChevronRight className="w-6 h-6 text-yellow-500" />
                <span className="absolute left-full ml-2 bg-gray-800 text-white rounded-md py-1 px-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {
                    menuCategories[(activeCategory + 1) % menuCategories.length]
                      .title
                  }
                </span>
              </button>
            </>
          )}
        </div>

        {!pdfExpanded && (
          <div className="flex flex-col items-center gap-2 mt-8 sm:mt-10">
            <div className="flex justify-center gap-2 sm:gap-3">
              {menuCategories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className="flex flex-col items-center group"
                >
                  <div
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all transform hover:scale-110 ${
                      idx === activeCategory
                        ? 'bg-yellow-500 scale-110'
                        : 'bg-gray-300'
                    }`}
                  />
                  <span
                    className={`text-xs mt-1 transition-all ${
                      idx === activeCategory
                        ? 'text-yellow-500 font-medium'
                        : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  >
                    {category.title}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 max-w-md text-center mt-3">
              {currentCategory.description}
            </p>
          </div>
        )}
      </div>

      {/* Promotion Section - Animated and Stylish */}
      <Promotion
        PizzaDeal={PizzaDeal}
        showPromotion={showPromotion}
        setShowPromotion={setShowPromotion}
      />

      {/* <AnimatePresence>
        {showPromotion && !pdfExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="mt-16 sm:mt-20 max-w-6xl mx-auto relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mx-4 sm:mx-6">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/90 to-yellow-800/80 z-10" />

              <img
                src={PizzaDeal}
                alt="Pizza Special Deal"
                className="object-cover w-full h-full min-h-64"
              />

              <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 sm:p-10 md:p-12">
                <div className="max-w-lg">
                  <div className="flex items-center mb-3">
                    <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                    <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                    <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                    <span className="ml-2 text-sm font-medium text-yellow-100">
                      Limited Time Offer
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-md">
                    Pizza & Wings Special Deal
                  </h3>

                  <p className="text-yellow-50 mb-6 drop-shadow-sm max-w-md">
                    Enjoy our Large 3-topping pizza with 10 wings of your choice
                    and 2 cans of pop - perfect for family night or game day!
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                      <span className="font-bold text-2xl">$35</span>
                      <span className="text-sm ml-1">only</span>
                    </div>

                    <button className="px-5 py-2 bg-white text-yellow-800 rounded-lg font-medium hover:bg-yellow-50 transition-colors flex items-center gap-2">
                      View Details <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>


              <button
                onClick={() => setShowPromotion(false)}
                className="absolute top-3 right-3 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 transition-colors"
                aria-label="Close promotion"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>


            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl" />
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

MenuViewer.propTypes = {
  MenuFile: PropTypes.string.isRequired,
};

export default MenuViewer;
