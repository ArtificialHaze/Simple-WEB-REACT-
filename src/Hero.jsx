import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';


const heroImage='';
 

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className="md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2">
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20b486] font-medium'>Lorem, ipsum dolor.</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Lorem ipsum dolor sit amet <span className='text-[#20b486]'>
                consectetur</span> adipisicing.</h1>
                <p className='py-2 text-lg text-gray-900'>Lorem ipsum dolor sit.</p>
                <form action="#" className='bg-white border max-w-[700px] p-4 input-bx-shadow rounded-md flex justify-between'>
                    <input type="text" className='bg-white' placeholder='What do you want to learn?' />
                    <button>
                      <AiOutlineSearch size={20} className="icon" style={{color:'#000'}}/>
                    </button>
                </form>
            </div>
            <img src={heroImage} alt="Hero Image" className='md:order-last order-first' />
        </div>
    </div>
  )
}

export default Hero