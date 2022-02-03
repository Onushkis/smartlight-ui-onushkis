import React from 'react'
import { Router } from 'react-router-dom'
import Headmidle from './Headmidle'
import {  Link } from "react-router-dom";

const MainContent = () => {
    const  rooms = [
        {
            id:1,
            img:"profile.jpg",
            title:'Bed room',
            lights:'4',
            link: 'bedroom'

        },
        {
            id:2,
            img:"images/profile.jpg",
            title:'Living room',
            lights:'2',
            link: 'livingroom'
        },
        {
            id:3,
            img:'',
            title:'Kitchen',
            lights:'5',
            link: 'kitchen'
        },
        {
            id:4,
            img:'',
            title:'Bathroom',
            lights:'1',
            link: 'bathroom'
        },
        {
            id:5,
            img:'',
            title:'Outdoor',
            lights:'5',
            link: 'outdoor'
        },
        {
            id:6,
            img:'',
            title:'Balcony',
            lights:'2',
            link: 'balcony'
        },
     ]
  return (
<> 
    <Headmidle />


      <div className='bg-bg-regal-white  '
      style={{
          width:'376px',
          height:'656px'
      }}
      > 
        <div>
            All rooms
        </div>
        <div 
        style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
        }}
        >

        {
            rooms.map(room => (
                <div 
                key={room.id}
                style={{
                  
                    
                    width:'150px',
                    height:'150px',
                    backgroundColor:'grey'
                }}
                > 
                <img src={room.url}
                width='36px'
                height='36px'
                ></img>
            <div>{room.title}</div>
            <div>{room.lights} lights</div>
            <Link to={'room/' + room.link }
> 
            linkas
            </Link>
        </div>

)) 
}
        
</div>
      </div>
      </>
       )
     }
       
     export default MainContent

     



