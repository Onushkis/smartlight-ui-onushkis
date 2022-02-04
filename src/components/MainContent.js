import React from 'react'
import { Router } from 'react-router-dom'
import Headmidle from './Headmidle'
import { Link } from 'react-router-dom'
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
        className="bg-bg-regal-white  "
        style={{
          width: '376px',
          height: '656px',
        }}
      >
        <div>All rooms</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          {rooms.map((room) => (
            <div
              key={room.id}
              style={{
                width: '150px',
                height: '150px',
                backgroundColor: 'grey',
              }}
            >
              <img src={room.img} width="51px" height="42px"></img>
              <div>{room.title}</div>
              <div>{room.lights} lights</div>
              <Link to={'room/' + room.link}>linkas</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainContent







