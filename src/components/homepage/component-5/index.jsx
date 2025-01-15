import ReviewCard from './reviewCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Component5 = () => {
  const reviewerImages = [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review:
        "I took my niece here for dinner tonight, it was absolutely packed! To be fair, it's a Friday night. We managed to get a table quickly, menu and drinks in no time. The food was hot and delicious, service was great even being so busy. Highly recommend!",
      name: 'Brittney Thorburn',
      date: 'a years ago',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review:
        'Great family restaurant. FOod was amazing and service was great. Went here twice while I was in town. It was always the place to go to when I lived here years ago. Owners are awesome people.',
      name: 'Hanan',
      date: '3 years ago',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review: `I'm giving it a 5 star for 2 reasons. 
1. The staff are so friendly and nice. Always coming ot check if you're okay and if you need anything. It's not like some restaurants where you have to call the staff just to get there attention.
2. The food I had was good. I had the pepper steak and my dad had the chicken mushroom fettuccine and it was really good.
Good experience in small town High Prairie`,
      name: 'Andrew Achoba',
      date: '2 years ago',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review: `Real Food!
        The turkey wrap had real turkey meat. The lettuce and tomato and the rest of the rock was all very fresh. The potato bacon soup had real potatoes and real bacon and was incredibly good. 
        You Gotta Eat Here!`,
      name: 'Donald Stone',
      date: '6 years ago',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review: `First time I have ever been to High Prairie, I stopped here for lunch. The restaurant was clean and welcoming. The staff were prompt and friendly. I had the lunch special (crispy chicken dill wrap with fries and gravy). Super impressive gravy and dill sauce in the wrap! THe portion was generous but not over the top, which I appreciate. Overall a great experience and I will definitely be stopping in again on my next trip.`,
      name: 'Chelsey Deveau',
      date: '2 years ago',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <div className="relative mt-8">
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Background"
          className="object-cover h-80 w-full brightness-50"
        />
        {/* Text Content */}
        <div className="absolute text-center sm:text-left top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20">
          <div className="sm:m-0 m-auto">
            <h1 className="lg:text-3xl text-2xl w-full lg:mt-8 mt-12">
              What They Say
            </h1>
          </div>
        </div>
      </div>
      {/* Review Cards */}
      <div className="max-w-6xl m-auto -mt-16 px-4 pb-12">
        <Slider {...settings}>
          {reviewerImages.map((data, index) => (
            <div key={index} className="px-3 py-2">
              <ReviewCard reviewerData={data} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Component5;
