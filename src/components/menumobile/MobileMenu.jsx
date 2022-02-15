import React from 'react'

export default function MobileMenu() {
  return (
    <aside className="mobile-menu">
    <div className="menu-wrapper">
      <div className="aside-header">
        <div className="socials-menu">
          <a href="https://www.linkedin.com/in/techadam90/" target="_blank"
            ><span className="ti-linkedin"></span
          ></a>
          <a href="https://github.com/techadam" target="_blank"
            ><span className="ti-github"></span
          ></a>
          <a href="https://youtube.com/coderesource" target="_blank"
            ><span className="ti-youtube"></span
          ></a>
        </div>
        <label for="menu-toggle"><span className="ti-close"></span></label>
      </div>
      <div className="aside-content">
        <ul>
          <li><a href="#works">Works</a></li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Cp8wO2ZD6nq5d1M6M1y8ZUT2GU_-I5MN/view?usp=sharing"
              target="_blank"
              >Resume</a
            >
          </li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://youtube.com/coderesource" target="_blank"
              >My Youtube</a
            >
          </li>
        </ul>
      </div>
    </div>
  </aside>
  )
}
