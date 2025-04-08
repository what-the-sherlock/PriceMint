// import React, { useContext } from 'react'
// import "./Navbar.css"
// import logo from '../../assets/logo.png'
// import arrow_icon from '../../assets/arrow-icon.png'
// import { CoinContext } from '../../context/CoinContext'
// import {Link} from 'react-router-dom'

// const Navbar = () => {

//     const {setCurrency} = useContext(CoinContext)

//     const currencyHandler = (event)=>{
//         switch (event.target.value){
//             case "usd": {
//                 setCurrency({name: "usd", symbol: "$"});
//                 break
//             }
//             case "eur": {
//                 setCurrency({name: "eur", symbol: "€"});
//                 break
//             }
//             case "inr": {
//                 setCurrency({name: "inr", symbol: "₹"});
//                 break
//             }
//             default: {
//                 setCurrency({name: "usd", symbol: "$"});
//                 break
//             }              
//         }
//     }

//   return (
//     <div className='navbar'>
//         <Link to={'/'} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px'}}>
//             <img src={logo} alt='Logo' className='logo' />
//             <h1>PriceMint</h1>
//         </Link>
//         <ul>
//             <Link to={'/'}><li>Home</li></Link>
//             <Link to={'/about-us'}><li>About Us</li></Link>
//             <Link to={'/compare'}><li>Compare</li></Link>
//             <Link to={'/insights'}><li>Insights</li></Link>
//         </ul>
//         <div className='nav-right'>
//             <select onChange={currencyHandler}>
//                 <option value="usd">USD</option>
//                 <option value="eur">EUR</option>
//                 <option value="inr">INR</option>
//             </select>
//             <button>Sign up <img src={arrow_icon} alt='arrow-icon' className='arrow_icon' /></button>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow-icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const currencyHandler = (event) => {
    const selected = event.target.value;
    const symbols = { usd: '$', eur: '€', inr: '₹' };
    setCurrency({ name: selected, symbol: symbols[selected] || '$' });
  }

  return (
    <div className='navbar'>
      <Link to='/' className='nav-logo'>
        <img src={logo} alt='Logo' className='logo' />
        <h1>PriceMint</h1>
      </Link>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to='/' onClick={() => setMenuOpen(false)}><li>Home</li></Link>
        <Link to='/about-us' onClick={() => setMenuOpen(false)}><li>About Us</li></Link>
        <Link to='/compare' onClick={() => setMenuOpen(false)}><li>Compare</li></Link>
        <Link to='/insights' onClick={() => setMenuOpen(false)}><li>Insights</li></Link>
      </div>

      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up <img src={arrow_icon} alt='arrow' /></button>

        <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
