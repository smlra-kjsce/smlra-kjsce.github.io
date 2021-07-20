import React from "react";
import "../static/css/style.css";
import pic from "../static/Images/pic.png";
import abt from "../static/Images/abt.svg";

export default function About() {
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
      <section className="about">
        <div className="row" style={{ margin: "13%", marginBottom: 0 }}>
          <div className="col">
            <img
              src={abt}
              alt="blog"
              style={{ width: "100%", height: "70%" }}
              className="abt-img"
            />
          </div>
          <div
            className="col"
            style={{ padding: "7%", textAlign: "center", paddingTop: "4%" }}
          >
            <p style={{ fontSize: "xx-large" }}>About Us</p>
            {/* <hr style="background-color: black; width: 50%;"> */}
            <p style={{ fontSize: "large" }} className="ill-text-abt">
              Dedicated student community of KJSCE with an aim to accelerate
              collaboration among students in AI research and development. Read
              on to find what motivates our members to be a part of our society
              and the need for such a community in our university!
            </p>
          </div>
        </div>
        <div
          className="card shadow"
          style={{
            marginLeft: "12%",
            marginRight: "12%",
            paddingLeft: "2%",
            paddingRight: "2%",
            paddingBottom: "1.5%",
            borderWidth: "0px",
          }}
        >
          <div className="card-body">
            <h4 className="card-title text-center">AIM</h4>
            <p className="card-text" align="justify">
              Somaiya Machine Learning Research Association (SMLRA) is a
              community aimed at fostering Machine Learning and Deep Learning
              Research culture within KJSCE, after being inspired by similar
              communities in top universities like MIT, Stanford, IIT-Bombay,
              etc. This community is formed to enhance the understanding,
              knowledge, experience, and coordination among like-minded and
              self-inspired students and professors.
              <br />
              <br />
              SMLRA is focused on developing the researcher-student
              relationship. SMLRA provides an environment for both practical and
              intellectual development of ideas and concepts in Artificial
              Intelligence (AI), Machine Learning (ML) and Deep Learning (DL).
              It organizes activities like speaker sessions by industry and
              academia, symposiums, research paper reading sessions, workshops
              and conferences that help inculcate the research culture and also
              help the students explore more domains and contribute to the field
              of AI that will be driving the revolution of Industry 4.0.
            </p>
          </div>
        </div>
        <div
          className="card shadow"
          style={{
            marginLeft: "12%",
            marginRight: "12%",
            marginTop: "8%",
            marginBottom: "8%",
            paddingLeft: "2%",
            paddingRight: "2%",
            paddingBottom: "1.5%",
            borderWidth: "0px",
          }}
        >
          <div className="card-body">
            <h4 className="card-title text-center">Vision and Mission</h4>
            <p className="card-text" align="justify">
              In the past years, many top universities around the world have
              become research hubs for Artificial Intelligence, contributing and
              pushing the line to where it is now. There is an increasing growth
              of research in the field of machine learning and deep learning
              like NLP, image analysis, audio processing, etc. Hence, the
              creation of a proper research environment, for the practical and
              intellectual growth in this field assumes importance. <br />
              <br />
              Majority of the final year projects in our university are
              product-oriented instead of being research-oriented. Also, our
              in-house research projects are limited to topics which are already
              taken up by many other institutions due to our lack of expertise
              in the field of machine learning. This is why we strive to bring
              domain-specific research experts to our institution at a regular
              basis with the aim of building student-researcher relationships,
              exposing students to pragmatic approaches in machine learning
              within the institution and beyond, and finally to cultivate the
              research environment. <br />
              <br />
              Our main vision lies in accomplishing the following: <br />
            </p>
            <ul style={{ paddingLeft: "20px" }}>
              <li>
                Inculcate interest in the field of Artificial Intelligence at
                both student-level and professor-level.
              </li>
              <li>
                Promoting research orientation in Machine Learning &amp;
                Artificial Intelligence.
              </li>
              <li>
                Bolstering students to attain deep insights with the aid of
                Research Symposiums.
              </li>
              <li>Supporting student research &amp; projects.</li>
              <li>
                Providing a community and direct interaction with researchers.
              </li>
            </ul>
            <p />
          </div>
        </div>
      </section>
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
                  <i className="fas fa-map-marker mx-0" /> KJSCE, Mumbai,
                  Maharashtra, India
                </a>{" "}
              </p>
              <br />
              <p style={{ color: "black", fontSize: "90%" }}>
                <a
                  href="mailto: smlra-kjsce@somaiya.edu"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-envelope" />{" "}
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
                    <i className="fab fa-github fa-2x"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-dribbble mx-1"
                    href="https://smlra_kjsce.medium.com"
                  >
                    <i className="fab fa-medium fa-2x"> </i>
                  </a>
                </li>
                <li className="list-inline-item" style={{ color: "#0bebf3" }}>
                  <a
                    className="btn-floating btn-tw mx-1"
                    href="https://twitter.com/smlra_kjsce"
                  >
                    <i className="fab fa-twitter fa-2x"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-li mx-1"
                    href="https://www.linkedin.com/company/smlra-kjsce/"
                  >
                    <i className="fab fa-linkedin fa-2x"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-fb mx-1"
                    href="https://www.facebook.com/smlrakjsce/"
                  >
                    <i className="fab fa-facebook fa-2x"> </i>
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
