import React from 'react'
import Card from './Card'
import Slider from 'react-slick'
import { courses } from './courses'

const Courses = () => {
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
    <div className='w-full bg-[#e9f8f8] py-32'>
        <div className="md:max-w-[1480px] m-auto max-w-[600px]">
            <h1 className='text-3xl py-3 font-bold'>Popular <span className='text-[#20b486]'>
                Courses</span>
            </h1>
            <p className='text-[#6d737a]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, nihil?</p>
           <Slider {...settings}>
              {courses.map((course,i)=>{
                <Card course={course} key={i}/>
              })}
              {/* REMOVE LATER */}
                <Card/>
                <Card/>
                <Card/>
                <Card/>
           </Slider>
        </div>
    </div>
  )
}

export default Courses