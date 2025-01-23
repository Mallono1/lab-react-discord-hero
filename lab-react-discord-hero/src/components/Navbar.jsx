import React from "react";
import "./Navbar.css";
import logo from "../assets/img/discord-logo-white.png";
import dashboardIcon from "../assets/img/menu-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar_logo" />

      <ul className="navbar__menu">
        <img src={dashboardIcon} alt="logo2" className="menu_logo" />
        {/* <li className="navbar__menu__item">Home</li>
        <li className="navbar__menu__item">About</li>
        <li className="navbar__menu__item">Services</li>
        <li className="navbar__menu__item">Contact</li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
