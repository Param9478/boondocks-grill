import Header from '../header';
import Component1 from './component-1';
import header from '../../assets/header.webp';
// import Menu from './component-2'
// import Component3 from './component-3'
// import Component4 from './component-4'
import Component5 from './component-5';
// import RestaurantHeader from './RestaurantHeader';

export default function Homepage() {
  return (
    <div>
      <Header
        title="Welcome to the Boondocks Grill"
        content="Located in High Prairie, Alberta, our cozy diner offers a spacious licensed Dine-In area along with Takeout, Delivery, Drive-Thru, and Online Ordering Services"
        imgSrc={header}
        isHomePage={true}
      />
      {/* <RestaurantHeader /> */}
      <Component1 />
      {/* <Menu /> */}
      {/* <Component3 /> */}
      {/* <Component4 /> */}
      <Component5 />
    </div>
  );
}
