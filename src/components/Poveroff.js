import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import poweroff from '../images/poweroff.png'




const Poveroff = () => {
    const [lightOn, setlightOn] = useState(true)

useEffect(() => {
    const data = axios({
      url:
        'http://192.168.8.100/api/5eoHTXd4sADPdxIs3I-nXanHntAXjGxQs5rPBd-V/lights/22/state',
      method: 'PUT',
      data: {
        on: lightOn,
        sat: 254,
        bri: 255,
        hue: 46920,
      },
    }).then((data) => {
      console.log(data)
    })
  }, [lightOn])

  useEffect(() => {
    fetch(
      'http://192.168.8.100/api/5eoHTXd4sADPdxIs3I-nXanHntAXjGxQs5rPBd-V/lights/22/state',
      {
        method: 'PUT',
        body: JSON.stringify({
          xy: [0.3227, 0.329],
         
        }),
      },
    )
  }, [])




  return (
    <div>
        <button>
<img src={poweroff} width='34px' height='34px' alt="TurnOff" onClick={( ) => 
setlightOn(! lightOn)
} />  

</button>
    </div>
  )
}

export default Poveroff
