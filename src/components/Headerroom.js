import React, { useState } from 'react'
import lightopacity from '../images/lightopacity.png'
import desklight from '../images/desklight.png'
import bedlight from '../images/bedlight.png'
import arraowleft from '../images/arraowleft.png'
import { BsArrowLeftShort } from 'react-icons/bs';
import Lamp from './Lamp';





const Headerroom = (props) => {

  // const [opacity, setOpacity] = useState(0.5);
  const opacity = props.opacity;
  const lightColor = props.lightColor;
  const btnColor = props.btnColor;

  const btnLightTypes = [
    {
      title: 'Main light',
      img: lightopacity,
      backgroundColor: '#fff',
      color: '#002D67',
    },
    {
      title: 'Desk light',
      img: desklight,
      backgroundColor: '#093B7B',
      color: '#fff',
    },
    {
      title: 'Bed light',
      img: bedlight,
      backgroundColor: '#fff',
      color: '#002D67',
    },
  ]


  return (
    
    <div className='flex justify-between w-full px-4 '>
      <div className="grid justify-between  py-10 items-center ">
      <div className='flex w-full  justify-between h-200'> 
        <div>
          <div className='flex items-center text-[#fff] text-overskrift'> <BsArrowLeftShort /> BedRoom </div>
          <div className='text-[#FFD239]'>4 lights</div>
        </div>
        <div>
          <div 
          style={{
            marginTop: '-70px',
            marginRight: '20px',
        }
          }
          >
            < Lamp />
          </div>
          <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '-20px',
            marginRight: '3px',
          }}
          > 
          <div className='lamplight'
            style={{
              height: '25px',
              width: '25px',
              borderRadius: '50%',
              backgroundColor: lightColor,
              opacity: opacity,
              zIndex:-1

              

            }}
          >
            </div>
          </div>
          </div>
        </div>
        <div className='flex justify-self-center space-x-4  overflow-hidden w-full' >

          {btnLightTypes.map((btnlighttype,index) => (
            <button
            key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',

                color: btnlighttype.color,
                fontWeight: 'bold',
                fontSize: '13px',
                height: '45px',
                width: '200px',
                borderRadius: '6px',
                backgroundColor: btnlighttype.backgroundColor,

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



