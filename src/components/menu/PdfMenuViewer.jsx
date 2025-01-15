import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Download } from 'lucide-react';
import './style.css';

const defaultSections = [
  { id: 1, title: 'Starters & Appetizers', scrollPage: 0 },
  { id: 2, title: 'Main Courses', scrollPage: 0 },
  { id: 3, title: 'Pizza', scrollPage: 1 },
  { id: 4, title: 'Drinks & Beverages', scrollPage: 1 },
];

const PDFMenuViewer = ({ pdfFile, sections = defaultSections }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardDimensions = () => {
    const baseWidth = Math.min(500, viewportSize.width * 0.8);
    const baseHeight = baseWidth * 1.4;

    return {
      normal: {
        width: baseWidth,
        height: baseHeight,
      },
      selected: {
        width: Math.min(600, viewportSize.width * 0.9),
        height: Math.min(800, viewportSize.height * 0.8),
      },
    };
  };

  const handleSectionClick = (id) => {
    setSelectedSection(selectedSection === id ? null : id);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'menu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const dimensions = getCardDimensions();

  return (
    <div className="w-full min-h-screen pb-20 pt-12 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Content Header */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-12 text-center">
        <div className="flex-row items-center justify-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our Menu
          </h2>
          <p className="text-sm py-4 text-gray-600">
            Click on any section to expand and explore more details
          </p>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Menu
          </button>
        </div>
      </div>

      <div className="relative w-full mx-auto px-4 sm:px-8">
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/50">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        )}

        <div className="relative min-h-[calc(100vh-8rem)] flex items-start justify-center">
          <AnimatePresence>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                layout
                initial={{
                  // x: viewportSize.width > 640 ? index * 20 : 0,
                  // y: viewportSize.width > 640 ? index * 20 : index * 0,
                  scale: 1,
                  opacity: 1,
                }}
                animate={{
                  x:
                    selectedSection === section.id
                      ? 0
                      : viewportSize.width > 640
                        ? index * (viewportSize.width * 0.05)
                        : 0,
                  y:
                    selectedSection === section.id
                      ? 0
                      : viewportSize.width > 640
                        ? index * (viewportSize.height * 0.05)
                        : index * 60,
                  scale: selectedSection === section.id ? 1.05 : 1,
                  opacity:
                    selectedSection && selectedSection !== section.id ? 0.5 : 1,
                  zIndex:
                    selectedSection === section.id
                      ? 50
                      : sections.length - index,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute cursor-pointer"
                style={{
                  touchAction: 'pan-x pan-y',
                }}
              >
                <motion.div
                  className="relative"
                  onClick={() => handleSectionClick(section.id)}
                >
                  <motion.div
                    className="bg-white rounded-lg shadow-xl overflow-hidden ring-1 ring-black/5"
                    layout
                    initial={{
                      width: dimensions.normal.width,
                      height: dimensions.normal.height,
                    }}
                    animate={{
                      width:
                        selectedSection === section.id
                          ? dimensions.selected.width
                          : dimensions.normal.width,
                      height:
                        selectedSection === section.id
                          ? dimensions.selected.height
                          : dimensions.normal.height,
                    }}
                  >
                    <div className="w-full h-full relative overflow-hidden">
                      <div className="absolute inset-0">
                        <iframe
                          src={`${pdfFile}#page=${section.scrollPage + 1}&toolbar=0&navpanes=0&scrollbar=0`}
                          className="w-full h-full border-none"
                          onLoad={handleIframeLoad}
                          title={`Menu Section - ${section.title}`}
                          style={{
                            pointerEvents:
                              selectedSection === section.id ? 'auto' : 'none',
                            height: '100vh', // Ensure it takes full viewport height on mobile
                            width: '100%', // Ensure it takes full width
                            overflowY: 'auto', // Allow scrolling within iframe
                            overflowX: 'hidden', // Prevent horizontal scrolling
                          }}
                        />
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 backdrop-blur-sm"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: selectedSection === section.id ? 1 : 0.8,
                      }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {section.title}
                      </h3>
                      {section.description && (
                        <p className="text-xs sm:text-sm mt-1 text-gray-200">
                          {section.description}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Info */}
    </div>
  );
};

PDFMenuViewer.propTypes = {
  pdfFile: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      scrollPage: PropTypes.number.isRequired,
      description: PropTypes.string,
    })
  ),
};

export default PDFMenuViewer;
