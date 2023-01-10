import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Nav2.css";

export default function Nav2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState();
  const [menuClass, setMenuClass] = useState("menu");
  const [menuIcon, setMenuIcon] = useState("menu");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width <= 1080) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [width]);

  const toggleMenu = () => {
    if (showMenu === false) {
      setShowMenu(true);
      setMenuIcon("close");
      setMenuClass("menu menu_appear");
    } else {
      setShowMenu(false);
      setMenuIcon("menu");
    }
  };

  const hideMenuonClick = () => {
    if (width <= 1080) {
      setShowMenu(false);
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

      {showMenu && (
        <div id="main_menu" className={menuClass}>
          <ul>
            <li onClick={hideMenuonClick}>
              <a href="#Home">Home</a>
            </li>
            <li onClick={hideMenuonClick}>
              <a href="#Features">Tools</a>
            </li>
            <li onClick={hideMenuonClick}>
              <a href="#Projects">Projects</a>
            </li>
            <li onClick={hideMenuonClick}>
              <a href="#Maintenance">Maintenance</a>
            </li>
            <li onClick={hideMenuonClick}>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <div className="account">
            <div className="sign_up acc_btn">
              <i className="material-icons-outlined">account_circle</i>
              <a>Signup</a>
            </div>
            <div className="login acc_btn">
              <i className="material-icons-outlined">login</i>
              <a>Login</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
