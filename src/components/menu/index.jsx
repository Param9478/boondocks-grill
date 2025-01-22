import Header from '../header';
// import PDFMenuViewer from './PdfMenuViewer';
import MenuFile from '../../assets/menu-image.pdf';
import MenuViewer from './MenuViewer';
import header from '../../assets/header.webp';

export default function Menu() {
  return (
    <div>
      <Header
        title="Our Menu"
        content="Explore our carefully curated selection of dishes"
        imgSrc={header}
        fullWidth
      />
      {/* <PDFMenuViewer pdfFile={MenuFile} /> */}
      <MenuViewer MenuFile={MenuFile} />
    </div>
  );
}
