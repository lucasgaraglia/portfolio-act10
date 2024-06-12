import React from 'react'
import Card from './Card'
import './css/cardContainer.css'

const CardContainer = () => {
  return (
    <div className="container1 mt-5">
        <Card img={"./src/views/home/img/pdf.png"} title={"Generador de pdf"} description={"Generador de pdf a partir de datos proporcionados."} link={"/generador"}/>
        <Card img={"./src/views/home/img/mapaware.jpeg"} title={"MapAware"} description={"Mapa de eventos interactivo."} link={"/mapaware"}/>
        <Card img={"./src/views/home/img/calendario.png"} title={"Calendario"} description={"Calendario con feriados nacionales."} link={"/calendario"}/>
        <Card img={"./src/views/home/img/1.jpg"} title={"Próximamente"} description={"Próximamente"} link={"/project"}/>
        <Card img={"./src/views/home/img/1.jpg"} title={"Próximamente"} description={"Próximamente"} link={"/project"}/>
    </div>
  )
}

export default CardContainer