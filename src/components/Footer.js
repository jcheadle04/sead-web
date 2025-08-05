import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav" aria-label="Footer navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>
      <div className="footer-text">
        <p>© SEAD LLC 2025</p>
        <p>All rights reserved. Powered by passion and raw energy.</p>
      </div>
    </footer>
  );
};

export default Footer;
