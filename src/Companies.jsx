import React from 'react';

const company01='';
const company02='';
const company03='';
const company04='';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className="md:max-w-[1480px] m-auto max-w-[600px]">
            <h1 className='text-center text-2xl font-bold text-[#536e96]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            <p className='text-center text-[#536e96] text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus libero, quaerat debitis aliquid exercitationem voluptas!</p>
            <div className='flex justify-center py-8 md:gap-8'>
                <img src={company01} alt="Company Logo" />
                <img src={company02} alt="Company Logo" />
                <img src={company03} alt="Company Logo" />
                <img src={company04} alt="Company Logo" />
            </div>

        </div>
    </div>
  )
}

export default Companies