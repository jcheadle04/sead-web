// src/Home.js
import React from "react";

const Home = () => {
  return (
    <div style={{ padding: "0 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Welcome to Our World
      </h2>
      <p style={{ fontSize: "1.1rem" }}>Watch us perform. Feel the sound.</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/zwfjVzV1fA0
"
          title="SEAD Live 1"
          frameBorder="0"
          style={{
            border: "2px solid #6a00f4",
            borderRadius: "10px",
            boxShadow: "0 0 20px #6a00f4",
          }}
          allowFullScreen
        ></iframe>

        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/MWH94w-wcUg"
          title="SEAD Live 2"
          frameBorder="0"
          style={{
            border: "2px solid #ff6ec4",
            borderRadius: "10px",
            boxShadow: "0 0 20px #ff6ec4",
          }}
          allowFullScreen
        ></iframe>
      </div>

      <h3 style={{ marginTop: "3rem" }}>Live from the Crowd</h3>
      <img
        src={process.env.PUBLIC_URL + "/s.jpg"}
        alt="Sead in front of the crowd"
        style={{
          marginTop: "10px",
          maxWidth: "50%",
          borderRadius: "12px",
          boxShadow: "0 0 25px #333",
        }}
      />
    </div>
  );
};

export default Home;
