import React from "react";
import { Link } from "react-router-dom";

import pic from "../static/Images/pic.png";

export default function Footer() {
  return (
    <section
      className="footer"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <footer
        className="page-footer font-small stylish-color-dark pt-4"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="row" style={{ marginLeft: "1px", marginRight: "15px" }}>
          <div className="col-md-4 mx-auto text-center">
            <center>
              <Link className="navbar-brand" to="/" exact>
                <img
                  className="navbar-left"
                  src={pic}
                  alt="smlra"
                  style={{ width: "20%", height: "20%" }}
                />
              </Link>
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
              <a href="./contact" style={{ textDecoration: "none" }}>
                <i className="fa fa-map-marker mx-0" /> KJSCE, Mumbai,
                Maharashtra, India
              </a>
            </p>
            <br />
            <p style={{ color: "black", fontSize: "90%" }}>
              <a
                href="mailto: smlra-kjsce@somaiya.edu"
                style={{ textDecoration: "none" }}
              >
                <i className="fa fa-envelope" /> <u>smlra-kjsce@somaiya.edu</u>
              </a>
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
                  className="btn-floating btn-fb mx-1"
                  href="https://discord.gg/qmXk6bMc"
                >
                  <i className="fab fa-discord fa-2x"> </i>
                </a>
              </li>
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
                  href="https://smlra-kjsce.medium.com"
                >
                  <i className="fab fa-medium fa-2x"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-fb mx-1"
                  href="https://www.instagram.com/smlra_kjsce/"
                >
                  <i className="fab fa-instagram fa-2x"> </i>
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
            </ul>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          <p>
            © 2021. Developed and Maintained by
            <strong style={{ color: "wheat" }}> SMLRA</strong>
          </p>
        </div>
      </footer>
    </section>
  );
}
