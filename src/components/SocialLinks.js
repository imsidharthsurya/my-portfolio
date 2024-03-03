import React from 'react'


import { socialData } from '../utils/socialData';

const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {
                socialData.map((data)=>{
                    return <li key={data.id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300'+' '+data.style}>
                                <a href={data.href} target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                                    {data.child}
                                </a>
                            </li>
                })
            }
            
        </ul>
    </div>
  )
}

export default SocialLinks