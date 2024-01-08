import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Navbar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter>
     <div className='App'>
     <Navbar />
       <Routes>
        <Route Component={Home} path='/' />
        <Route Component={Cart} path='/cart' />
       </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
