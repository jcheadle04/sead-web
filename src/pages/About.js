import React from "react";
import "./About.css"; // Optional: for styling

const About = () => {
  return (
    <main className="about-container">
      <h1>About SEAD</h1>
      <p className="about-intro">
        Three sweaty dudes with their shirts off ready to rock!
      </p>
      <section className="about-details">
        <p>
          SEAD is not just a band — it’s a high-energy experience kick straight
          to the cranium, ready to shake the arthritis right out them bones
        </p>
        <p>
          Whether it’s a packed bar in Slidell or a big outdoor festival, these
          three are bringing the heat — shirtless and shameless.
        </p>
      </section>
    </main>
  );
};

export default About;
