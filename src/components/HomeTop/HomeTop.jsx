import React from 'react';
import "./HomeTop.css";
import homeImg from "../../assets/dolphin-header.webp";

export default function HomeTop() {
  return (
    <div className='HomeTop'>

      <div className="HomeTop-left">
        <div className="HomeTop-intro">Enjoy the Best Emulator of all time</div>
        <div className="HomeTop-head"> Welcome to Dolphin Emulator</div>
        <p className="HomeTop-desc">Dolphin is an open-source platform project which means it's available on all kinds of hardware more recent versions only support 64-bit Windows, Mac OS 10, Linux, and Android operating systems.</p>

        <button>Download Now</button>
      </div>

      <div className="HomeTop-right">
        <img src={homeImg} alt="" />
      </div>

    </div>
  )
}
