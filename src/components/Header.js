import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Toggle hamburger menu open/close
  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="band-name" aria-label="Band name SEAD">
          SEAD
        </div>

        <nav
          id="primary-navigation"
          className={`nav-menu ${menuOpen ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          {["home", "music", "shows", "gallery", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1} // focusable only if menu is open (for accessibility)
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </header>

      {menuOpen && (
        <div className="overlay" onClick={closeMenu} aria-hidden="true"></div>
      )}
    </>
  );
};

export default Header;
