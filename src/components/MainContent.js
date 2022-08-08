import React from 'react'
import { Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Headmidle from './Headmidle'
import bedroomimage from '../images/bedroom.jpg'
import livingroomimage from '../images/livingroom.jpg'
import kitchenimage from '../images/kitchen.jpg'
import bathroomimage from '../images/bathroom.jpg'
import outdoorimage from '../images/outdoor.jpg'
import balconyimage from '../images/balcony.jpg'

const MainContent = () => {
  const rooms = [
    {
      id: 1,
      img: bedroomimage,
      title: 'Bed room',
      lights: '4',
      link: 'bedroom',
    },

    {
      id: 2,
      img: livingroomimage,
      title: 'Living room',
      lights: '2',
      link: 'livingroom',
    },

    {
      id: 3,
      img: kitchenimage,
      title: 'Kitchen',
      lights: '5',
      link: 'kitchen',
    },
    {
      id: 4,
      img: bathroomimage,
      title: 'Bathroom',
      lights: '1',
      link: 'bathroom',
    },
    {
      id: 5,
      img: outdoorimage,
      title: 'Outdoor',
      lights: '5',
      link: 'outdoor',
    },

    {
      id: 6,
      img: balconyimage,

      title: 'Balcony',
      lights: '2',
      link: 'balcony',
    },
  ]
  return (
    <>
      <Headmidle />
      <div
        className="bg-bg-regal-grey w-full"
        style={{
          height: '656px',
          borderTopLeftRadius: '25px',
          borderTopRightRadius: '25px',
        }}
          
          
      >
        <div className="rounded-t-lg">  
        <h1 className="text text-regal-bluetext regal-y font-bold text-main pl-4 mt-4 ">All rooms </h1>

        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            justifyItems:'center',
            marginTop: '2rem',
            
            // backgroundColor: '#F6F8FB',
          }}
          >
          {rooms.map((room) => (
              <Link to={'room/' + room.link}>
            <div
            
              key={room.id}
              style={{
                width: '150px',
                height: '150px',
                paddingTop: '5px',
                paddingLeft: '3px',
                 backgroundColor: 'white',
                 margin: '8px',
                 borderRadius: '18px',
                 cursor: 'pointer',
                
                }}
              >
              
              <div className="pl-4 mt-4"><img src={room.img} width="51px" height="42px"></img></div>
              <div className="text regal-blacktext font-bold text-main pl-4 mt-4">{room.title} </div>
              <div className="text text-regal-yellowtext font-bold text-small pl-4 ">{room.lights} lights</div>
             

            </div>
            </Link> 
          ))}
        </div>
        </div>
      </div>
    </>
  )
}
export default MainContent
                
                


            
            






