import profile from "../assets/profile.png";
import "../styles/Section1.css";

export default function Section1() {
  return (
    <div id="Home" className="section1_container">
      <div className="section1_inner">
        <div className="section1_img">
          <div className="section1_img_inner">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="section1_text">
          <i className="material-icons-outlined">devices</i>
          <h4 className="top_h4">Hello there people from the internet...</h4>
          <h2 style={{ color: "#6d28d9" }}>
            <span style={{ fontSize: " 20px", verticalAlign: "top" }}>
              I'm{" "}
            </span>
            NADIM RAHMAN
          </h2>
          <h5 className="s1_bottom_h5">Front-end Web Developer</h5>
          <p>
            I'm an expat currently living and working in Kuala Lumpur as a
            front-end web developer, experienced in web design, development and
            maintenance services. I'm excited to be here and to learn more about
            the tech scene in Malaysia.
          </p>
          <a href="#Contact">
            <button>Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  );
}
