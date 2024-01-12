import { useState, } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Home />
    </>
  )
}

export default App
