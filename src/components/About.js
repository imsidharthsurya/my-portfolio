import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, atque a reprehenderit soluta repellendus delectus ipsa dolore mollitia vero dolorum impedit accusantium iste adipisci molestias veniam, quod quibusdam nihil autem id nostrum incidunt labore porro tenetur! Asperiores aperiam voluptatibus amet itaque cumque sapiente similique sint, neque quas voluptates odit nesciunt?
            </p>
            <br/>
            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus atque ipsa deleniti repellendus sed provident consectetur vero similique, esse earum impedit mollitia odio eaque in illo nostrum necessitatibus vel placeat sapiente blanditiis. Doloribus possimus, obcaecati commodi ea quibusdam aspernatur in, iure quas nostrum, provident voluptatum ipsa. Soluta molestias aliquam harum.</p>
        </div>
    </div>
  )
}

export default About