import React from 'react'

const Headmidle = () => {
    return (
        <div className="flex items-center space-x-4">
            {/* Middlediv*/}

            <div>Cotrol panel</div>
            {/*  <span className='absolute top-1 right-1 w-3 h-3 bg-regal-yellowtext rounded-full border-2 animate-ping'></span> */}
            <img
                src={require('../images/profile.jpg')}
                className=" w-16 h-16 rounded-full object-cover "
            />
        </div>
    )
}

export default Headmidle
