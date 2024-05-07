import React from 'react';
import "./Navbar.css";
import logo from '../../assets/logo.webp';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='Navbar'>

      <div className="nav-left">
        <img src={logo} alt="logo.." />
        <span>Dolphin Emulator</span>
      </div>

      <div className="nav-right">
        <NavLink to="/" className="nav-right-link">Home</NavLink>
        <NavLink to="/howtouse" className="nav-right-link">How to use</NavLink>
        <NavLink to="/about" className="nav-right-link">About</NavLink>
      </div>
    </div>
  )
}
