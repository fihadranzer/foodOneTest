import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={logo} alt="logo" />
        </div>
        <div className="rightSide">Right side</div>
        
    </div>
  )
}

export default Navbar