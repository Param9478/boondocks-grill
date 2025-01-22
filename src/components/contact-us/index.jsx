import Header from '../header';
import GoogleMap from './GoogleMap';
import ReservationSection from './reservationSection';
import header from '../../assets/header.webp';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Contact Us"
        content="We'd love to hear from you! Please don't hesitate to reach out to us with any questions, comments, or concerns – we're here to help."
        imgSrc={header}
        css="no-wrap"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          <ReservationSection />
          <ContactForm />
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}
