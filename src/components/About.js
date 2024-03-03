import React from 'react'

const About = () => {
  return (
    <div name="about" className='pt-56 md:pt-0 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-5'>
            I am currently employed as a Developer at IDFC FIRST BANK, where I'm dedicated to enhancing customer experiences and optimizing communication processes. Previously, as an Intern at Zoho Corporation, I contributed to building diverse plugins for monitoring customer's servers & systems.
            </p>
            <br/>
            <p className='text-xl'>
            Successfully completing numerous full-stack projects and creating multiple IVR & chat bots, I thrive on navigating intricate problems and embracing fresh challenges. Let's connect and explore the exciting intersections of technology! My commitment to staying ahead of the curve drives me to continuously explore emerging technologies. 🚀
            </p>
        </div>
    </div>
  )
}

export default About