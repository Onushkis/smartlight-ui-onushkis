import React, { useState } from 'react'
import lightopacity from '../images/lightopacity.png'
import poweroff from '../images/poweroff.png'
import Color from './Color'
import Brightness from './Brightness'
import "rc-slider/assets/index.css";
import Poveroff from './Poveroff'
// import Poveroff from './Poveroff'



const Mainroom = (props) => {
  const opacity = props.opacity
  const setOpacity = props.setOpacity
  const setLightColor = props.setLightColor
  const setBtnColor = props.setBtnColor

  // const [opacity, setOpacity] = useState(1);

  const opacityChange = (e) => {
    const value = e.target.value
    setOpacity(value)
  }
  // const colorsArray = [
  //   '#FF9B9B',
  //   '#94EB9E',
  //   '#94CAEB',
  //   '#A594EB',
  //   '#DE94EB',
  //   '#EBD094',
  // ]

  const arraybtn = [
    {
      color: '#FF9B9B',
      title: 'Birthday',
    },
    {
      color: '#94EB9E',
      title: 'Relax',
    },
    {
      color: '#94CAEB',
      title: 'Party',
    },
    {
      color: '#A594EB',
      title: 'Fun',
    },


  ]



  return (
    <div
      className="bg-bg-regal-grey  w-full h-539"
      style={{
        //   width: '376px',
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
        alignContent: 'center',
      }}

    >

      {/* OPACITY */}
      <div>
        <div className='text-main font-bold text-[#002D67] p-[0.5em]'>Intensity </div>
        
        <div className='absolute right-6 -my-10 -mt-14'>
          
           
           <Poveroff/>
           </div>

         <div className='flex justify-self-center  items-center  justify-center'> 


          {/* <div>
            <img src={lightopacity} width="17px" height="23px"></img>

          </div> */}

          <div>
            {/* <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              onChange={opacityChange}

            ></input> */}
             <Brightness/>

          </div>



          {/* <div>
            <img src={lightopacity} width="17px" height="23px"></img>
          </div> */}
        {/* </div> */}

      </div>


      {/* COLORS */}
      <div >
        <div className='text-main font-bold text-[#002D67] p-[0.5em]'>Colors</div>

        <div className='flex justify-self-center  items-center  justify-center'>
          {/* {colorsArray.map((color) => (
           
            <div
            
              className="lamplight"
              onClick={() => setLightColor(color)}
              style={{
                height: '25px',
                width: '25px',
                borderRadius: '50%',
                backgroundColor: color,
              }}
            ></div>
          ))} */}
</div>

          <div className='flex justify-self-center  items-center  justify-center'>
            <Color r="0" g="255" b="255" />
            <Color r="148" g="0" b="211" />
            <Color r="244" g="250" b="41" />
            <Color r="243" g="72" b="204" />
            <Color r="7" g="250" b="84" />
          </div>

          <div
            className="lamplight"
            style={{
              
              opacity: opacity,
            }}
          ></div>

        </div>
      </div>
      <div>


        <div className='text-main font-bold text-[#002D67] p-[0.5em]'>Scenes</div>

        <div className='grid grid-cols-2 gap-4 justify-items-center '>
          {arraybtn.map((color) => (

            <button

              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',

                color: '#fff',
                fontWeight: 'bold',
                fontSize: '13px',
                height: '55px',
                width: '150px',
                borderRadius: '6px',
                backgroundColor: color.color,

              }}
            >
              <div>
                <img src={lightopacity} width="20px" height="20px"></img>
              </div>
              <div>{color.title}</div>
            </button>
          ))}

        </div>
      </div>
    </div>
  )
}


export default Mainroom







