import Header from '../header'
import GoogleMap from './locationMap'
import ReservationSection from './reservationSection'

export default function Contact() {
  return (
    <>
      <Header
        title="Contact Us"
        content="We’d love to hear from you! Please don’t hesitate to reach out to us with any questions, comments, or concerns – we’re here to help."
        imgSrc="https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        css="no-wrap"
      />
      <ReservationSection />
      <GoogleMap />
    </>
  )
}
