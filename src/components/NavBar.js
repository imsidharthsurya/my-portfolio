import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { links } from '../utils/headerData'
import {Link} from "react-scroll"

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
                    return <li key={link.id} className='px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                            <Link to={link.link} smooth duration={500}>{link.link}</Link>
                        </li>
                })
            }
            
        </ul>

        {/* md:hidden b/c on screen larger than medium we don't want to show mobile navbar & can't toggle value so it won't show */}
        <div onClick={()=>setShowNavBar(!showNavBar)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
           {showNavBar?<FaTimes size={30}/>:<FaBars size={30} />} 
        </div>

        {/* since show the navbar items on center only if show navbar is true */}
        {showNavBar && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            
            {
                links.map((link)=>{
                    return <li key={link.id} className='capitalize cursor-pointer px-4 py-6 text-4xl'>
                        <Link onClick={()=>setShowNavBar(!showNavBar)} to={link.link} smooth duration={500}>{link.link}</Link>
                    </li>
                })
            }
            
        </ul>}
        
    </div>
  )
}

export default NavBar