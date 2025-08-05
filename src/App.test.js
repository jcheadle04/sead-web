// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");

  // Change background color randomly on button click
  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <Router>
      <div
        style={{
          backgroundColor: bgColor,
          minHeight: "100vh",
          transition: "background-color 0.5s",
        }}
      >
        <header
          style={{
            padding: "20px",
            textAlign: "center",
            fontSize: "3em",
            fontWeight: "bold",
          }}
        >
          Sead
        </header>
        <nav style={{ textAlign: "center", marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>
            Home
          </Link>
          <Link to="/about" style={{ margin: "0 10px" }}>
            About Us
          </Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>
            Contact Us
          </Link>
        </nav>

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button
            onClick={changeColor}
            style={{ padding: "10px 20px", fontSize: "1em" }}
          >
            Change Background Color
          </button>
        </div>

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
