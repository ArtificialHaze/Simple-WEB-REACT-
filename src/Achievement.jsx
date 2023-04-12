import React from 'react';
import { SlGraduation, SlPeople } from "react-icons/sl";
import { FiVideo } from "react-icons/fi";

const achievementImage='';


const Achievement = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className="md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2">
            <div className='flex flex-col justify-center'>
                <h1 className='md:leading-[72px] text-3xl font-semibold'>Lorem ipsum dolor sit amet <span className='text-[#20b486]'>
                consectetur</span> adipisicing.</h1>
                <p className='text-lg text-gray-900'>Lorem ipsum dolor sit.</p>
                <div className='grid grid-cols-2 py-16'>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#e9f8f3] rounded-xl'>
                            <SlGraduation size={30} style={{color:'#1a906b'}} />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>300</h1>
                            <p className='text-[#6d737a]'>Lorem, ipsum.</p>
                        </div>
                    </div>
                      <div className='py-6 flex'>
                        <div className='p-4 bg-[#ffc27a] rounded-xl'>
                            <SlGraduation size={30} style={{color:'#ffc27a'}} />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>10,000+</h1>
                            <p className='text-[#6d737a]'>Lorem.</p>
                        </div>
                    </div>
                      <div className='py-6 flex'>
                        <div className='p-4 bg-[#ffc27a] rounded-xl'>
                            <FiVideo size={30} style={{color:'#ffc27a'}} />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>300</h1>
                            <p className='text-[#6d737a]'>Lorem, ipsum.</p>
                        </div>
                    </div>
                      <div className='py-6 flex'>
                        <div className='p-4 bg-[lightpink] rounded-xl'>
                            <SlGraduation size={30} style={{color:'lightpink'}} />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>20,000+</h1>
                            <p className='text-[#6d737a]'>Lorem ipsum, lorem.</p>
                        </div>
                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#f0f7ff] rounded-xl'>
                            <SlPeople size={30} style={{color:'lightblue'}} />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>100,000+</h1>
                            <p className='text-[#6d737a]'>Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
                <img src={achievementImage} alt="Achievement Image" className='m-auto md:order-last order-first' />
        </div>
    </div>
  )
}

export default Achievement