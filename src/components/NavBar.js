import React from 'react'
import {FaBars,FaTimes} from "react-icons/fa"

const NavBar = () => {
  return (
    <div className='flex px-4 justify-between items-center w-full h-20 text-white fixed bg-black'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Sidharth Surya</h1>
        </div>
        <ul className='flex'>
            <li className='px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>Home</li>
        </ul>
    </div>
  )
}

export default NavBar