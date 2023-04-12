import React from 'react';

const ctaImage='';

const CTA = () => {
  return (
    <div className='w-full bg-[#e9f8f3] py-24'>
        <div className="md:max-w-[1480px] gap-8 max-w-[600px] border items-center m-auto grid md:grid-cols-2">
            <img src={ctaImage} alt="CTA Image" className='w-[650px] mx-auto' />
            <div>
                <h1 className='py-2 text-3xl font-semibold'>Lorem ipsum dolor sit amet <span className='text-[#20b486]'>
                consectetur</span> adipisicing.</h1>
                <p className='py-2 text-lg text-gray-900'>Lorem ipsum dolor sit.</p>
                <button className='max-[780px]:w-full my-4 bg-[#20b486] px-8 py-3 rounded-md text-white font-bold'>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default CTA