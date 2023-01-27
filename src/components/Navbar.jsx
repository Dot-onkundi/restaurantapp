import React, {useState} from 'react'
import {BiMenuAltLeft} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdRestaurantMenu,MdCorporateFare,MdOutlineHelp,MdLocationOn} from 'react-icons/md'
import {BsSearch, BsFillCartFill, BsFillSuitHeartFill,BsFillGiftFill } from 'react-icons/bs'


const Navbar = () => {
    const[nav,setNav]=useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex  justify-between items-center p-4'>
        {/* left side */}
        <div className=" flex  items-center justify-between">
        <div onClick={()=>setNav(!nav)} className="cursor-pointer">
            <BiMenuAltLeft size={30}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl'> Bistro <span className='font-bold'> Eats</span></h1>
        {/* <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className='bg-black text-white rounded-full p-2'> Delivery</p>
            <p>Pickup </p>
            
        </div> */}
        </div>
        {/* search imput */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
            <BsSearch/>
            <input type="text" placeholder='Search Foods' className='bg-transparent p-2 w-full focus:outline-none' />

        </div>
        {/* Card Button */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full '> 
            <BsFillCartFill size={20} className='mr-2'/> Cart

        </button>
        {/* Mobile menu */}
        {/* Overlay */}
        {nav?<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-2">

</div>:''}
        
        {/* Sidedrwawermenu */}
        <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' :'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer '/>
            <h2 className='text-2xl p-4 sm:text-3xl lg:text-4xl'> Bistro <span className='font-bold'> Eats</span></h2>
            <nav>
                <ul className='flex flex-col py-4 text-gray-800'>
                    <li className='text-xl py-4 flex '> <TbTruckDelivery size={25} className='mr-4'/> Orders</li>
                    <li className='text-xl py-4 flex '> <MdRestaurantMenu size={25} className='mr-4 '/> Our Menu</li>
                    <li className='text-xl py-4 flex  '> <BsFillSuitHeartFill size={25} className='mr-4 animate-pulse'/> Favorites</li>
                    <li className='text-xl py-4 flex '> <BsFillGiftFill size={25} className='mr-4'/> Gifting</li>
                    <li className='text-xl py-4 flex '> <MdLocationOn size={25} className='mr-4'/> Locations</li>
                    <li className='text-xl py-4 flex '> <MdCorporateFare size={25} className='mr-4'/> Corporate</li>
                    <li className='text-xl py-4 flex '> <MdOutlineHelp size={25} className='mr-4'/> Help</li>
                </ul>
            </nav>




        </div>
        
        


    </div>
  )
}

export default Navbar