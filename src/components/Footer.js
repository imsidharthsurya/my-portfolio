import React from 'react'
import { socialData } from '../utils/socialData'

const Footer = () => {
  return (
    <div className='text-white mb-10 md:mt-20'>
      
        <ul className='lg:hidden flex justify-center items-center'>
          {
            socialData.map((data)=>{
              return <li className='px-5'>
                  <a href={data.href} target='_blank' rel="noreferrer" className=''>
                  {data.child}
                  </a>
              </li>
            })
          }
        </ul>
      
    </div>
  )
}

export default Footer