import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { projects } from "./ProjectCarousel";
import BackButton from "../BackButton";
import "./Project.css";

export default function Projects() {
  return (
    <div className="project-container">
      <div className="project-carousel">
        <br />
        <h1 style={{ fontSize: "65px", color: "black", textAlign: "center", padding: "40px" }}>My Projects</h1>
        <br />
        <ul>
            <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} className="relative mySwiper">
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <img src={project.img} alt={project.title} className="project-img" />
                    <h3 className="tech-title">{project.title}</h3>
                    <div className="tech-stack">
                      <span className="tech-badge">{project.skills}</span>
                      <span className="tech-badge">{project.skills2}</span>
                      <span className="tech-badge">{project.skills3}</span>
                      <span className="tech-badge">{project.skills4}</span>
                    </div>
                    <p className="case-desc">{project.desc}</p>
                    <a href={project.url} class="view-work-btn">Read More <span>➝</span></a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </ul>
      </div>
      <BackButton className="back-btn"/>
    </div>
  );
}