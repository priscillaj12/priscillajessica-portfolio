import React from "react";
import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          alt="avatar"
          className="avatar"
        />
        <h1>Priscilla Jessica</h1>
        <p className="title">Software Engineer</p>

        <div className="info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>richard@example.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+1 (293) 352-2795</span>
          </div>
          <div className="info-item">
            <FaBirthdayCake className="icon" />
            <span>June 23, 1982</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Sacramento, California, USA</span>
          </div>
        </div>
        <br />
        <div className="social">
          <FaEnvelope />
          <FaLinkedin />
          <FaGithub />
        </div>
    </div>
  );
}

export default Sidebar;