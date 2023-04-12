import React from 'react';
import CategoryCard from './CategoryCard';
import {BsVectorPen} from 'react-icons/bs';
import {TiHtml5} from 'react-icons/ti';
import {TiCss3} from 'react-icons/ti'


const Categories = () => {
  return (
    <div className='w-full bg-[#f0fbf7] py-24'>
        <div className="md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2">
            <h1 className='md:leading-[72px] text-3xl font-semibold'>Lorem ipsum dolor sit amet <span className='text-[#20b486]'>
            consectetur</span> adipisicing.</h1>
            <p className='text-lg text-gray-900'>Lorem ipsum dolor sit.</p>
            <div className='grid lg:grid-cols-4 grid-cols-2 py-12 gap-4'>
                <CategoryCard title={'Design'} icons={<BsVectorPen size={30}/>}/>
                <CategoryCard title={'HTML5'} icons={<TiHtml5 size={30}/>}/>
                <CategoryCard title={'CSS3'} icons={<TiCss3 size={30}/>}/>
                <CategoryCard title={'Design'} icons={<BsVectorPen size={30}/>}/>
                <CategoryCard title={'Design'} icons={<BsVectorPen size={30}/>}/>
                <CategoryCard title={'Design'} icons={<BsVectorPen size={30}/>}/>
                <CategoryCard title={'Design'} icons={<BsVectorPen size={30}/>}/>
                <CategoryCard title={'Design'} icons={<BsVectorPen size={30}/>}/>
                <CategoryCard title={'Design'} icons={<BsVectorPen size={30}/>}/>
                <CategoryCard title={'Design'} icons={<BsVectorPen size={30}/>}/>
                <CategoryCard title={'Design'} icons={<BsVectorPen size={30}/>}/>
                <CategoryCard title={'Design'} icons={<BsVectorPen size={30}/>}/>
            </div>
        </div>
    </div>
  )
}
 
export default Categories