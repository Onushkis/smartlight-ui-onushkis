import React from 'react'
import { useParams } from "react-router-dom";

const Room = () => {
    const {title} = useParams();
  return (
    <div>
      <h1>Room</h1>
      <p>{title}</p>
    </div>
  )
}

export default Room
