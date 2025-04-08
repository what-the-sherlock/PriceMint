import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import AboutUs from './pages/AboutUs.jsx/AboutUs'
import Insights from './pages/Insights/Insights'
import Compare from './pages/Compare/Compare'

function App() {


  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/insights' element={<Insights/>} />
        <Route path='/compare' element={<Compare/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
