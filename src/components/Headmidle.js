import React from 'react'
import profileimage from '../images/profile.jpg'

const Headmidle = () => {
  return (
    <div className='flex justify-between w-full px-4'>
      {/* Middlediv*/}
      <div className="flex justify-between space-x-28 py-10 items-center" > 
      <div class="text-[#fff] font-bold text-tiny">Control <br /> Panel</div>
      <div className='relative  '>
        <div className="absolute top-0 right-0 w-3 h-3  bg-regal-yellowtext rounded-full border-2 g border-regal-bluebacground "></div>
        <img
          src={profileimage}
          className="w-12 h-12 rounded-full object-cover border-2"
        />
      </div>
      </div>
    </div>
  )
}
export default Headmidle




