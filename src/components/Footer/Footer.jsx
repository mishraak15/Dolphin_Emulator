import React from 'react';
import "./Footer.css";
import logo from "../../assets/logo.webp";
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='Footer'>
      <NavLink to="/" className="Footer-top">
        <img src={logo} alt="logo.." />
        <span>Dolphin Emulator</span>
      </NavLink>
      <p>Immerse yourself in endless gaming possibilities across all platforms as we not only have the best emulator out there.</p>
      <div className="Footer-mid">
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/cookies">Cookie Policy</NavLink>
        <NavLink to="/privacy">Privacy Policy</NavLink>
      </div>

      <div className="Footer-end">
      © 2022 <NavLink to="/">Dolphin Emulator</NavLink> - All Rights Reserved.
      </div>
    </div>
  )
}
