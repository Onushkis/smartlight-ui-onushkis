import React, { useState } from 'react'
import lightopacity from '../images/lightopacity.png'


const Mainroom = (props) => {
    const opacity = props.opacity;
    const setOpacity = props.setOpacity;
    const setLightColor= props.setLightColor;
    // const [opacity, setOpacity] = useState(1);





    const opacityChange = (e) => {
        const value = e.target.value;
        setOpacity(value)
    }
    const colorsArray = ['#FF9B9B', '#94EB9E', '#94CAEB', '#A594EB', '#DE94EB', '#EBD094']

    return (

        <div>
            <div>
                <div>Intensity </div>
                <div>
                    <div>
                        <img src={lightopacity} width="51px" height="42px"></img>
                        lightopacity

                    </div>

                    <div>
                        <input type='range' min='0' max='1' step='0.01' onChange={opacityChange}></input>
                        {opacity}
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

                        <div className='lamplight' 
                        onClick={() => (setLightColor(color))}
                        style={{
                            height: '25px',
                            width: '25px',
                            borderRadius: '50%',
                            backgroundColor: color,
                           

                                }}
                            >
                        </div>

                    )
                    
                    )}
                  
                    <div className='lamplight'
                        style={{
                            height: '25px',
                            width: '25px',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            opacity: opacity

                        }}
                    >
                    </div>
                    <div className='lamplight'
                        style={{
                            height: '25px',
                            width: '25px',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            opacity: opacity

                        }}
                    >
                    </div>


                        
                </div>
            </div>
            <div>
                <div>Scenes</div>
                <div>bloks4</div>
            </div>
        </div>
    )
}





export default Mainroom
