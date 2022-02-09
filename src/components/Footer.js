import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { BsHouse } from 'react-icons/bs';
import { AiOutlineBulb  } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className=' flex items-center space-x-12 justify-center bg-bg-regal-white text-[#578CD0]   w-full h-67 '>

        <AiOutlineBulb  size="25px"  />
          <MdSettings   size="25px"/>
        <BsHouse size="25px"/> 
        
       
     
      </div>
  )
}

export default Footer
