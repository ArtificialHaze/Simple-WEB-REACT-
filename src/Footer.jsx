import React from 'react';
import {FaFacebook,FaTwitter,FaYoutube} from 'react-icons/fa';

const logoUrl='';


const Footer = () => {
  return (
     <div className='w-full bg-[#fff] py-24'>
        <div className="md:max-w-[1480px] gap-8 max-w-[600px] max-[780px]:grid-cols-2 m-auto grid md:grid-cols-5">
            <div className='col-span-2'>
                <img src={logoUrl} alt="Logo" className='h-[25px]'/>
                <h3 className='text-2xl font-bold mt-10'>Contact</h3>
                <h3 className='py-2 text-[#6d737a]'>Call: +995 555 55 55 55</h3>
                <h3 className='py-2 text-[#6d737a]'>Address: Lorem, <br /> ipsum dolor. </h3>
                <h3 className='py-2 text-[#6d737a]'>Email: lore4@lorem.com</h3>
                <div className='flex gap-4 py-4'>
                    <div className='p-4 bg-[#e9f8f3] rounded-xl'>
                        <FaFacebook style={{color:'#4dc39e'}} size={25}/>
                    </div>
                    <div className='p-4 bg-[#e9f8f3] rounded-xl'>                   
                        <FaTwitter style={{color:'#4dc39e'}} size={25}/>
                     </div>
                    <div className='p-4 bg-[#e9f8f3] rounded-xl'>                  
                        <FaYoutube style={{color:'#4dc39e'}} size={25}/>
                      </div> 
                </div>              
            </div>
            <div>
                <h3 className='text-2xl font-bold'>Explore</h3>
                <ul className='py-6 text-[#6d737a]'>
                    <li className='py-2'>Home</li>
                    <li className='py-2'>About</li>
                    <li className='py-2'>BLOG</li>
                    <li className='py-2'>Contact</li>
                </ul>
            </div>
             <div>
                <h3 className='text-2xl font-bold'>Category</h3>
                <ul className='py-6 text-[#6d737a]'>
                    <li className='py-2'>Home</li>
                    <li className='py-2'>About</li>
                    <li className='py-2'>BLOG</li>
                    <li className='py-2'>Contact</li>
                </ul>
            </div>
             <div className='max-[780px]:col-span-2'>
                <h3 className='text-2xl font-bold'>Subscribe</h3>
                <h3 className='py-2 text-[#6d737a]'>Lorem, ipsum dolor.</h3>
                <form action="#" className='py-4'>
                    <input type="text" className='bg-[#faf3f4] p-4 w-full rounded' placeholder='Email..'/>
                    <button className='max-[780px]:w-full my-4 bg-[#20b486] px-5 py-3 rounded-md text-white font-medium'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer