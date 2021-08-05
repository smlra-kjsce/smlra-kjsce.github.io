import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../static/css/style.css";
import contact from "../static/Images/contact.svg";
import kjsce from "../static/Images/kjsce.jpeg";

export default function Contact() {
  return (
    <div className="fonts">
      <Navbar />
      <div className="row" style={{ margin: "10%", marginBottom: 0 }}>
        <div className="col">
          <img
            src={contact}
            alt="blog"
            style={{ width: "100%", height: "70%" }}
            className="cnt-img"
          />
        </div>
        <div
          className="col"
          style={{ padding: "7%", textAlign: "center", paddingTop: "4%" }}
        >
          <p style={{ fontSize: "xx-large" }}>CONTACT US</p>
          {/* <hr style="background-color: black; width: 50%;"> */}
          <p style={{ fontSize: "large" }} className="ill-text-cnt">
            Looking forward to collaborate with us or volunteer with our
            community for an event? We are just a click away on any of our
            social medias channels, or just shoot us a mail and we would be
            happy to respond to your queries or collaborate on any new
            opportunities.
          </p>
        </div>
      </div>
      <section
        className="map"
        style={{ textAlign: "center", marginBottom: "5%" }}
      >
        <h2 style={{ marginBottom: "2%" }}>REACH US</h2>
        <div className="container1">
          <img
            src={kjsce}
            alt="Snow"
            style={{ width: "100%" }}
            className="clg-img"
          />
          <div className="bottom-left">
            <h3>Visit us at:</h3>
            <h4>KJSCE, Vidyavihar, Mumbai- 77.</h4>
            <br />
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7777383728508!2d72.89735661400321!3d19.073507387089325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0xb2fd3bcfeac0052a!2sK.%20J.%20Somaiya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1598375061206!5m2!1sen!2sin"
              width={600}
              height={600}
              frameBorder={0}
              style={{ border: 1 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
