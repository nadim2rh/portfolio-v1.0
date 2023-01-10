import "../styles/Section2.css";

export default function Section2() {
  return (
    <div id="Features" className="section2_container">
      <div className="section2_inner">
        <h2>
          Techs & <span style={{ color: "#6d28d9" }}>Tools</span>
        </h2>
        <h4>Stuffs that I worked with</h4>
        <div className="grid_items">
          <div className="grid_item">
            <i className="fa-brands fa-html5"></i>
            <h4>HTML</h4>
            <p>
              I am proficient in HTML, the standard markup language used to
              create structure of web pages.
            </p>
          </div>
          <div className="grid_item">
            <i className="fa-brands fa-css3-alt"></i>
            <h4>CSS</h4>
            <p>
              Skilled in CSS, that is used to describe the look and formatting
              of a document written in HTML.
            </p>
          </div>
          <div className="grid_item">
            <i className="fa-brands fa-js"></i>
            <h4>JavaScript</h4>
            <p>
              I have experience using JS, the language commonly used to add
              interactivity to the websites.
            </p>
          </div>
          <div className="grid_item">
            <i className="fa-brands fa-react"></i>
            <h4>React</h4>
            <p>
              I have used React to build user interfaces, a JavaScript library
              for building web applications.
            </p>
          </div>
          <div className="grid_item">
            <i className="fa-solid fa-database"></i>
            <h4>Firebase</h4>
            <p>
              I have previously used Firebase in projects for user
              authentication and real-time database.
            </p>
          </div>
          <div className="grid_item">
            <i className="fa-brands fa-wordpress"></i>
            <h4>WordPress</h4>
            <p>
              I'm using WordPress to create and manage websites for my current
              company that I work with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
