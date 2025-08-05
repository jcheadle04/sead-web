import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact/Book SEAD</h1>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Your message"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
