import React from 'react'
import './css/card.css'

const Card = ({img, title, description, link}) => {
  return (
<div className="card-container1">
  <img src={img}/>

    <h4>{title}</h4>
    <p>{description}</p>
    <a href={link} className="btn btn-primary">Ver</a>

</div>
  )
}

export default Card