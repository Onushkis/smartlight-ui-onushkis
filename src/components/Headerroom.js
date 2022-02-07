import React, { useState } from 'react'
import lightopacity from '../images/lightopacity.png'
import desklight from '../images/desklight.png'
import bedlight from '../images/bedlight.png'
import arraowleft from '../images/arraowleft.png'




const Headerroom = (props) => {

  // const [opacity, setOpacity] = useState(0.5);
  const opacity = props.opacity;
  const lightColor = props.lightColor;
  const btnColor = props.btnColor;

  const btnLightTypes = [
    {
      title: 'Main light',
      img: lightopacity,
    },
    {
      title: 'Desk light',
      img: desklight,
    },
    {
      title: 'Bed light',
      img: bedlight,
    },
  ]


  return (
    <div className='flex justify-between w-full px-4 '>
      <div className="grid justify-between  py-10 items-center ">
      <div className='flex w-full  justify-between h-200'> 
        <div>
          <div className='flex '> <img src={arraowleft} width='13px' height='13px' ></img> BedRoom </div>
          <div>4 lights</div>
        </div>
        <div>
          <div>imgLamp</div>
          <div className='lamplight'
            style={{
              height: '25px',
              width: '25px',
              borderRadius: '50%',
              backgroundColor: lightColor,
              opacity: opacity
              

            }}
          >
          </div>
          </div>
        </div>
        <div className='flex justify-self-center space-x-4  overflow-hidden w-full' >

          {btnLightTypes.map((btnlighttype) => (
            <button

              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',

                color: 'blueviolet',
                fontWeight: 'bold',
                fontSize: '13px',
                height: '45px',
                width: '200px',
                borderRadius: '6px',
                backgroundColor: '#fff',

              }}
            >
              <div>
                <img src={btnlighttype.img} width="20px" height="20px"></img>
              </div>
              {btnlighttype.title}
            </button>
          ))}

        </div>
      </div>
    </div>

  )
}





export default Headerroom



