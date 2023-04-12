import React, { useState } from 'react'

const logoUrl='';
const lockIcon='';
const hamburgerMenuIcon='';
const closeIcon=''

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className="md:max-w-[1480px] max-w-[600px] w-full h-full flex justify-between items-center m-auto">
            <img src={logoUrl} alt="Logo" className='h-[25px]'/>
            <div className="hidden md:flex items-center">
                <ul className='flex gap-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Prices</li>
                </ul>
            </div>
            <div className='hidden md:flex'>
                <button className='flex justify-between bg-transparent items-center px-6 gap-2'><img src={lockIcon} alt="Lock Icon" /> Login</button>
                <button className='bg-[#20b486] px-8 py-3 rounded-md text-white font-bold'>Sign up</button>
            </div>
            <div className='md:hidden cursor-pointer' onClick={()=>setIsToggled(prev=>!prev)}>
                <img src={isToggled ? closeIcon : hamburgerMenuIcon} alt="Menu Bars" />
            </div>
        </div> 
        <div className={isToggled ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden' : 'hidden'}>
            <ul>
                <li className='p-4 hover:bg-gray-100 cursor-pointer'>Home</li>
                <li className='p-4 hover:bg-gray-100 cursor-pointer'>About</li>
                <li className='p-4 hover:bg-gray-100 cursor-pointer'>Support</li>
                <li className='p-4 hover:bg-gray-100 cursor-pointer'>Platform</li>
                <li className='p-4 hover:bg-gray-100 cursor-pointer'>Prices</li>
                <div className='flex flex-col my-4 gap-4'>
                    <button className='border border-[#20b486] flex justify-center bg-transparent items-center px-6 gap-2 py-4'><img src={lockIcon} alt="Lock Icon" /> Login</button>
                    <button className='bg-[#20b486] px-8 py-5 rounded-md text-white font-bold'>Sign up</button>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar