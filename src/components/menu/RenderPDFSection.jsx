import { Download, X } from 'lucide-react';
import PropTypes from 'prop-types';

const handleDownloadPDF = (pdfUrl) => {
  window.open(pdfUrl, '_blank');
};

const RenderPDFSection = ({ category, pdfExpanded, setPdfExpanded }) => (
  <div className="relative w-full h-full">
    {pdfExpanded ? (
      <div className="fixed inset-0 z-50 bg-gray-900/95 overflow-y-auto">
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-5xl bg-white rounded-xl overflow-hidden relative mx-auto">
            <button
              onClick={() => setPdfExpanded(false)}
              className="absolute top-4 right-4 bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-all shadow-lg z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full overflow-hidden">
              <iframe
                src={`${category.pdfUrl}#toolbar=0`}
                className="w-full h-[80vh] border-none mx-auto"
                title="Menu PDF"
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="relative group">
        <img
          src={category.previewImage}
          alt={category.title}
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ objectPosition: 'top' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 group-hover:to-black/30 transition-all rounded-xl">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 tracking-tight">
              {category.title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => setPdfExpanded(true)}
                className="bg-white text-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-all transform hover:-translate-y-1 shadow-lg text-sm sm:text-base"
              >
                View Menu
              </button>
              <button
                onClick={() => handleDownloadPDF(category.pdfUrl)}
                className="bg-yellow-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
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
