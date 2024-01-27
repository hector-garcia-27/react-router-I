import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './assets/Navbar';
import Home from './assets/Home';
import Contacto from './assets/Contacto';
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>


    </>
  )
}

export default App
