import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './views/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Generador from './views/generador_pdf/Generador';
import Map from './views/mapaware/Map';
import Calendario from './views/calend/Calendario';
import Galeria from './views/galeria/Galeria';
import Paint from './views/paint/Paint';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter >
    <Navbar />
      <Routes>
      <Route path={'/'} element={<Home/>} />
      <Route path={'/generador'} element={<Generador/>} />
      <Route path={'/mapaware'} element={<Map/>} />
      <Route path={'/galeria'} element={<Galeria/>} />
      <Route path={'/calendario'} element={<Calendario/>} />
      <Route path={'/paint'} element={<Paint/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
