import React from 'react'
import mypic from "../assets/mypic1.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>A dynamic developer, passionate about crafting cutting-edge solutions. With a robust background in the MERN (MongoDB, Express.js, React.js, Node.js) stack, chat bots and IVR bots.</p>
        
            <div>
                <button>Portfolio <span><MdOutlineKeyboardArrowRight/></span></button>
            </div>
        </div>
        <div>
            <img src={mypic} alt='my-profile' className='rounded-2xl mx-auto w-2/3 md:w-96'/>
        </div>
       </div>
    </div>
  )
}

export default Home