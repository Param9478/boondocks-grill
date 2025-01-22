import Header from '../header';
import OurStory from './ourStory';
import header from '../../assets/header.webp';

// import OurTeam from './ourTeam'

export default function AboutUs() {
  return (
    <div className="mb-5">
      <Header
        title="About Us"
        content="Discover the Charm of The Boondocks Grill"
        imgSrc={header}
        fullWidth
      />
      <OurStory />
      {/* <OurTeam /> */}
    </div>
  );
}
