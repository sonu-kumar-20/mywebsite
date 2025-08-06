import React from 'react'
import mern from "../../assets/mern.jpg"
import './Card.css';
function Card  ({title,image})  {
  return (
    <div className='card'>
      
      <h1>
        
       {title}</h1>

      <div className="hovercard">
        <img src={image} alt="image.." />
      </div>
    </div>
  )
}

export default Card