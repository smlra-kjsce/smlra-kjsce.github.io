import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../static/css/style.css";
import pic from "../static/Images/pic.png";
import Particle from "react-particles-js";
import particles from "../static/particles.json";

export default function Home() {
  return (
    <div className="fonts">
      <Navbar />
      <div id="particles-js">
        {/* <div class="container" style="margin-top: 9%;"> */}
        <Particle params={particles} className="particles_container" />
        <div
          className="btext"
          style={{ paddingLeft: "5%", whiteSpace: "wrap" }}
        >
          <img src={pic} alt="smlra" style={{ width: "15%", height: "15%" }} />
          <div>
            <h1
              style={{ color: "wheat", fontFamily: '"Montserrat", sans-serif' }}
            >
              <b>SMLRA</b>
            </h1>
          </div>
          <div>
            <p
              style={{
                color: "wheat",
                fontSize: "125%",
                fontFamily: '"Montserrat", sans-serif',
                lineHeight: "1.5",
              }}
            >
              <b>Somaiya Machine Learning Research Association</b>
            </p>
          </div>
          <br />
          <div>
            <p
              style={{
                color: "wheat",
                fontSize: "110%",
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              <i>"Where dedication meets research...."</i>
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}
