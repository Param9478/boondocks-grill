import { motion } from 'framer-motion';
import BoondocksCard from './boondocksCard';
import family from '../../../assets/component1/family.webp';
import menu from '../../../assets/component1/menu-test.webp';
import memorable from '../../../assets/component1/memorable.webp';

export default function Component1() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="relative">
      {/* Decorative separator between header and this component */}
      <div className="h-16 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
        {/* Diagonal stripes accent */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(234, 179, 8, 0.2) 10px, rgba(234, 179, 8, 0.2) 20px)',
              backgroundSize: '28.28px 28.28px',
            }}
          ></div>
        </div>

        {/* Center accent line */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 bg-yellow-500/60"></div>

        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/30"
            style={{
              width: 4 + Math.random() * 4,
              height: 4 + Math.random() * 4,
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <motion.div
        className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mx-auto max-w-7xl px-4 pt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex lg:flex-row flex-col gap-8 lg:gap-12">
            {/* Text Section */}
            <motion.div
              className="flex-1 text-center lg:text-left lg:w-1/4 md:w-3/4 m-auto"
              variants={itemVariants}
            >
              <div className="lg:w-3/4 w-full m-auto">
                <motion.h1
                  className="text-3xl font-bold mb-6 text-gray-800"
                  variants={itemVariants}
                >
                  <span className="text-yellow-500">Exceptional</span> Dining
                  Experience
                </motion.h1>

                <motion.div
                  className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-6 mx-auto lg:mx-0 w-2/3"
                  variants={itemVariants}
                />

                <motion.p
                  className="text-gray-700 font-light text-sm md:text-base text-left px-3 lg:p-0"
                  variants={itemVariants}
                >
                  Step into The Boondocks Grill, and you&apos;ll be transported
                  to a warm, inviting space where rustic charm meets modern
                  comfort. Our commitment to providing an exceptional dining
                  experience is reflected in our farm-to-table ingredients,
                  attentive service, and thoughtfully crafted menu. Whether
                  you&apos;re celebrating with family, catching up with friends,
                  or enjoying a romantic dinner, we create moments worth
                  savoring.
                </motion.p>
              </div>

              <motion.div className="mt-12 sm:mt-16" variants={itemVariants}>
                <BoondocksCard
                  // imgSrc="https://i.pinimg.com/736x/f0/8a/1e/f08a1e99e4921c20be37a35b9eb2986c.jpg"
                  imgSrc={family}
                  title="Family-friendly Atmosphere"
                  context="The Boondocks Grill offers a warm, inviting atmosphere, perfect for family gatherings or special celebrations. With our spacious seating and attentive staff, every visit becomes a cherished memory. Children are always welcome, with specially curated menu options that delight our youngest guests while pleasing discerning parents."
                  featured={true}
                />
              </motion.div>
            </motion.div>

            {/* Card Section */}
            <motion.div className="flex-1" variants={itemVariants}>
              <motion.div
                variants={itemVariants}
                // whileHover={{
                //   y: -5,
                //   boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                // }}
                // transition={{ duration: 0.3 }}
              >
                <BoondocksCard
                  imgSrc={menu}
                  // imgSrc="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="Varied Menu Options"
                  context="The Boondocks Grill’s menu caters to all tastes, offering hearty comfort food and lighter, healthy choices. Every dish is made with the freshest ingredients, bursting with flavor and nutrition. Guests can enjoy exploring new flavors or sticking to their classic favorites, ensuring a meal to remember for all."
                  featured={true}
                  imgPosition="50%"
                />
              </motion.div>

              <motion.div
                className="mt-8 sm:mt-12"
                variants={itemVariants}
                // whileHover={{
                //   y: -5,
                //   boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                // }}
                // transition={{ duration: 0.3 }}
              >
                <BoondocksCard
                  imgSrc={memorable}
                  // imgSrc="https://images.unsplash.com/flagged/photo-1564697259787-6fc88465d327?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="Memorable Dining Experience"
                  context="At The Boondocks Grill, we believe dining is more than just a meal—it's an experience to be treasured. Our cozy ambiance, complemented by soft lighting and tasteful décor, sets the perfect backdrop for life's special moments. From first dates to milestone celebrations, we pride ourselves on creating the ideal setting for memories that last a lifetime."
                  imgPosition="50%"
                  featured={true}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Background accents */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0.2,
              scale: 0.2,
            }}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: `${Math.random() * 2 + 1}vw`,
              height: `${Math.random() * 2 + 1}vw`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
