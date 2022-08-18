import { useState, useEffect, useMemo } from 'react'
import React from 'react'
import Color from "./Color";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import axios from 'axios'
import _ from "lodash";

function Brightness() {
    const [brightness, setBrightness] = useState(50);
  
    const changeBri = (value) => {
      setBrightness(value);
      console.log(value);
    };
  
    const throttle = useMemo(() => _.throttle(changeBri, 100), []);


    useEffect(() => {
        fetch(
            'http://192.168.8.100/api/5eoHTXd4sADPdxIs3I-nXanHntAXjGxQs5rPBd-V/lights/22/state',
          {
            method: "PUT",
            body: JSON.stringify({
              bri: brightness,
            }),
          }
        );
      }, [brightness]);
    
      
    
      useEffect(() => {
        fetch(
            'http://192.168.8.100/api/5eoHTXd4sADPdxIs3I-nXanHntAXjGxQs5rPBd-V/lights/22/state',
          {
            method: "PUT",
            body: JSON.stringify({
              xy: [0.3227, 0.329],
            }),
          }
        );
      }, []);
      
        return (
            <div style={{
                width: '250px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center'
            }}
            >
             
             
              <Slider defaultValue={brightness} onChange={throttle} />
            </div>
          );
        }


export default Brightness