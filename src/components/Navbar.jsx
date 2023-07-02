import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch,AiFillTag} from "react-icons/ai";
import { BsFillCartFill,BsFillSaveFill} from "react-icons/bs";
import {TbTruckDelivery } from "react-icons/tb";
import {FaUserFriends,FaWallet } from "react-icons/fa";
import {MdHelp,MdFavorite } from "react-icons/md";


const Navbar = () => {
    const[nav,setNav]=useState(false)


  return (
    <div className='max-w-[1640px] px-4 lg:px-8 py-4 mx-auto flex justify-between'>
        {/* leftside */}
        <div className="flex  items-center">
            <div className='cursor-pointer' onClick={()=>setNav(!nav)}>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-3xl sm:text:2xl lg:text-3xl px-4 font-bold'>Tasty FOODS</h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full'>
                <p className='bg-black text-white p-2 rounded-full mr-2'>Delivery</p>
                <p className='p-2 rounded'>Pickup</p>
            </div>
        </div>

        {/* search input */}
        <div className='bg-gray-200 rounded-full flex items-center px-4 w-[200px] sm:w-[300px] lg:w-[400px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent outline-none w-[100%] ml-4 capitalize' type="text" name="" id="" placeholder='Search food' />
        </div>
        {/* shop cart */}
        <div className='bg-black text-white hidden md:flex items-center rounded-full p-2'>
            <BsFillCartFill className='mr-2' size={20}/>Cart
        </div>



        {/* mobile menubar */}
        {/* overlay */}

        {nav?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
        </div> : '' }
       
        {/* sidebar menu */}

        <div className={nav? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'} >

            <AiOutlineClose onClick={()=>setNav(!nav)} size={20} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='font-bold p-4'>Tasty FOODS</h2>

            <nav>
                <ul className='text-gray-800'>
                    <li className='flex items-center ml-4 py-4'><TbTruckDelivery size={20} className='mr-2'/>Orders</li>
                    <li className='flex items-center ml-4 py-4'><MdFavorite size={20} className='mr-2'/>Favorite</li>
                    <li className='flex items-center ml-4 py-4'><MdHelp size={20} className='mr-2'/>Help</li>
                    <li className='flex items-center ml-4 py-4'><FaWallet size={18} className='mr-2'/>Wallet</li>
                    <li className='flex items-center ml-4 py-4'><AiFillTag size={20} className='mr-2'/>Promotions</li>
                    <li className='flex items-center ml-4 py-4'><BsFillSaveFill size={18} className='mr-2'/>Best One</li>
                    <li className='flex items-center ml-4 py-4'><FaUserFriends size={20} className='mr-2'/>Invite friends</li>
                </ul>
            </nav>
            
        </div>

    </div>
    
  )
}

export default Navbar