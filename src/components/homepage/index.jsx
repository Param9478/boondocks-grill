import Header from '../header';
import Component1 from './component-1';
// import Menu from './component-2'
// import Component3 from './component-3'
// import Component4 from './component-4'
import Component5 from './component-5';

export default function Homepage() {
  return (
    <div className="mb-5">
      <Header
        title="Welcome to the Boondocks Grill"
        content="Join us for a warm and inviting dining experience, where the food
            and memories are always exceptional."
        imgSrc="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Component1 />
      {/* <Menu /> */}
      {/* <Component3 /> */}
      {/* <Component4 /> */}
      <Component5 />
    </div>
  );
}
