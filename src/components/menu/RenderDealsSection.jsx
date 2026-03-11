import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Flame } from 'lucide-react';
import PropTypes from 'prop-types';

const RenderDealsSection = ({ categories }) => {
    const [activePage, setActivePage] = useState(0);

    const current = categories[activePage];

    const dealIcons = ['🍝', '🍕', '🫔', '🍗'];
    const pizzaIcons = ['🧀', '🍕', '🍕', '🍕', '🍕', '⭐'];

    const isRedPage = activePage === 0;
    const accentColor = isRedPage ? '#C0202A' : '#3B6E2E';
    const accentBorder = isRedPage ? 'border-red-200' : 'border-green-200';

    return (
        // Outer wrapper div te add karo
        <div className="relative w-full overflow-hidden bg-white rounded-xl" style={{ height: '653px' }}>

            {/* Tab switcher */}
            <div className="flex border-b border-gray-100">
                {categories.map((cat, i) => (
                    <button
                        key={cat.id}
                        onClick={() => setActivePage(i)}
                        className={`relative flex-1 py-4 px-4 text-sm font-semibold transition-all duration-300 ${i === activePage ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        <span
                            className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                            style={{
                                backgroundColor: i === 0 ? '#C0202A' : '#3B6E2E',
                                opacity: i === activePage ? 1 : 0,
                            }}
                        />
                        <span className="mr-1.5">{i === 0 ? '🍗' : '🍕'}</span>
                        {cat.title}
                    </button>
                ))}
            </div>

            {/* Main content - no AnimatePresence to avoid exit animation hiding content */}
            <div className="grid md:grid-cols-2 gap-0 h-[600px]">

                {/* LEFT image */}
                {/* LEFT image */}
                <div className="relative overflow-hidden group">
                    <img
                        src={current.image}
                        alt={current.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    // object-cover object-top hatao, object-contain lagao
                    />

                    {/* Same overlay as RenderMenuItems */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 group-hover:from-black/70 group-hover:to-black/30 transition-all flex items-center justify-center">
                        <div className="text-center p-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                <span className="text-yellow-500">
                                    {current.title.split(' ')[0]}
                                </span>
                                {current.title.split(' ').length > 1 && (
                                    <span> {current.title.split(' ').slice(1).join(' ')}</span>
                                )}
                            </h2>
                            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-4 mx-auto w-2/3" />
                        </div>
                    </div>
                </div>

                {/* RIGHT cards */}
                <div className="p-5 md:p-6 overflow-y-auto h-full custom-scrollbar bg-gray-50/60 space-y-5">
                    {current.items.map((section, si) => (
                        <div key={`${activePage}-${si}`}>
                            <div className="flex items-center gap-2 mb-3">
                                <Flame className="w-4 h-4" style={{ color: accentColor }} />
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                                    {section.category}
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {section.dishes.map((dish, di) => {
                                    const icon = si === 0 ? (dealIcons[di] ?? '🍽️') : (pizzaIcons[di] ?? '🍕');
                                    return (
                                        <motion.div
                                            key={`${activePage}-${si}-${di}`}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: di * 0.05, duration: 0.2 }}
                                            whileHover={{ y: -2, boxShadow: '0 8px 24px -4px rgba(0,0,0,0.10)' }}
                                            className={`relative bg-white rounded-xl border ${accentBorder} p-4 transition-shadow duration-200 group/card overflow-hidden`}
                                        >
                                            <div
                                                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                                                style={{ backgroundColor: accentColor }}
                                            />
                                            <div className="flex items-start justify-between gap-3 pl-3">
                                                <div className="flex items-start gap-3 flex-1 min-w-0">
                                                    <span className="text-2xl mt-0.5 shrink-0">{icon}</span>
                                                    <div className="min-w-0">
                                                        <h4 className="font-bold text-gray-800 text-base leading-snug group-hover/card:text-yellow-600 transition-colors">
                                                            {dish.name}
                                                        </h4>
                                                        {dish.description && (
                                                            <p className="text-gray-500 text-sm mt-1 leading-relaxed whitespace-pre-line">
                                                                {dish.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div
                                                    className="shrink-0 text-white text-sm font-extrabold px-3 py-1.5 rounded-lg shadow-sm"
                                                    style={{ backgroundColor: accentColor }}
                                                >
                                                    ${dish.price}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <motion.a
                        href="https://boondocks2.popmenu.com/#menu?location=boondocks"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white text-sm shadow-md transition-all mt-2"
                        style={{ backgroundColor: accentColor }}
                    >
                        Order Now →
                    </motion.a>
                </div>
            </div>

            {/* Mobile dots */}
            <div className="flex justify-center gap-2 py-3 md:hidden">
                {categories.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActivePage(i)}
                        className={`rounded-full transition-all duration-300 ${i === activePage ? 'w-6 h-2.5' : 'w-2.5 h-2.5 bg-gray-300'
                            }`}
                        style={i === activePage ? { backgroundColor: accentColor } : {}}
                    />
                ))}
            </div>
        </div>
    );
};

RenderDealsSection.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    category: PropTypes.string.isRequired,
                    dishes: PropTypes.arrayOf(
                        PropTypes.shape({
                            name: PropTypes.string.isRequired,
                            price: PropTypes.string.isRequired,
                            description: PropTypes.string,
                        })
                    ).isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};

export default RenderDealsSection;