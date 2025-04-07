import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '15px'}}>
            <img src={logo} alt='Logo' className='logo' style={{width: '60px'}} />
            <h1>PriceMint</h1>
        </div>
        <p>
        Copyright @ 2024, PriceMint - All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer