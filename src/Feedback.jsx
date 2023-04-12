import React from 'react';
import Slider from 'react-slick';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]    
  };
 


  return (
    <div className='w-full bg-[#fff] py-32'>
        <div className="md:max-w-[1480px] m-auto max-w-[600px]">
            <h1 className='text-3xl py-3 font-bold'>Lorem <span className='text-[#20b486]'>
                Lorem, ipsum dolor.</span>
            </h1>
            <p className='text-[#6d737a]'>Lorem, Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Sed, nihil?</p>
           <Slider {...settings}>
                <FeedbackCard/>
                <FeedbackCard/>
                <FeedbackCard/>
           </Slider>
        </div>
    </div>
  )
}

export default Feedback