import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Initiative from "../components/Initiative";
import "../static/css/style.css";
import pic from "../static/Images/pic.png";

import meme from "../static/Images/Events/meme.png";
import teach from "../static/Images/teach.svg";
import hackdcovid from "../static/Images/Events/hack-d-covid.jpeg";
import pytorch from "../static/Images/Events/pytorch.jpeg";
import ML101 from "../static/Images/Events/ML101.PNG";
import pieandai from "../static/Images/Events/pie-and-ai-1.jpeg";
import NLP101 from "../static/Images/Events/NLP-101.jpg";
import MLcyber from "../static/Images/Events/ML-Cyber.jpeg";
import resnet from "../static/Images/Events/resnet.jpg";
import GANs from "../static/Images/Events/GANs.jpg";
import mldl101 from "../static/Images/Events/mldl101.jpg";
import rnn from "../static/Images/Events/rnn.png";
import nlp from "../static/Images/Events/nlp.png";
import rishabh from "../static/Images/Events/rishabh.jpg";
import alexnet from "../static/Images/Events/alexnet.png";

export default function Resources() {
  return (
    <div className="fonts">
      <Navbar />
      <div className="row" style={{ margin: "10%", marginBottom: 0 }}>
        <div className="col">
          <img
            src={teach}
            alt="blog"
            style={{ width: "100%" }}
            className="ini-img"
          />
        </div>
        <div className="col" style={{ padding: "7%", textAlign: "center" }}>
          <p style={{ paddingTop: "1%", fontSize: "xx-large" }}>INITIATIVES</p>
          {/* <hr style="background-color: black; width: 50%;"> */}
          <p style={{ fontSize: "large" }} className="ill-text-ini">
            SMLRA has conducted various student-led symposiums, workshops,
            seminars, research paper reading groups and industrial presentation
            since its inception back in 2018. Here's a glimpse of the events we
            have conducted so far!
          </p>
          <p />
        </div>
      </div>
      <div id="Skills" style={{ paddingTop: "5px", marginBottom: "3%" }}>
        <div className=" p-5  container">
          <h2 className="display-4 pb-5 text-center ini-us">
            INITIATIVES BY US
          </h2>
          <ul
            className="nav nav-tabs nav-fill bg-dark rounded"
            id="myTab"
            role="tablist"
            style={{ marginBottom: "5%" }}
          >
            {/* <li className="nav-item">
              <a
                className="nav-link"
                id="skills-2021-tab"
                data-toggle="tab"
                href="#skills-2021"
                role="tab"
                aria-controls="skills-2021"
                aria-selected="false"
              >
                2021-22
              </a>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link active"
                id="tutorials-tab"
                data-toggle="tab"
                href="#tutorials"
                role="tab"
                aria-controls="tutorials"
                aria-selected="true"
              >
                Tutorials/Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="videos-tab"
                data-toggle="tab"
                href="#videos"
                role="tab"
                aria-controls="videos"
                aria-selected="false"
              >
                Videos/Talks
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="miscellaneous-tab"
                data-toggle="tab"
                href="#miscellaneous"
                role="tab"
                aria-controls="miscellaneous"
                aria-selected="false"
              >
                MIscellaneous
              </a>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            {/* <div
              className="tab-pane fade"
              id="skills-2021"
              role="tabpanel"
              aria-labelledby="skills-2021-tab"
            >
              <div className="card-deck">
                <Initiative />
                <Initiative />
              </div>
              <br />
              <div className="card-deck">
                <Initiative />
              </div>
            </div> */}
            <div
              className="tab-pane fade show active"
              id="tutorials"
              role="tabpanel"
              aria-labelledby="tutorials-tab"
            >
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
            </div>
            <div
              className="tab-pane fade"
              id="videos"
              role="tabpanel"
              aria-labelledby="videos-tab"
            >
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
            </div>
            <div
              className="tab-pane fade"
              id="miscellaneous"
              role="tabpanel"
              aria-labelledby="miscellaneous-tab"
            >
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
              <div>Resource</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
