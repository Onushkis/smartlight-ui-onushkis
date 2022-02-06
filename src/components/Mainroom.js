import React, { useState } from 'react'
import lightopacity from '../images/lightopacity.png'

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
  const colorsArray = [
    '#FF9B9B',
    '#94EB9E',
    '#94CAEB',
    '#A594EB',
    '#DE94EB',
    '#EBD094',
  ]

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
    className="bg-bg-regal-grey "
    style={{
      width: '376px',
      
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    }}
      
      
  >
      <div>
        <div>Intensity </div>
        <div>
          <div>
            <img src={lightopacity} width="51px" height="42px"></img>
            lightopacity
          </div>

          <div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              onChange={opacityChange}
            ></input>
           
          </div>
          <div>
            <img src={lightopacity} width="51px" height="42px"></img>
          </div>
        </div>
      </div>
      <div>
        <div>Colors</div>

        <div>
          {colorsArray.map((color) => (
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
          ))}

          <div
            className="lamplight"
            style={{
              height: '25px',
              width: '25px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              opacity: opacity,
            }}
          ></div>
       
        </div>
      </div>
      <div>
        <div>Scenes</div>
        
            <div className='btn'> 
             {arraybtn.map((color) => ( 

                <button
                
                style={{
                    display: 'flex',
                    alignItems:'center',
                    justifyContent:'space-around',
                    
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
