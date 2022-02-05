import React, {useState} from 'react'



const Headerroom = (props) => {

  // const [opacity, setOpacity] = useState(0.5);
  const opacity = props.opacity;
  const lightColor=props.lightColor;


  return (
      <div> 
    <div>
       BedRoom
      </div>
      <div>
lamp
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
    </div>
    
  )
}

export default Headerroom
