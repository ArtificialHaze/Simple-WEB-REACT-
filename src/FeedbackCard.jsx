import React from 'react'

const randomImage='';
const quotationMark='';

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <img src={randomImage} alt="Random User Image" />
            <div>
                <h1>Jenifer Lopez</h1>
                <p>UX/UI Designer</p>
            </div>
            </div>
                <img className='h-8' src={quotationMark} alt="Quotation Mark" />
        </div>
        <div className='py-8'>
            <h3 className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate praesentium porro, ullam deserunt eius!</h3>
        </div>
    </div>
  )
}

export default FeedbackCard