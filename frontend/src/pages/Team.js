import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MemberProfile from "../components/MemberProfile";
import Header from "../components/Header";

import team from "../static/Images/team.svg";

import swatimaam from "../static/Images/profile_pics/swati maam.jpg";
import vaibhavsir from "../static/Images/profile_pics/vaibhav sir.jpg";

import alekhya from "../static/Images/profile_pics/Alekhya.jpg";
import jiya from "../static/Images/profile_pics/Jiya.jpg";
import mishtee from "../static/Images/profile_pics/Mishtee.jpg";
import himanshu from "../static/Images/profile_pics/Himanshu.jpg";
import kedar from "../static/Images/profile_pics/Kedar.jpg";

import shubham from "../static/Images/profile_pics/shubham.jpg";
import jatin from "../static/Images/profile_pics/jatin.png";
import jenson from "../static/Images/profile_pics/jenson.jpg";
import riya from "../static/Images/profile_pics/riya.png";
import burhanuddin from "../static/Images/profile_pics/burhanuddin.png";

import arghyadeep from "../static/Images/profile_pics/Arghyadeep.jpg";
import nikhil from "../static/Images/profile_pics/Nikhil.jpeg";
import mayank from "../static/Images/profile_pics/Mayank.jpg";
import rahil from "../static/Images/profile_pics/Rahil.jpg";
import tejas from "../static/Images/profile_pics/tejas.jpg";
import aayush from "../static/Images/profile_pics/Aayush.jpg";

import jasdeep from "../static/Images/profile_pics/jasdeep.jpeg";
import sarfaraz from "../static/Images/profile_pics/sarfaraz.jpeg";
import satyajit from "../static/Images/profile_pics/satyajit.jpg";

