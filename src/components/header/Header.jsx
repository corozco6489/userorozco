import React from 'react'
import "../global.css";

export default function Header() {
  return (
    <header>
    <div className="wrapper">
      <nav>
        <div className="brand">
          <div className="mail-icon">
            <span className="ti-email"></span>
          </div>
          <span>corozco6489@gmail.com</span>
        </div>

        <ul>
          <li><a href="#works">Works</a></li>
          {/* <li>
            <a
              href="https://drive.google.com/file/d/1Cp8wO2ZD6nq5d1M6M1y8ZUT2GU_-I5MN/view?usp=sharing"
              target="_blank"
              >Resume</a
            >
          </li> */}
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ" target="_blank"
              >My Youtube</a
            >
          </li>
        </ul>

        <label for="menu-toggle"><span className="ti-menu-alt"></span></label>
      </nav>
    </div>
  </header>
  )
}
