import React from 'react'
import profileimage from '../images/profile.jpg'

const Controlpanel = () => {
    return (
        <div className="App" > 
        
         <div className='bg-regal-bluebacgrounf   py-24 flex items-center justify-center space-x-8'>
         <div class="text-[#fff]" > Control Panel</div>
         <div className='relative '>
           <span className='absolute top-1 right-1 w-3 h-3 bg-regal-yellowtext rounded-full border-2 animate-ping'></span>
         <img src={profileimage} className=' w-16 h-16 rounded-full object-cover' />
         </div>
    
         </div>
    </div>
    );
  }
    
    
        
        
    
       

export default Controlpanel
