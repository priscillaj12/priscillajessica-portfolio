import React from "react";
import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach me via email:</p>
      
      <a 
        href="mailto:priscillajssc2@gmail.com" 
        className="contact-link"
      >
        <FaEnvelope className="icons" /> priscillajssc2@gmail.com
      </a>
    </div>
  );
};

export default Contact;