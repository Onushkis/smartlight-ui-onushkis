import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import Headerroom from './Headerroom';
import Mainroom from './Mainroom';

const Room = () => {
    const {title} = useParams();
    const [opacity, setOpacity] = useState(1);
    const [lightColor, setLightColor] = useState('yellow');
    const [btnColor, setbtnColor] = useState('#fff');


  return (
    <div>
      
      <Headerroom  opacity={opacity} lightColor={lightColor} btnColor={btnColor}/>
      <Mainroom  opacity={opacity} setOpacity={setOpacity} lightColor={lightColor} setLightColor={setLightColor} btnColor={btnColor} setbtnColor={setbtnColor}/>
     
    </div>
  )
}

export default Room
