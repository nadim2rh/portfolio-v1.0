import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_inner}>
        <div className={style.footer_top}>
          <div className={style.footer_top_left}>
            <div className={style.footer_top_left_up}>
              <img src={logo} alt="" />
            </div>
            <div className={style.footer_top_left_down}>
              <ul>
                <li>
                  <a href="./about">About me</a>
                </li>
                <li>
                  <a href="tel:+60132529664">Call Me</a>
                </li>
                <li>
                  <a href="mailto:nadimrahman@hotmail.com">Mail Me</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.footer_top_right}>
            <ul>
              <li>
                <a href="./fb">
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className={style.fa_icons}
                  />
                </a>
              </li>
              <li>
                <a href="./ig">
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    className={style.fa_icons}
                  />
                </a>
              </li>
              <li>
                <a href="./li">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={style.fa_icons}
                  />
                </a>
              </li>
              <li>
                <a href="./yt">
                  <FontAwesomeIcon
                    icon={faYoutubeSquare}
                    className={style.fa_icons}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footer_down}>
          <div className={style.footer_down_left}>
            <p>Copyright © 2023 All rights reserved by NADIM RAHMAN</p>
          </div>
          <div className={style.footer_down_right}>
            <ul>
              <li>
                <a href="./policy">Policy</a>
              </li>
              <li>
                <a href="./terms">Terms</a>
              </li>
              <li>
                <a href="./support">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
