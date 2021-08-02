import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import team3 from "../static/Images/team3.svg";
import jasdeep from "../static/Images/profile_pics/jasdeep.jpeg";
import swatimaam from "../static/Images/profile_pics/swati maam.jpg";
import vaibhavsir from "../static/Images/profile_pics/vaibhav sir.jpg";
import arghyadeep from "../static/Images/profile_pics/Arghyadeep1.jpg";
import nikhil from "../static/Images/profile_pics/Nikhil.jpeg";
import mayank from "../static/Images/profile_pics/Mayank.jpg";
import rahil from "../static/Images/profile_pics/Rahil.jpg";
import tejas from "../static/Images/profile_pics/tejas2.jpg";
import aayush from "../static/Images/profile_pics/Aayush.jpg";
import sarfaraz from "../static/Images/profile_pics/sarfaraz.jpeg";
import satyajit from "../static/Images/profile_pics/satyajit.jpg";

export default function Team() {
  return (
    <div className="fonts">
      <Navbar />
      <div className="row" style={{ margin: "10%", marginBottom: 0 }}>
        <div className="col">
          <img
            src="./Images/team3.svg"
            alt="blog"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div className="col" style={{ padding: "7%", textAlign: "center" }}>
          <p style={{ paddingTop: "1%", fontSize: "xx-large" }}>TEAM</p>
          {/* <hr style="background-color: black; width: 50%;"> */}
          <p style={{ fontSize: "large" }} className="ill-text-team">
            "Teamwork is the ability to work together toward a common vision.
            The ability to direct individual accomplishments toward
            organizational objectives. It is the fuel that allows common people
            to attain uncommon results." – Andrew Carnegie
          </p>
          <p />
        </div>
      </div>
      <section className="team" style={{ margin: "1%", marginBottom: "7%" }}>
        <h1 className="text-center">FACULTY CO-ORDINATORS</h1>
        <div className="row" style={{ marginTop: "3%" }}>
          <div
            className="col-lg-6"
            style={{ textAlign: "center", marginBottom: "5%" }}
          >
            <img
              src="./Images/profile_pics/swati maam.jpg"
              className="mx-auto rounded-circle"
              style={{ verticalAlign: "auto", width: "13rem" }}
            />
            <h5 style={{ marginTop: "2%" }}>
              <b>Prof. Swati Mali</b>
            </h5>
            <a
              href="https://kjsce.somaiya.edu/en/view-member/160065?type=faculty"
              target="_blank"
            >
              <i
                className="fas fa-university fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a
              href="https://www.linkedin.com/in/swati-mali-4948b453/"
              target="_blank"
            >
              <i
                className="fab fa-linkedin fa-2x"
                style={{ color: "#330066" }}
              />
            </a>
          </div>
          <div
            className="col-lg-6"
            style={{ textAlign: "center", marginBottom: "5%" }}
          >
            <img
              src="./Images/profile_pics/vaibhav sir.jpg"
              className="mx-auto rounded-circle"
              style={{ width: "13rem", height: "13rem" }}
            />
            <h5 style={{ marginTop: "2%" }}>
              <b>Prof. Vaibhav Vasani</b>
            </h5>
            <a
              href="https://kjsce.somaiya.edu/en/view-member/160999?type=faculty"
              target="_blank"
            >
              <i
                className="fas fa-university fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a
              href="https://www.linkedin.com/in/vaibhav-vasani-460a4162/"
              target="_blank"
            >
              <i
                className="fab fa-linkedin fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a href="https://github.com/vaibhavvasani/" target="_blank">
              <i
                className="fab fa-github-square fa-2x"
                style={{ color: "#330066" }}
              />
            </a>
          </div>
        </div>
        <h1 className="text-center">LEAD MENTORS</h1>
        <div className="row" style={{ marginTop: "3%" }}>
          <div
            className="col-lg-6"
            style={{ textAlign: "center", marginBottom: "5%" }}
          >
            <img
              src="./Images/profile_pics/Arghyadeep1.jpg"
              className="mx-auto rounded-circle"
              style={{ verticalAlign: "auto", width: "13rem" }}
            />
            <h5 style={{ marginTop: "2%" }}>
              <b>Arghyadeep Das</b>
            </h5>
            <a href="https://www.github.com/arghyadeep99" target="_blank">
              <i
                className="fab fa-github-square fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a
              href="https://www.instagram.com/third_root_of_quadratic_eqn"
              target="_blank"
            >
              <i
                className="fab fa-instagram fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a
              href="https://www.linkedin.com/in/arghyadeep-das/"
              target="_blank"
            >
              <i
                className="fab fa-linkedin fa-2x"
                style={{ color: "#330066" }}
              />
            </a>
          </div>
          <div
            className="col-lg-6"
            style={{ textAlign: "center", marginBottom: "5%" }}
          >
            <img
              src="./Images/profile_pics/Nikhil.jpeg"
              className="mx-auto rounded-circle"
              style={{ width: "13rem", height: "13rem" }}
            />
            <h5 style={{ marginTop: "2%" }}>
              <b>Nikhil Bhardwaj</b>
            </h5>
            <a href="https://www.github.com/nik9hil" target="_blank">
              <i
                className="fab fa-github-square fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a href="https://www.instagram.com/pahari.momo" target="_blank">
              <i
                className="fab fa-instagram fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a href="https://www.linkedin.com/in/nik9hil/" target="_blank">
              <i
                className="fab fa-linkedin fa-2x"
                style={{ color: "#330066" }}
              />
            </a>
          </div>
        </div>
        <h1 className="text-center" style={{ margin: "3%" }}>
          COMMUNITY MENTORS
        </h1>
        <div className="row" style={{ marginTop: "5%" }}>
          <div
            className="col-md-4"
            style={{ textAlign: "center", marginBottom: "5%" }}
          >
            <img
              src="./Images/profile_pics/Mayank.jpg"
              className="mx-auto rounded-circle"
              style={{ width: "13rem", height: "13rem" }}
            />
            <h5 style={{ marginTop: "2%" }}>
              <b>Mayank Chowdhary</b>
            </h5>
            <a href="https://github.com/m607stars" target="_blank">
              <i
                className="fab fa-github-square fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a href="https://www.instagram.com/mayank06302618/" target="_blank">
              <i
                className="fab fa-instagram fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a
              href="https://www.linkedin.com/in/mayankchowdhary/"
              target="_blank"
            >
              <i
                className="fab fa-linkedin fa-2x"
                style={{ color: "#330066" }}
              />
            </a>
          </div>
          <div
            className="col-md-4"
            style={{ textAlign: "center", marginBottom: "5%" }}
          >
            <img
              src="./Images/profile_pics/tejas2.jpg"
              className="mx-auto rounded-circle"
              style={{ width: "13rem", height: "13rem" }}
            />
            <h5 style={{ marginTop: "2%" }}>
              <b>Tejas Khanolkar</b>
            </h5>
            <a href="https://github.com/tejas2008" target="_blank">
              <i
                className="fab fa-github-square fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a href="https://www.instagram.com/tejas.00/" target="_blank">
              <i
                className="fab fa-instagram fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a
              href="https://www.linkedin.com/in/tejas-khanolkar-a04733192/"
              target="_blank"
            >
              <i
                className="fab fa-linkedin fa-2x"
                style={{ color: "#330066" }}
              />
            </a>
          </div>
          <div
            className="col-md-4"
            style={{ textAlign: "center", marginBottom: "5%" }}
          >
            <img
              src="./Images/profile_pics/Rahil.jpg"
              className="mx-auto rounded-circle"
              style={{ width: "13rem", height: "13rem" }}
            />
            <h5 style={{ marginTop: "2%" }}>
              <b>Rahil Parikh</b>
            </h5>
            <a href="https://github.com/Rahil-Parikh" target="_blank">
              <i
                className="fab fa-github-square fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a href="hhttps://www.instagram.com/rahil_parikh_/" target="_blank">
              <i
                className="fab fa-instagram fa-2x"
                style={{ color: "#330066" }}
              />
            </a>{" "}
            &nbsp; &nbsp;{" "}
            <a
              href="https://www.linkedin.com/in/rahilparikh007"
              target="_blank"
            >
              <i
                className="fab fa-linkedin fa-2x"
                style={{ color: "#330066" }}
              />
            </a>
          </div>
        </div>
        <h1 className="text-center" style={{ margin: "3%" }}>
          AI PROMOTER
        </h1>
        <div
          className="col-lg-12"
          style={{ textAlign: "center", marginBottom: "5%" }}
        >
          <img
            src="./Images/profile_pics/Aayush.jpg"
            className="mx-auto rounded-circle"
            style={{ width: "13rem", height: "13rem" }}
          />
          <h5 style={{ marginTop: "2%" }}>
            <b>Aayush Chheda</b>
          </h5>
          <a href="https://github.com/Aayush-Chheda" target="_blank">
            <i
              className="fab fa-github-square fa-2x"
              style={{ color: "#330066" }}
            />
          </a>{" "}
          &nbsp; &nbsp;{" "}
          <a
            href="https://www.linkedin.com/in/aayush-chheda-6049461a9/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x" style={{ color: "#330066" }} />
          </a>
        </div>
        <br />
        <br />
        <h1 className="text-center" style={{ marginBottom: "2%" }}>
          PAST COUNCILS{" "}
        </h1>
        <div className="accordion " id="accordionExample">
          <div className="bg-dark text-center">
            <div
              className="card-header border-light border"
              id="headingTwo"
              style={{ padding: 0 }}
            >
              <h1 className="mb-0" style={{ fontSize: "xx-large" }}>
                <button
                  className="btn btn-link border-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ fontSize: "80%" }}
                >
                  2019-20
                </button>
              </h1>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body bg-light">
                <h1 className="text-center" style={{ margin: "3%" }}>
                  LEAD MENTOR
                </h1>
                <div
                  className="col-lg-12"
                  style={{ textAlign: "center", marginBottom: "5%" }}
                >
                  <img
                    src="Images\profile_pics\jasdeep.jpeg"
                    className="mx-auto rounded-circle"
                    style={{ width: "13rem", height: "13rem" }}
                  />
                  <h5 style={{ marginTop: "2%" }}>
                    <b>Jasdeep Singh Grover</b>
                  </h5>
                  <a href="https://github.com/jasdeep100" target="_blank">
                    <i
                      className="fab fa-github-square fa-2x"
                      style={{ color: "#330066" }}
                    />
                  </a>{" "}
                  &nbsp; &nbsp;{" "}
                  <a
                    href="https://www.linkedin.com/in/jasdeep-singh-grover-80a6b4149/"
                    target="_blank"
                  >
                    <i
                      className="fab fa-linkedin fa-2x"
                      style={{ color: "#330066" }}
                    />
                  </a>
                </div>
                <h1 className="text-center">COMMUNITY MENTORS</h1>
                <div className="row" style={{ marginTop: "3%" }}>
                  <div
                    className="col-lg-6"
                    style={{ textAlign: "center", marginBottom: "5%" }}
                  >
                    <img
                      src="./Images/profile_pics/Arghyadeep1.jpg"
                      className="mx-auto rounded-circle"
                      style={{ verticalAlign: "auto", width: "13rem" }}
                    />
                    <h5 style={{ marginTop: "2%" }}>
                      <b>Arghyadeep Das</b>
                    </h5>
                    <a
                      href="https://www.github.com/arghyadeep99"
                      target="_blank"
                    >
                      <i
                        className="fab fa-github-square fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>{" "}
                    &nbsp; &nbsp;{" "}
                    <a
                      href="https://www.instagram.com/third_root_of_quadratic_eqn"
                      target="_blank"
                    >
                      <i
                        className="fab fa-instagram fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>{" "}
                    &nbsp; &nbsp;{" "}
                    <a
                      href="https://www.linkedin.com/in/arghyadeep-das/"
                      target="_blank"
                    >
                      <i
                        className="fab fa-linkedin fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>
                  </div>
                  <div
                    className="col-lg-6"
                    style={{ textAlign: "center", marginBottom: "5%" }}
                  >
                    <img
                      src="./Images/profile_pics/Nikhil.jpeg"
                      className="mx-auto rounded-circle"
                      style={{ width: "13rem", height: "13rem" }}
                    />
                    <h5 style={{ marginTop: "2%" }}>
                      <b>Nikhil Bhardwaj</b>
                    </h5>
                    <a href="https://www.github.com/nik9hil" target="_blank">
                      <i
                        className="fab fa-github-square fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>{" "}
                    &nbsp; &nbsp;{" "}
                    <a
                      href="https://www.instagram.com/pahari.momo"
                      target="_blank"
                    >
                      <i
                        className="fab fa-instagram fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>{" "}
                    &nbsp; &nbsp;{" "}
                    <a
                      href="https://www.linkedin.com/in/nik9hil/"
                      target="_blank"
                    >
                      <i
                        className="fab fa-linkedin fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>
                  </div>
                </div>
                <h1 className="text-center">AI PROMOTERS</h1>
                <div className="row" style={{ marginTop: "3%" }}>
                  <div
                    className="col-lg-6"
                    style={{ textAlign: "center", marginBottom: "5%" }}
                  >
                    <img
                      src="./Images/profile_pics/Mayank.jpg"
                      className="mx-auto rounded-circle"
                      style={{ width: "13rem", height: "13rem" }}
                    />
                    <h5 style={{ marginTop: "2%" }}>
                      <b>Mayank Chowdhary</b>
                    </h5>
                    <a href="https://github.com/m607stars" target="_blank">
                      <i
                        className="fab fa-github-square fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>{" "}
                    &nbsp; &nbsp;{" "}
                    <a
                      href="https://www.instagram.com/mayank06302618/"
                      target="_blank"
                    >
                      <i
                        className="fab fa-instagram fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>{" "}
                    &nbsp; &nbsp;{" "}
                    <a
                      href="https://www.linkedin.com/in/mayankchowdhary/"
                      target="_blank"
                    >
                      <i
                        className="fab fa-linkedin fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>
                  </div>
                  <div
                    className="col-lg-6"
                    style={{ textAlign: "center", marginBottom: "5%" }}
                  >
                    <img
                      src="./Images/profile_pics/Rahil.jpg"
                      className="mx-auto rounded-circle"
                      style={{ width: "13rem", height: "13rem" }}
                    />
                    <h5 style={{ marginTop: "2%" }}>
                      <b>Rahil Parikh</b>
                    </h5>
                    <a href="https://github.com/Rahil-Parikh" target="_blank">
                      <i
                        className="fab fa-github-square fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>{" "}
                    &nbsp; &nbsp;{" "}
                    <a
                      href="hhttps://www.instagram.com/rahil_parikh_/"
                      target="_blank"
                    >
                      <i
                        className="fab fa-instagram fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>{" "}
                    &nbsp; &nbsp;{" "}
                    <a
                      href="https://www.linkedin.com/in/rahilparikh007"
                      target="_blank"
                    >
                      <i
                        className="fab fa-linkedin fa-2x"
                        style={{ color: "#330066" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark text-center ">
              <div
                className="card-header border-light border"
                id="headingOne"
                style={{ padding: 0 }}
              >
                <h1 className="mb-0" style={{ fontSize: "xx-large" }}>
                  <button
                    className="btn btn-link border-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    style={{ fontSize: "80%" }}
                  >
                    2018-19
                  </button>
                </h1>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body bg-light">
                  <h1 className="text-center" style={{ margin: "3%" }}>
                    FOUNDING MEMBERS
                  </h1>
                  <div className="row" style={{ marginTop: "5%" }}>
                    <div
                      className="col-md-4"
                      style={{ textAlign: "center", marginBottom: "5%" }}
                    >
                      <img
                        src="Images\profile_pics\sarfaraz.jpeg"
                        className="mx-auto rounded-circle"
                        style={{ width: "13rem", height: "13rem" }}
                      />
                      <h5 style={{ marginTop: "2%" }}>
                        <b>Sarfaraz Iraqui</b>
                      </h5>
                      <a href="https://github.com/sziraqui" target="_blank">
                        <i
                          className="fab fa-github-square fa-2x"
                          style={{ color: "#330066" }}
                        />
                      </a>{" "}
                      &nbsp; &nbsp;{" "}
                      <a
                        href="https://www.instagram.com/sziraqui/"
                        target="_blank"
                      >
                        <i
                          className="fab fa-instagram fa-2x"
                          style={{ color: "#330066" }}
                        />
                      </a>{" "}
                      &nbsp; &nbsp;{" "}
                      <a
                        href="https://www.linkedin.com/in/sziraqui/"
                        target="_blank"
                      >
                        <i
                          className="fab fa-linkedin fa-2x"
                          style={{ color: "#330066" }}
                        />
                      </a>
                    </div>
                    <div
                      className="col-md-4"
                      style={{ textAlign: "center", marginBottom: "5%" }}
                    >
                      <img
                        src="Images\profile_pics\satyajit.jpg"
                        className="mx-auto rounded-circle"
                        style={{ width: "13rem", height: "13rem" }}
                      />
                      <h5 style={{ marginTop: "2%" }}>
                        <b>Satyajit Kamble</b>
                      </h5>
                      <a href="https://github.com/satyaSK" target="_blank">
                        <i
                          className="fab fa-github-square fa-2x"
                          style={{ color: "#330066" }}
                        />
                      </a>{" "}
                      &nbsp; &nbsp;{" "}
                      <a
                        href="https://www.instagram.com/satya_2797/"
                        target="_blank"
                      >
                        <i
                          className="fab fa-instagram fa-2x"
                          style={{ color: "#330066" }}
                        />
                      </a>{" "}
                      &nbsp; &nbsp;{" "}
                      <a
                        href="https://www.linkedin.com/in/satyajitsk/"
                        target="_blank"
                      >
                        <i
                          className="fab fa-linkedin fa-2x"
                          style={{ color: "#330066" }}
                        />
                      </a>
                    </div>
                    <div
                      className="col-md-4"
                      style={{ textAlign: "center", marginBottom: "5%" }}
                    >
                      <img
                        src="Images\profile_pics\jasdeep.jpeg"
                        className="mx-auto rounded-circle"
                        style={{ width: "13rem", height: "13rem" }}
                      />
                      <h5 style={{ marginTop: "2%" }}>
                        <b>Jasdeep Singh Grover</b>
                      </h5>
                      <a href="https://github.com/jasdeep100" target="_blank">
                        <i
                          className="fab fa-github-square fa-2x"
                          style={{ color: "#330066" }}
                        />
                      </a>{" "}
                      &nbsp; &nbsp;{" "}
                      <a
                        href="https://www.linkedin.com/in/jasdeep-singh-grover-80a6b4149/"
                        target="_blank"
                      >
                        <i
                          className="fab fa-linkedin fa-2x"
                          style={{ color: "#330066" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}