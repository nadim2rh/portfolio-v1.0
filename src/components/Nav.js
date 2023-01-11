import { useState } from "react";
import logo from "../assets/logo.png";
import style from "../styles/Nav.module.css";

export default function Nav() {
  const [showMenuClass, setShowMenuClass] = useState(`${style.menu}`);
  const [menuIcon, setMenuIcon] = useState("menu");

  const toggleMenu = () => {
    if (
      showMenuClass === `${style.menu}` ||
      showMenuClass === `${style.menu} ${style.smooth_menu}`
    ) {
      setShowMenuClass(`${style.menu} ${style.show_menu}`);
      setMenuIcon("close");
    } else {
      setShowMenuClass(`${style.menu} ${style.smooth_menu}`);
      setMenuIcon("menu");
    }
  };

  return (
    <nav id={style.navbar} style={{ zIndex: "100" }}>
      <div className={style.logo}>
        <a href="#Home">
          <img src={logo} alt="" />
        </a>

        <span className={style.res_menu_btn} onClick={toggleMenu}>
          <i id={style.menu_icon} className="material-icons-outlined">
            {menuIcon}
          </i>
        </span>
      </div>

      <div id={style.main_menu} className={showMenuClass}>
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
        <div className={style.account}>
          <div className={`${style.sign_up} ${style.acc_btn}`}>
            <i className="material-icons-outlined">account_circle</i>
            <a href="./signup">Signup</a>
          </div>
          <div className={`${style.login} ${style.acc_btn}`}>
            <i className="material-icons-outlined">login</i>
            <a href="./login">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
