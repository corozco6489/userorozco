import React from "react";
import "./toogle.css";

import { useContext } from "react";
import { ThemeContext } from "../context/context";
export default function Toogle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img
        loading="lazy"
        src="assets/img/images/moon.png"
        alt=""
        className="t-icon"
      />
      <img
        loading="lazy"
        src="assets/img/images/sun.png"
        alt=""
        className="t-icon"
      />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}
