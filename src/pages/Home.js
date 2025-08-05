import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-container">
      <section className="welcome-section">
        <div className="section-content">
          <h1>Welcome to SEAD's Official Website</h1>
          <p>
            Thanks for visiting! Dive into our music, check out our upcoming
            shows, and enjoy our videos below.
          </p>
        </div>
      </section>

      <section className="photo-section">
        <div className="section-content">
          <img src="/S.jpg" alt="SEAD band photo" className="band-photo" />
        </div>
      </section>

      <section className="videos-section">
        <div className="section-content">
          <h2>Featured Videos</h2>

          <div className="videos-grid">
            <div className="video-card">
              <iframe
                src="https://www.youtube.com/embed/MWH94w-wcUg"
                title="YouTube video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="video-card">
              <iframe
                src="https://www.youtube.com/embed/zwfjVzV1fA0"
                title="YouTube video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
