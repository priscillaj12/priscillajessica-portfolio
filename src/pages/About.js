import React from "react";
import "./About.css";
import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Services } from "./Services";

const About = () => {
  return (
    <div className="about-container">
      <aside className="sidebar">
        <img
          src="Priscilla.jpeg"
          alt="Priscilla"
          className="Priscilla"
        />
        <h1>Priscilla Jessica</h1>
        <p className="title">Software Engineer</p>

        <div className="info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>priscillajssc2@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+62 812 9269 2929</span>
          </div>
          <div className="info-item">
            <FaBirthdayCake className="icon" />
            <span>January 12, 2002</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Jakarta</span>
          </div>
        </div>
        <br />
        <div className="social">
          <a href="mailto: priscillajssc2@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon-1" />
          </a>
          <a href="https://www.linkedin.com/in/priscilla-jssc/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon-2" />
          </a>
          <FaGithub />
        </div>
      </aside>

      <main className="content">
        <section className="section">
          <h2>About Me</h2>
          <p style={{fontSize: "20px"}}>
            Hello, my name is Priscilla Jessica.
            <br />
            I'm a software engineer who enjoys building applications with my skills.
            <br />
            I also possess the ability to collect, visualize, analyze, and interpret data to aid in business decision-making.
          </p>
        </section>

        <section className="section">
          <h2>What I'm Doing</h2>
          <div className="service-grid">
            {Services.map((item, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="section-service">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* <div className="card">
            <FaCode className="icon1" />
            <h3>Web Development</h3>
            <ul>
              <li>helping to make the website easily accessible, responsive and integrated with the latest technology to support your business and personal needs</li>
            </ul>
          </div> */}

          {/* <div className="card">
            <FaLaptopCode className="icon2" />
            <h3>Web Design</h3>
            <ul>
              <li>The most modern and high-quality website designs are created with aesthetics and user-friendliness in mind.</li>
            </ul>
          </div> */}

          {/* <div className="card">
            <FaPaintBrush className="icon3" />
            <h3>Design</h3>
            <ul>
              <li>designing creative, effective and unique graphic designs such as visual identities, promotional materials, and digital content that aligns with the brand image</li>
            </ul>
          </div> */}
          
        </section>

        <section className="section">
          <h2>Hobby</h2>
          <p>
            Outside of coding, I enjoy photography 📸, reading 📚👓, singing 🎶🎤, mc and public speaking 🎙️, designing 🖌️🎨💡, cooking 👩‍🍳. Hobbies keep me creative and inspired.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
