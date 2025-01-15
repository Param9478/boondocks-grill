import Header from '../header';
import OurStory from './ourStory';
// import OurTeam from './ourTeam'

export default function AboutUs() {
  return (
    <div className="mb-5">
      <Header
        title="About Us"
        content="Discover the Charm of The Boondocks Grill"
        imgSrc="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fullWidth
      />
      <OurStory />
      {/* <OurTeam /> */}
    </div>
  );
}
