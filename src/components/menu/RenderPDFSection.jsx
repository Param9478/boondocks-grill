import { motion } from 'framer-motion';
import { Download, X } from 'lucide-react';
import PropTypes from 'prop-types';

const RenderPDFSection = ({ category, pdfExpanded, setPdfExpanded }) => {
  // Animation variants matching Component1
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

  const handleDownloadPDF = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="relative w-full h-full">
      {pdfExpanded ? (
        <motion.div
          className="fixed inset-0 z-50 bg-gray-900/95 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <motion.div
              className="w-full max-w-5xl bg-white rounded-xl overflow-hidden relative mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
              <motion.button
                onClick={() => setPdfExpanded(false)}
                className="absolute top-4 right-4 bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-all shadow-lg z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
              <div className="w-full overflow-hidden">
                <iframe
                  src={`${category.pdfUrl}#toolbar=0`}
                  className="w-full h-[80vh] border-none mx-auto"
                  title="Menu PDF"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="relative group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          variants={containerVariants}
        >
          {/* Decorative floating particles */}
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

          <img
            src={category.previewImage}
            alt={category.title}
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
            style={{ objectPosition: 'top' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 group-hover:to-black/30 transition-all rounded-xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 tracking-tight"
                variants={itemVariants}
              >
                <span className="text-yellow-500">
                  {category.title.split(' ')[0]}
                </span>
                {category.title.split(' ').length > 1 && (
                  <span> {category.title.split(' ').slice(1).join(' ')}</span>
                )}
              </motion.h2>

              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-6 mx-auto w-2/3"
                variants={itemVariants}
              />

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.button
                  onClick={() => setPdfExpanded(true)}
                  className="bg-white text-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-all shadow-lg text-sm sm:text-base"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  View Menu
                </motion.button>
                <motion.button
                  onClick={() => handleDownloadPDF(category.pdfUrl)}
                  className="bg-yellow-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download PDF
                </motion.button>
              </div>
            </div>
          </div>

          {/* Diagonal stripes accent */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden opacity-20">
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
          <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 w-24 h-0.5 bg-yellow-500/60"></div>
        </motion.div>
      )}
    </div>
  );
};

RenderPDFSection.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    pdfUrl: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }).isRequired,
  pdfExpanded: PropTypes.bool.isRequired,
  setPdfExpanded: PropTypes.func.isRequired,
};

export default RenderPDFSection;
