// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  const styles = {
    app: {
      backgroundColor: "#0f0f0f",
      color: "#f2f2f2",
      minHeight: "100vh",
      fontFamily: "Segoe UI, sans-serif",
    },
    header: {
      textAlign: "center",
      fontSize: "4rem",
      padding: "30px 0",
      background: "linear-gradient(to right, #6a00f4, #ff6ec4)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.1em",
    },

    nav: {
      textAlign: "center",
      marginBottom: "30px",
    },
    link: {
      color: "#a29bfe",
      textDecoration: "none",
      margin: "0 15px",
      fontSize: "1.2rem",
      transition: "color 0.3s",
    },
  };

  return (
    <Router>
      <div style={styles.app}>
        <header style={styles.header}>SEAD</header>

        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/about" style={styles.link}>
            About Us
          </Link>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
