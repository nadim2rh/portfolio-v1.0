import logo from "../assets/logo.png";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_inner">
        <div className="footer_top">
          <div className="footer_top_left">
            <div className="footer_top_left_up">
              <img src={logo} alt="" />
            </div>
            <div className="footer_top_left_down">
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
          <div className="footer_top_right">
            <ul>
              <li>
                <a href="./fb">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a href="./ig">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="./li">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="./yt">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_down">
          <div className="footer_down_left">
            <p>Copyright © 2023 All rights reserved by NADIM RAHMAN</p>
          </div>
          <div className="footer_down_right">
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
