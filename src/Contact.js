import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          style={styles.textarea}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button style={styles.button} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#121212",
    borderRadius: "12px",
    boxShadow: "0 0 15px #6a00f4",
    color: "#eee",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  title: {
    textAlign: "center",
    color: "#6a00f4",
    marginBottom: "25px",
    fontSize: "2.5rem",
    fontWeight: "700",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "14px 18px",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#1e1e1e",
    color: "#eee",
    fontSize: "1.1rem",
    transition: "border-color 0.3s ease",
  },
  textarea: {
    minHeight: "120px",
    padding: "14px 18px",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#1e1e1e",
    color: "#eee",
    fontSize: "1.1rem",
    resize: "vertical",
    transition: "border-color 0.3s ease",
  },
  button: {
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#6a00f4",
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

// Add simple focus and hover effects via React inline styles workaround:
styles.input[":focus"] = { borderColor: "#ff6ec4", outline: "none" };
styles.textarea[":focus"] = { borderColor: "#ff6ec4", outline: "none" };
styles.button[":hover"] = { backgroundColor: "#5300bb" };

export default Contact;