export default function Team() {
  return (
    <div className="fonts">
      <Navbar />
      <Header
        title="TEAM"
        body="“Teamwork is the ability to work together toward a common vision.
        The ability to direct individual accomplishments toward
        organizational objectives. It is the fuel that allows common people
        to attain uncommon results.” - Andrew Carnegie"
        photo={team}
      ></Header>

      <section className="team" style={{ margin: "1%", marginBottom: "7%" }}>
        <h1 className="text-center">FACULTY CO-ORDINATORS</h1>
        <div className="row" style={{ marginTop: "3%" }}>
          <MemberProfile
            name="Prof. Swati Mali"
            photo={swatimaam}
            university="https://kjsce.somaiya.edu/en/view-member/160065?type=faculty"
            linkedin="https://www.linkedin.com/in/swati-mali-4948b453/"
            coltype="col-lg-6"
          ></MemberProfile>
          <MemberProfile
            name="Prof. Vaibhav Vasani"
            photo={vaibhavsir}
            university="https://kjsce.somaiya.edu/en/view-member/160999?type=faculty"
            linkedin="https://www.linkedin.com/in/vaibhav-vasani-460a4162/"
            github="https://github.com/vaibhavvasani/"
            coltype="col-lg-6"
          ></MemberProfile>
        </div>
        <h1 className="text-center">LEAD MENTORS</h1>
        <div className="row" style={{ marginTop: "3%" }}>
          <MemberProfile
            name="Mayank Chowdhary"
            photo={mayank}
            instagram="https://www.instagram.com/mayank06302618/"
            linkedin="https://www.linkedin.com/in/mayankchowdhary/"
            github="https://github.com/m607stars"
            coltype="col-md-6"
          ></MemberProfile>
          <MemberProfile
            name="Rahil Parikh"
            photo={rahil}
            instagram="hhttps://www.instagram.com/rahil_parikh_/"
            linkedin="https://www.linkedin.com/in/rahilparikh007"
            github="https://github.com/Rahil-Parikh"
            coltype="col-md-6"
          ></MemberProfile>
        </div>
        <h1 className="text-center" style={{ margin: "3%" }}>
          COMMUNITY MENTORS
        </h1>
        <div className="row" style={{ marginTop: "5%" }}>
          <MemberProfile
            name="Jatin Nainani"
            photo={jatin}
            instagram="https://www.instagram.com/jatinnainani56/"
            linkedin="https://www.linkedin.com/in/jatin-nainani-a6b2331b3/"
            github="https://github.com/NainaniJatinZ"
            coltype="col-md-4"
          ></MemberProfile>
          <MemberProfile
            name="Riya Gori"
            photo={riya}
            instagram="https://www.instagram.com/riya_gori/"
            linkedin="https://www.linkedin.com/in/riya-gori/"
            github="https://github.com/riyagori1203"
            coltype="col-md-4"
          ></MemberProfile>
          <MemberProfile
            name="Burhanuddin Rangwala"
            photo={burhanuddin}
            linkedin="https://www.linkedin.com/in/burhanuddin-rangwala-33a07a1a0/"
            github="https://github.com/bamblebam"
            coltype="col-md-4"
          ></MemberProfile>
        </div>
        <h1 className="text-center">AI PROMOTERS</h1>
        <div className="row" style={{ marginTop: "3%" }}>
          <MemberProfile
            name="Jenson Joseph"
            photo={jenson}
            linkedin="https://www.linkedin.com/in/jenson-joseph-248479219/"
            github="https://github.com/JJsupercoder"
            coltype="col-md-6"
          ></MemberProfile>
          <MemberProfile
            name="Shubham Varma"
            photo={shubham}
            instagram="https://www.instagram.com/shubham17varma/"
            linkedin="https://www.linkedin.com/in/shubham-varma-r17092001/"
            github="https://github.com/shubham17varma"
            coltype="col-md-6"
          ></MemberProfile>
        </div>
        <br />
        <br />
        <h1 className="text-center" style={{ marginBottom: "2%" }}>
          PAST COUNCILS
        </h1>
        <div className="accordion " id="accordionExample">
          <div className="bg-dark text-center">
            <div
              className="card-header border-light border"
              id="heading2020"
              style={{ padding: 0 }}
            >
              <h1 className="mb-0" style={{ fontSize: "xx-large" }}>
                <button
                  className="btn btn-link border-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse2020"
                  aria-expanded="false"
                  aria-controls="collapse2020"
                  style={{ fontSize: "80%" }}
                >
                  2020-21
                </button>
              </h1>
            </div>
            <div
              id="collapse2020"
              className="collapse"
              aria-labelledby="heading2020"
              data-parent="#accordionExample"
            >
              <div className="card-body bg-light">
                <h1 className="text-center">LEAD MENTOR</h1>
                <div className="row" style={{ marginTop: "3%" }}>
                  <MemberProfile
                    name="Arghyadeep Das"
                    photo={arghyadeep}
                    instagram="https://www.instagram.com/third_root_of_quadratic_eqn"
                    linkedin="https://www.linkedin.com/in/arghyadeep-das/"
                    github="https://www.github.com/arghyadeep99"
                    coltype="col-lg-12"
                  ></MemberProfile>
                </div>
                <h1 className="text-center" style={{ margin: "3%" }}>
                  COMMUNITY MENTORS
                </h1>
                <div className="row" style={{ marginTop: "5%" }}>
                  <MemberProfile
                    name="Mayank Chowdhary"
                    photo={mayank}
                    instagram="https://www.instagram.com/mayank06302618/"
                    linkedin="https://www.linkedin.com/in/mayankchowdhary/"
                    github="https://github.com/m607stars"
                    coltype="col-md-4"
                  ></MemberProfile>
                  <MemberProfile
                    name="Tejas Khanolkar"
                    photo={tejas}
                    instagram="https://www.instagram.com/tejas.00/"
                    linkedin="https://www.linkedin.com/in/tejas-khanolkar-a04733192/"
                    github="https://github.com/tejas2008"
                    coltype="col-md-4"
                  ></MemberProfile>
                  <MemberProfile
                    name="Rahil Parikh"
                    photo={rahil}
                    instagram="hhttps://www.instagram.com/rahil_parikh_/"
                    linkedin="https://www.linkedin.com/in/rahilparikh007"
                    github="https://github.com/Rahil-Parikh"
                    coltype="col-md-4"
                  ></MemberProfile>
                </div>
                <h1 className="text-center" style={{ margin: "3%" }}>
                  AI PROMOTER
                </h1>
                <div>
                  <MemberProfile
                    name="Aayush Chheda"
                    photo={aayush}
                    linkedin="https://www.linkedin.com/in/aayush-chheda-6049461a9/"
                    github="https://github.com/Aayush-Chheda"
                    coltype="col-lg-12"
                  ></MemberProfile>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark text-center">
            <div
              className="card-header border-light border"
              id="heading2019"
              style={{ padding: 0 }}
            >
              <h1 className="mb-0" style={{ fontSize: "xx-large" }}>
                <button
                  className="btn btn-link border-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse2019"
                  aria-expanded="false"
                  aria-controls="collapse2019"
                  style={{ fontSize: "80%" }}
                >
                  2019-20
                </button>
              </h1>
            </div>
            <div
              id="collapse2019"
              className="collapse"
              aria-labelledby="heading2019"
              data-parent="#accordionExample"
            >
              <div className="card-body bg-light">
                <h1 className="text-center" style={{ margin: "3%" }}>
                  LEAD MENTOR
                </h1>
                <MemberProfile
                  name="Jasdeep Singh Grover"
                  photo={jasdeep}
                  linkedin="https://www.linkedin.com/in/jasdeep-singh-grover-80a6b4149/"
                  github="https://github.com/jasdeep100"
                  coltype="col-lg-12"
                ></MemberProfile>
                <h1 className="text-center">COMMUNITY MENTORS</h1>
                <div className="row" style={{ marginTop: "3%" }}>
                  <MemberProfile
                    name="Arghyadeep Das"
                    photo={arghyadeep}
                    instagram="https://www.instagram.com/third_root_of_quadratic_eqn"
                    linkedin="https://www.linkedin.com/in/arghyadeep-das/"
                    github="https://www.github.com/arghyadeep99"
                    coltype="col-lg-6"
                  ></MemberProfile>
                  <MemberProfile
                    name="Nikhil Bhardwaj"
                    photo={nikhil}
                    instagram="https://www.instagram.com/pahari.momo"
                    linkedin="https://www.linkedin.com/in/nik9hil/"
                    github="https://www.github.com/nik9hil"
                    coltype="col-lg-6"
                  ></MemberProfile>
                </div>
                <h1 className="text-center">AI PROMOTERS</h1>
                <div className="row" style={{ marginTop: "3%" }}>
                  <MemberProfile
                    name="Mayank Chowdhary"
                    photo={mayank}
                    instagram="https://www.instagram.com/mayank06302618/"
                    linkedin="https://www.linkedin.com/in/mayankchowdhary/"
                    github="https://github.com/m607stars"
                    coltype="col-lg-6"
                  ></MemberProfile>
                  <MemberProfile
                    name="Rahil Parikh"
                    photo={rahil}
                    instagram="hhttps://www.instagram.com/rahil_parikh_/"
                    linkedin="https://www.linkedin.com/in/rahilparikh007"
                    github="https://github.com/Rahil-Parikh"
                    coltype="col-lg-6"
                  ></MemberProfile>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark text-center ">
            <div
              className="card-header border-light border"
              id="heading2018"
              style={{ padding: 0 }}
            >
              <h1 className="mb-0" style={{ fontSize: "xx-large" }}>
                <button
                  className="btn btn-link border-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse2018"
                  aria-expanded="false"
                  aria-controls="collapse2018"
                  style={{ fontSize: "80%" }}
                >
                  2018-19
                </button>
              </h1>
            </div>
            <div
              id="collapse2018"
              className="collapse show"
              aria-labelledby="heading2018"
              data-parent="#accordionExample"
            >
              <div className="card-body bg-light">
                <h1 className="text-center" style={{ margin: "3%" }}>
                  FOUNDING MEMBERS
                </h1>
                <div className="row" style={{ marginTop: "5%" }}>
                  <MemberProfile
                    name="Sarfaraz Iraqui"
                    photo={sarfaraz}
                    instagram="https://www.instagram.com/sziraqui/"
                    linkedin="https://www.linkedin.com/in/sziraqui/"
                    github="https://github.com/sziraqui"
                    coltype="col-md-4"
                  ></MemberProfile>
                  <MemberProfile
                    name="Satyajit Kamble"
                    photo={satyajit}
                    instagram="https://www.instagram.com/satya_2797/"
                    linkedin="https://www.linkedin.com/in/satyajitsk/"
                    github="https://github.com/satyaSK"
                    coltype="col-md-4"
                  ></MemberProfile>
                  <MemberProfile
                    name="Jasdeep Singh Grover"
                    photo={jasdeep}
                    linkedin="https://www.linkedin.com/in/jasdeep-singh-grover-80a6b4149/"
                    github="https://github.com/jasdeep100"
                    coltype="col-md-4"
                  ></MemberProfile>
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
