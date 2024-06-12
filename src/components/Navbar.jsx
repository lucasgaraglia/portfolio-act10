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
              <Link className="nav-link" to={"/about"}>Sobre mí</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Proyectos
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/generador"}>Generador de pdf</Link></li>
                <li><Link className="dropdown-item" to={"/mapaware"}>MapAware</Link></li>
                <li><Link className="dropdown-item" to={"/calendario"}>Calendario</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar