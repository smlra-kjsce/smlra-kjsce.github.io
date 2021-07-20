import React from "react";
import pic from "../static/Images/pic.png";

export default function Navbar() {
  return (
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
  );
}
