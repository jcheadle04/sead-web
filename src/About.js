import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>About SEAD</h2>
      <img
        src="/s.jpg" // Make sure your crowd pic is in the public folder or adjust path
        alt="SEAD Band in front of crowd"
        style={styles.image}
      />
      <p style={styles.text}>
        We take the stage with an electrifying heat straight to the heart. 3 hot
        dudes ready to play whenever and where ever.
      </p>
      <p style={styles.text}>We just be jibbin</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#121212",
    borderRadius: "12px",
    boxShadow: "0 0 20px #6a00f4",
    color: "#eee",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
    color: "#6a00f4",
    fontWeight: "700",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "12px",
    boxShadow: "0 0 15px #6a00f4",
    marginBottom: "25px",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "18px",
  },
};

export default About;
