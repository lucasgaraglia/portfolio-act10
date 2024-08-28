import React from 'react'
import Card from './Card'
import './css/cardContainer.css'

const CardContainer = () => {
  return (
    <div className="container1 mt-5">
        <Card img={"./src/views/home/img/pdf.png"} title={"Generador de pdf"} description={"Generador de pdf con información dada"} link={"/generador"}/>
        <Card img={"./src/views/home/img/mapaware.jpeg"} title={"MapAware"} description={"Mapa de eventos interactivo."} link={"/mapaware"}/>
        <Card img={"./src/views/home/img/GALERIA.png"} title={"Galería"} description={"Trabajo de galería de fotos"} link={"/galeria"}/>
        <Card img={"./src/views/home/img/calendar.png"} title={"Calendario"} description={"Calendario con feriados nacionales."} link={"/calendario"}/>
        <Card img={"./src/views/home/img/paint.svg"} title={"Paint"} description={"Paint y formas que se pueden reproducir."} link={"/paint"}/>
    </div>
  )
}

export default CardContainer