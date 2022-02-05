import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import Headerroom from './Headerroom';
import Mainroom from './Mainroom';

const Room = () => {
    const {title} = useParams();
    const [opacity, setOpacity] = useState(1);
    const [lightColor, setLightColor] = useState('yellow');

  return (
    <div>
      
      <Headerroom  opacity={opacity} lightColor={lightColor}/>
      <Mainroom  opacity={opacity} setOpacity={setOpacity} lightColor={lightColor} setLightColor={setLightColor}/>
     
    </div>
  )
}

export default Room
