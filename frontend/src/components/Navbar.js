import React from "react";
import { NavLink, Link } from "react-router-dom";

import pic from "../static/Images/pic.png";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-xl navbar-dark"
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
            style={{ paddingRight: "8%" }}
          >
            Home
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/about"
            exact
            style={{ paddingRight: "8%" }}
          >
            About
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/blogs"
            exact
            style={{ paddingRight: "8%" }}
          >
            Blogs
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/initiatives"
            exact
            style={{ paddingRight: "8%" }}
          >
            Initiatives
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/resources"
            exact
            style={{ paddingRight: "8%" }}
          >
            Resources
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/team"
            exact
            style={{ paddingRight: "8%" }}
          >
            Team
          </NavLink>
          <NavLink
            className="navbar-item nav-link"
            activeClassName="active"
            to="/contact"
            exact
            style={{ paddingRight: "8%" }}
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
