import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/musica.png';

export default function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo} alt="" />
                <a className="navbar-brand" href="#">SPOTIFY</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Favoritos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Perfil</a>
                        </li>
                        <li>
                            <Link to="/" className="btn btn-link"
                                style={{
                                    backgroundColor: "#000000",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontSize: "15px",
                                    fontWeight: "600"
                                }}
                            >Cerrar Sesión</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
