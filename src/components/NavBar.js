import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { links } from '../utils/headerData'

const NavBar = () => {
    // initially the nav item will be hidden by default
    const [showNavBar,setShowNavBar]=useState(false);

  return (
    <div className='flex px-4 justify-between items-center w-full h-20 text-white fixed bg-black'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Sidharth Surya</h1>
        </div>
        <ul className='hidden md:flex'>
            {
                links.map((link)=>{
                    return <li key={link.id} className='px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>{link.link}</li>
                })
            }
            
        </ul>
        <div onClick={()=>setShowNavBar(!showNavBar)} className='cursor-pointer pr-4 z-10 text-gray-500'>
           {showNavBar?<FaTimes size={30}/>:<FaBars size={30} />} 
        </div>
    </div>
  )
}

export default NavBar