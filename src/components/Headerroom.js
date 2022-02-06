import React, {useState} from 'react'
import lightopacity from '../images/lightopacity.png'


const Headerroom = (props) => {
  
  // const [opacity, setOpacity] = useState(0.5);
  const opacity = props.opacity;
  const lightColor=props.lightColor;
  const btnColor=props.btnColor;

  const btnLightTypes = [
    {
      title: 'Main light', 
      img: lightopacity,
    }, 
    {
      title: 'Desk light', 
      img: lightopacity,
    }, 
    {
      title: 'Bed light', 
      img: lightopacity,
    }, 
]


  return (
    <div> 
      
    <div>
       BedRoom
      </div>
      <div>
<div>imgLamp</div>
<div className='lamplight'
style={{
    height: '25px',
    width : '25px',
    borderRadius: '50%',
    backgroundColor: lightColor,
    opacity: opacity
    
}}
>
</div>
     
    </div>
    <div>

      {btnLightTypes.map((btnlighttype) =>(
      <button
      
      style={{
                    display: 'flex',
                    alignItems:'center',
                    justifyContent:'space-around',
                    
                    color: 'blueviolet',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    height: '45px',
                    width: '124px',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                   
                }}
                >
                    <div>
                        <img src= {btnlighttype.img} width="20px" height="20px"></img>
                    </div>
                  {btnlighttype.title}
      </button>
      ))}
                 

      

    </div>
    </div>
    
  )
}


export default Headerroom



