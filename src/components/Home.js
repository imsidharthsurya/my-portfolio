import React from 'react'
import mypic from "../assets/mypic1.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"
import Typewriter from 'typewriter-effect';

// const about=["Full Stack Developer","Chat/IVR Bot Developer","Programmer"]

const Home = () => {
  return (
    <div name="home" className='pt-56 md:pt-0 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hi, I'm Sidharth Surya👋🏼</h2>
            <p className='text-gray-500 py-8 max-w-md'><span className='text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'><Typewriter
              options={{
                strings: ['Full Stack Developer', 'Chat/IVR Bot Developer','Programmer'],
                autoStart: true,
                loop: true,
              }}
            /></span></p>
        
            <div className='mx-auto mb-10 md:mx-0 md:mb-0'>
                <Link to='portfolio' smooth duration={500} className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                    Portfolio <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={22}/></span>
                </Link>
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