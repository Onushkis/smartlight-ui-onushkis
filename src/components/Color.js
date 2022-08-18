import { useState, useEffect } from 'react'
import ColorConverter from 'cie-rgb-color-converter'
import axios from 'axios'
import '../App'
import React from 'react'

const Color = (props) => {
    let xy = ColorConverter.rgbToXy(props.r, props.g, props.b)
    const [color, setColor] = useState([])

    useEffect(() => {
        fetch(
            'http://192.168.8.100/api/5eoHTXd4sADPdxIs3I-nXanHntAXjGxQs5rPBd-V/lights/22/state',
            {
                method: 'PUT',
                body: JSON.stringify({
                    xy: [color.x, color.y],
                }),
            },
        )
    }, [color])

    return (
        <div
            onClick={() => {
                setColor(xy)
                console.log(xy)
            }}
            style={{
                width: '50px',
                height: '50px',
                borderRadius: '50px',
                backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
            }}
        ></div>
    )
}

export default Color
