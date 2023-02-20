import React, { Component } from "react";
import "./nav.css";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <a className="logo-container" href="#">
          <img src={logo} alt="Logo" />
          Wissam's Library
        </a>
        <div className="navigation-section">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/books" className="link">
            Books
          </NavLink>
          <NavLink to="/about" className="link">
            About
          </NavLink>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </div>
        <button className="admin-login">Admin Login</button>
      </nav>
    );
  }
}

export default Nav;
