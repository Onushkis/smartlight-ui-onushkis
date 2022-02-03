import React from 'react'

const Headmidle = () => {
    return (
        <div className="flex items-center justify-center  place-content-center text-center ">
            {/* Middlediv*/}
             <div class="text-[#fff] font-bold text-[30px]  ">Cotrol panel</div>
            <div className='relative className="flex items-center justify-center space-x-32 place-content-center text-center "'>
              <span className='absolute top-0 right-0 w-3 h-3  bg-regal-yellowtext rounded-full border-2 border-regal-bluebacgrounf '></span> 
            <img
                src={require('../images/profile.jpg')}
                className=" w-12 h-12 rounded-full object-cover border-2 "
            />
            </div>
        </div>
    )
}

export default Headmidle
