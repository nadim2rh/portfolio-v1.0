import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Nav.css";

export default function Nav() {
  const [showMenuClass, setShowMenuClass] = useState("menu");
  const [menuIcon, setMenuIcon] = useState("menu");

  const toggleMenu = () => {
    if (showMenuClass === "menu" || showMenuClass === "menu smooth_menu") {
      setShowMenuClass("menu show_menu");
      setMenuIcon("close");
    } else {
      setShowMenuClass("menu smooth_menu");
      setMenuIcon("menu");
    }
  };

  return (
    <nav id="navbar">
      <div className="logo">
        <a href="#Home">
          <img src={logo} alt="" />
        </a>

        <span className="res_menu_btn" onClick={toggleMenu}>
          <i id="menu_icon" className="material-icons-outlined">
            {menuIcon}
          </i>
        </span>
      </div>

      <div id="main_menu" className={showMenuClass}>
        <ul>
          <li onClick={toggleMenu}>
            <a href="#Home">Home</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#Features">Tools</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#Projects">Projects</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#Maintenance">Maintenance</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="account">
          <div className="sign_up acc_btn">
            <i className="material-icons-outlined">account_circle</i>
            <a href="./signup">Signup</a>
          </div>
          <div className="login acc_btn">
            <i className="material-icons-outlined">login</i>
            <a href="./login">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
