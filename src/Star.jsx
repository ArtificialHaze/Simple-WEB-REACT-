import React from 'react'

const starImage='';
const grayStarImage='';

const Star = ({rating}) => {
  return (
    <div className='flex items-center'>
        {[...Array(rating)].map(()=>{
            <img src={starImage} alt="Star" className='w-5 h-5 text-yellow-400'/>
        })}
        {[...Array(5-rating)].map(()=>{
            <img src={grayStarImage} alt="Star" className='w-5 h-5 text-gray-300'/> 
        })}
        <p className='ml-2'>(15)</p>
    </div>
  )
}

export default Star