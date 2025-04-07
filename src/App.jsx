import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import AboutUs from './pages/AboutUs.jsx/AboutUs'

function App() {


  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
        <Route path='/about-us' element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
