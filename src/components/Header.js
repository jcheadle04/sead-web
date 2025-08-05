import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="band-name">SEAD</div>

      <nav
        className={`nav-menu ${menuOpen ? "open" : ""}`}
        aria-label="Primary navigation"
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </nav>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </header>
  );
};

export default Header;
