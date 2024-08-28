import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Películas</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Proyectos
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/generador"}>Generador de pdf</Link></li>
                <li><Link className="dropdown-item" to={"/mapaware"}>MapAware</Link></li>
                <li><Link className="dropdown-item" to={"/galeria"}>Galería</Link></li>
                <li><Link className="dropdown-item" to={"/calendario"}>Calendario</Link></li>
                <li><Link className="dropdown-item" to={"/paint"}>Paint</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar