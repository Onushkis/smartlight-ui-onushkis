import React from 'react'
import profileimage from '../images/profile.jpg'


const Headmidle = () => {
    return (
        <div className="flex items-center justify-center  place-content-center text-center ">
            {/* Middlediv*/}
             <div class="text-[#fff] font-bold text-tiny">Cotrol panel</div>
            <div className='relative className="flex items-center justify-center space-x-32 place-content-center text-center "'>
              <span className='absolute top-0 right-0 w-3 h-3  bg-regal-yellowtext rounded-full border-2 border-regal-bluebacgrounf '></span> 
            
         <img src={profileimage} className='w-16 h-16 rounded-full object-cover border-2' />
         
        
            </div>
        </div>
    )
}

export default Headmidle
