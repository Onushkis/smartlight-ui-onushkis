import React from 'react'
import profileimage from '../images/profile.jpg'

const Headmidle = () => {
  return (
    <div className="flex items-center justify-center  place-content-center text-center ">
      {/* Middlediv*/}
      <div className="flex space-x-32 py-14" > 
      <div class="text-[#fff] font-bold text-tiny">Control Panel</div>
      <div className='relative '>
        <span className="absolute top-0 right-0 w-3 h-3  bg-regal-yellowtext rounded-full border-2 g border-regal-bluebacground "></span>
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




