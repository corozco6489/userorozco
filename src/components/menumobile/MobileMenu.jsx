import React from "react";
import "../global.css";
import { langContext } from "../../context/langContext";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
export default function MobileMenu() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  const idioma = useContext(langContext);

  return (
<>
<input type="checkbox" id="menu-toggle" />

    <aside className="mobile-menu">
      <div className="menu-wrapper">
        <div className="aside-header">
          <div className="socials-menu">
            <a
              href="https://www.linkedin.com/in/carlosorozco6489/"
              target="_blank"
            >
              <span className="ti-linkedin"></span>
            </a>
            <a href="https://github.com/corozco6489" target="_blank">
              <span className="lab la-github"></span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ/featured"
              target="_blank"
            >
              <span className="lab la-youtube"></span>
            </a>
          </div>
          <label for="menu-toggle">
            <span className="ti-close"></span>
          </label>
        </div>
        <div className="aside-content">
          <ul>
            <li>
              <a href="#works" onClick={() => setshowMobileMenu(!showMobileMenu)}><FormattedMessage id="header.works" defaultMessage='Works'/></a>
            </li>
            {/* <li>
            <a
              href="https://drive.google.com/file/d/1Cp8wO2ZD6nq5d1M6M1y8ZUT2GU_-I5MN/view?usp=sharing"
              target="_blank"
              >Resume</a
            >
          </li> */}
            <li>
              <a href="#contact" onClick={() => setshowMobileMenu(!showMobileMenu)} ><FormattedMessage id="header.contact" defaultMessage='Contact'/></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ/featured"
                target="_blank" onClick={() => setshowMobileMenu(!showMobileMenu)}
              >
 <FormattedMessage id="header.link" defaultMessage='My Youtube'/>                </a>
            </li>
            <li>
              <div className="banderas1">
              <button onClick={() => idioma.establecerLenguaje("en-US")}>
              <img src="assets/img/united-kingdom.png" alt="" />
            </button>
            <button onClick={() => idioma.establecerLenguaje("es-MX")}>
              <img src="assets/img/spain.png" alt="" />
            </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside></>
    
  );
}
