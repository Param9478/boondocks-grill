import { Download } from 'lucide-react';
import PropTypes from 'prop-types';

const RenderPDFSection = ({
  handleDownloadPDF,
  pdfExpanded,
  setPdfExpanded,
  category,
}) => (
  <div className="relative w-full h-full max-h-[700px]">
    {pdfExpanded ? (
      <iframe
        src={`${category.pdfUrl}#toolbar=0`}
        className="w-full h-full min-h-[700px] border-none rounded-xl"
        title="Menu PDF"
      />
    ) : (
      <div className="relative h-full">
        <img
          src={category.previewImage}
          alt={category.title}
          className="w-full max-h-[700px] md:max-h-[500px] lg:max-h-[700px] object-cover rounded-xl"
          style={{ objectPosition: 'top' }}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center px-4 mb-6">
            {category.title}
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => setPdfExpanded(true)}
              className="bg-white text-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
            >
              View Menu
            </button>
            <button
              onClick={() => handleDownloadPDF(category.pdfUrl)}
              className="bg-yellow-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    )}
    {pdfExpanded && (
      <button
        onClick={() => setPdfExpanded(false)}
        className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-lg font-medium hover:bg-white transition-colors"
      >
        Close PDF
      </button>
    )}
  </div>
);

RenderPDFSection.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pdfUrl: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }).isRequired,
  pdfExpanded: PropTypes.bool.isRequired,
  setPdfExpanded: PropTypes.func.isRequired,
  handleDownloadPDF: PropTypes.func.isRequired,
};

export default RenderPDFSection;
