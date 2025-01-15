import Header from '../header'
import OurStory from './ourStory'
// import OurTeam from './ourTeam'

export default function AboutUs() {
  return (
    <div className='mb-5'>
      <Header
        title="About Us"
        content="Discover the Charm of The Boondocks Grill"
        imgSrc="https://images.unsplash.com/photo-1511978293554-7b92f19bd77d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fullWidth
      />
      <OurStory />
      {/* <OurTeam /> */}
    </div>
  )
}
