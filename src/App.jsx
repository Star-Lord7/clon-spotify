import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Registro from './components/Registro'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './components/Nav'

function App() {
  const [vistaActual, setVistaActual] = useState("login");

  return (
    <>
      {vistaActual === "login" && (
        <Login cambiarVista={setVistaActual} />
      )}
      {vistaActual === "registro" && (
        <Registro cambiarVista={setVistaActual} />
      )}
      {vistaActual === "home" && (
        <Home cambiarVista={setVistaActual} />
      )}
    </>
  )
}

export default App
