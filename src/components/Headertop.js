import React from 'react'
import { FaBatteryFull, FaSignal} from "react-icons/fa";
import { HiRss } from "react-icons/hi";


const Headertop = () => {
  return (
    <div className='flex justify-between w-full px-4' >
         
         { /* Topdiv*/ }
      <div className='text-[#fff]  '>9:21</div>

      <div className='flex text-[#fff] space-x-2 '>
          <FaSignal/>
          <HiRss />
        < FaBatteryFull />

      </div>
    </div>
  )
}

export default Headertop
