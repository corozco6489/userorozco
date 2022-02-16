import React from "react";
import "../global.css";
import { langContext } from "../../context/langContext";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";
export default function Header() {
  const idioma = useContext(langContext);
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

          <div className="banderas">
            <button onClick={() => idioma.establecerLenguaje("en-US")}>
              <img src="assets/img/united-kingdom.png" alt="" />
            </button>
            <button onClick={() => idioma.establecerLenguaje("es-MX")}>
              <img src="assets/img/spain.png" alt="" />
            </button>
          </div>

          <ul>
            <li>
              <a href="#works">
                <FormattedMessage id="header.works"  defaultMessage='Works'/>
              </a>
            </li>
            {/* <li>
            <a
              href="https://drive.google.com/file/d/1Cp8wO2ZD6nq5d1M6M1y8ZUT2GU_-I5MN/view?usp=sharing"
              target="_blank"
              >Resume</a
            >
          </li> */}
            <li>
              <a href="#contact">
                {" "}
                <FormattedMessage id="header.contact" defaultMessage='Contact' />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ"
                target="_blank"
              >
                <FormattedMessage id="header.link" defaultMessage='My youtube' />
              </a>
            </li>
          </ul>

          <label for="menu-toggle">
            <span className="ti-menu-alt"></span>
          </label>
        </nav>
      </div>
    </header>
  );
}
