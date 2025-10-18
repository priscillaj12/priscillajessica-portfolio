import React, { useState, useEffect } from "react";
import "./MeStyles.css";

import Cover1 from "../assets/Cover1.jpeg";
import Cover2 from "../assets/Cover2.jpeg";
import Cover3 from "../assets/Cover3.jpeg";
import Cover4 from "../assets/Cover4.jpg";
import Cover5 from "../assets/Cover5.jpeg";
import Cover6 from "../assets/Cover6.jpg";

const images = [Cover1, Cover2, Cover3, Cover4, Cover5, Cover6];
// const images = [Cover1, Cover2, Cover3, Cover4, Cover5];

export default function Me() {
  const googleDriveLink = "https://drive.google.com/file/d/1G7MMXNalnCdK3fqBdzYIUrsaJpbqIQUu/view?usp=sharing";
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="me"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      <div className="me-overlay"></div>
      <div className="me-content">
        <h1 className="text-2xl font-bold mb-6" style={{ color: "white" }}>
          Priscilla Jessica
        </h1>
        <p className="subtitle">Software Engineer</p>
        <a
          href={googleDriveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button"
        >
          <b>Click Here Now</b>
        </a>
      </div>
    </section>
  );
}
