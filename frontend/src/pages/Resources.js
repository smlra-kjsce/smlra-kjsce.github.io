import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Resource from "../components/Resource";

import "../static/css/style.css";
import teach from "../static/Images/teach.svg";

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
          <p style={{ paddingTop: "1%", fontSize: "xx-large" }}>RESOURCES</p>
          {/* <hr style="background-color: black; width: 50%;"> */}
          <p style={{ fontSize: "large" }} className="ill-text-ini">
            The quotidian question that we always encounter is: Where do I start in ML?
            Therefore, we have collected some resources that are periodically updated from time-to-time
            to cover a variety of aspects of ML including blogs and people to follow, courses to take and 
            papers to read!
          </p>
          <p />
        </div>
      </div>
      <div id="Skills" style={{ paddingTop: "5px", marginBottom: "3%" }}>
        <div className=" p-5  container">
          <h2 className="display-4 pb-5 text-center ini-us">Resources</h2>
          <ul
            className="nav nav-tabs nav-fill bg-dark rounded"
            id="myTab"
            role="tablist"
            style={{ marginBottom: "5%" }}
          >
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
                Tutorials/Courses/Playlist
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
                Blogs/Websites/People
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
                Papers to Read
              </a>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tutorials"
              role="tabpanel"
              aria-labelledby="tutorials-tab"
            >
              <Resource
                title="Andrew Ng Course on ML by Coursera"
                link="https://www.coursera.org/learn/machine-learning"
              ></Resource>
            </div>
            <div
              className="tab-pane fade"
              id="videos"
              role="tabpanel"
              aria-labelledby="videos-tab"
            >
              <Resource
                title="Andrew Ng Course on ML by Coursera"
                link="https://www.coursera.org/learn/machine-learning"
              ></Resource>
            </div>
            <div
              className="tab-pane fade"
              id="miscellaneous"
              role="tabpanel"
              aria-labelledby="miscellaneous-tab"
            >
              <Resource
                title="Andrew Ng Course on ML by Coursera"
                link="https://www.coursera.org/learn/machine-learning"
              ></Resource>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
