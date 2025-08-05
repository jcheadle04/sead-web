import React, { useState, useEffect } from "react";
import "./Header.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Music", href: "/music" },
  { name: "Shows", href: "/shows" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape press or clicking outside (optional)
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="logo" aria-label="Brand name SEAD">
          SEAD
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {name}
            </a>
          ))}
        </nav>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </header>

      {menuOpen && <div className="overlay" onClick={closeMenu} />}
    </>
  );
};

export default Header;
