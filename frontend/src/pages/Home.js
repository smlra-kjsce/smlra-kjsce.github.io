import React from "react";
import "../static/css/style.css";
import pic from "../static/Images/pic.png";

export default function Home() {
  return (
    <div className="fonts">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black" }}
      >
        <a className="navbar-brand" href="/index.html">
          <img
            className="navbar-left"
            src={pic}
            alt="smlra"
            style={{ width: "8%", height: "5%" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-right" />
        </button>
        <div
          className="collapse navbar-collapse text-white"
          id="navbarNavDropdown"
          style={{ paddingRight: "22%", zIndex: 1 }}
        >
          <ul className="navbar-nav" style={{ fontSize: "large" }}>
            <li className="nav-item active" style={{ paddingRight: "11%" }}>
              <a className="nav-link" href="/index.html">
                Home
              </a>
            </li>
            <li className="nav-item" style={{ paddingRight: "11%" }}>
              <a className="nav-link" href="/about.html">
                About
              </a>
            </li>
            <li className="nav-item" style={{ paddingRight: "11%" }}>
              <a className="nav-link" href="/blogs.html">
                Blogs
              </a>
            </li>
            <li className="nav-item text-white" style={{ paddingRight: "11%" }}>
              <a className="nav-link" href="./initiatives.html">
                Initiatives
              </a>
            </li>
            <li className="nav-item text-white" style={{ paddingRight: "11%" }}>
              <a className="nav-link" href="./team.html">
                Team
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link" href="./contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="particles-js">
        {/* <div class="container" style="margin-top: 9%;"> */}
        <div className="btext" style={{ paddingLeft: "5%" }}>
          <img src={pic} alt="smlra" style={{ width: "15%", height: "15%" }} />
          <h1
            style={{ color: "wheat", fontFamily: '"Montserrat", sans-serif' }}
          >
            SMLRA
          </h1>
          <p
            style={{
              color: "wheat",
              fontSize: "125%",
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            Somaiya Machine Learning Research Association
          </p>
          <br />
          <p
            style={{
              color: "wheat",
              fontSize: "110%",
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            "Where dedication meets research...."
          </p>
        </div>
        {/* </div> */}
      </div>
      <section
        className="footer"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <footer
          className="page-footer font-small stylish-color-dark pt-4"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div
            className="row"
            style={{ marginLeft: "1px", marginRight: "15px" }}
          >
            <div className="col-md-4 mx-auto text-center">
              <center>
                <a className="navbar-brand" href="/index.html">
                  <img
                    src={pic}
                    alt="smlra"
                    style={{ width: "20%", height: "20%" }}
                  />
                </a>
              </center>
              <p>
                Somaiya Machine Learning Research Association
                <br />
                The Artificial Intelligence Community of KJSCE
              </p>
            </div>
            <div className="col-md-4 mx-auto text-center">
              <br />
              <p style={{ color: "black", fontSize: "90%" }}>
                <a href="./contact.html" style={{ textDecoration: "none" }}>
                  <i className="fa fa-map-marker mx-0" /> KJSCE, Mumbai,
                  Maharashtra, India
                </a>{" "}
              </p>
              <br />
              <p style={{ color: "black", fontSize: "90%" }}>
                <a
                  href="mailto: smlra-kjsce@somaiya.edu"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa fa-envelope" />{" "}
                  <u>smlra-kjsce@somaiya.edu</u>
                </a>{" "}
              </p>
            </div>
            <div className="col-md-4 mx-auto">
              <h5 style={{ textAlign: "center" }}>Contact Us</h5>
              <br />
              <ul
                className="list-unstyled list-inline text-center"
                style={{ color: "#0bebf3" }}
              >
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-dribbble mx-1"
                    href="https://github.com/smlra-kjsce"
                  >
                    <i className="fa fa-github fa-2x"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-dribbble mx-1"
                    href="https://smlra-kjsce.medium.com"
                  >
                    <i className="fa fa-medium fa-2x"> </i>
                  </a>
                </li>
                <li className="list-inline-item" style={{ color: "#0bebf3" }}>
                  <a
                    className="btn-floating btn-tw mx-1"
                    href="https://twitter.com/smlra_kjsce"
                  >
                    <i className="fa fa-twitter fa-2x"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-li mx-1"
                    href="https://www.linkedin.com/company/smlra-kjsce/"
                  >
                    <i className="fa fa-linkedin fa-2x"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-fb mx-1"
                    href="https://www.facebook.com/smlrakjsce/"
                  >
                    <i className="fa fa-facebook fa-2x"> </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            <p>
              © 2021 Copyright. Developed and Maintained by{" "}
              <strong style={{ color: "wheat" }}>SMLRA</strong>
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}
