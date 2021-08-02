import React from "react";
import pic from "../static/Images/pic.png";
// import { Link } from "react-router";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "black" }}
    >
      <Link className="navbar-brand" to="/" exact>
        <img
          className="navbar-left"
          src={pic}
          alt="smlra"
          style={{ width: "8%", height: "5%" }}
        />
      </Link>
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
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/"
            exact
            style={{ paddingRight: "11%" }}
          >
            Home
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/about"
            exact
            style={{ paddingRight: "11%" }}
          >
            About
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/blogs"
            exact
            style={{ paddingRight: "11%" }}
          >
            Blogs
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/initiatives"
            exact
            style={{ paddingRight: "11%" }}
          >
            Initiatives
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/team"
            exact
            style={{ paddingRight: "11%" }}
          >
            Team
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/contact"
            exact
            style={{ paddingRight: "11%" }}
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
