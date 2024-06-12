import React from 'react'
import './css/card.css'
import { Link } from 'react-router-dom'


const Card = ({img, title, description, link}) => {
  return (
<div className="card-container1">
  <img src={img}/>

    <h4>{title}</h4>
    <p>{description}</p>
    <Link to={link} className="btn btn-primary">Ver</Link>

</div>
  )
}

export default Card