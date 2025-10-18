import React from "react";
import "./Certificates.css";
import backButton from "../BackButton";
import BackButton from "../BackButton";

export default function Certificates() {
  const certificates = [
    { id: 1, title: "The 7th International Conference on Computer Science and Computational Intelligence 2022", img: "/certificates/certificate1.jpeg", link: "https://drive.google.com/file/d/1-dw8ah1oONDOCrtBw2-82WzeSfoJ4yXU/view?usp=sharing", date: "November 17-18th 2022"},
    { id: 2, title: "Fundamental Data Visualization with Python", img: "/certificates/certificate2.png", link: "https://drive.google.com/file/d/1eMKK2X393U3C-VZNlOj8f4gibTLE43Mx/view?usp=sharing", date: "March 31 2024" },
    { id: 3, title: "Introduction to Data Science with Python", img: "/certificates/certificate3.png", link: "https://drive.google.com/file/d/1hGYRAcLL6H8hvr95i7yoo6wOuDvojhjO/view?usp=sharing", date: "Apr 06 2024" },
    { id: 4, title: "Statistic using Python for Data Science - Part 2", img: "/certificates/certificate4.png", link: "https://drive.google.com/file/d/1R5Vo2x8YyP5eO7DajIv1yRZ8c2gjrw6m/view?usp=sharing", date: "May 01 2024" },
    { id: 5, title: "Statistic using Python for Data Science - Part 1", img: "/certificates/certificate5.png", link: "https://drive.google.com/file/d/1O3ikBMfzghOvm3ewiVKNHN75ci9nCqTm/view?usp=sharing", date: "May 04 2024" },
    { id: 6, title: "Data Preparation in Data Science using R", img: "/certificates/certificate6.png", link: "https://drive.google.com/file/d/15phYUdI97ZyB7ukMdCTqzL-L197Et0Ju/view?usp=sharing", date: "May 15 2024" },
    { id: 7, title: "UX Writing Introduction - short class UI/UX Research and Design by MySkill", img: "/certificates/certificate7.png", link: "https://drive.google.com/file/d/18FVvDIYVtq_OlaRhWnoE6rO38VcljiTu/view?usp=sharing", date: "August 14th 2025" },
    { id: 8, title: "IT Bootcamp Program - Front End Developer", img: "/certificates/certificate8.png", link: "https://drive.google.com/file/d/1p92YW4aGjl08ehZwP7pMguqxA6dvoItg/view?usp=sharing", date: "August 15th 2025" },
    { id: 9, title: "Intro to Data Analytics - Mini Course by RevoU", img: "/certificates/certificate9.png", link: "https://drive.google.com/file/d/1xpuD2nTZ3zbc-cKUwra83ZqD6APhCxDi/view?usp=drivesdk", date: "August 22th 2025" },
    { id: 10, title: "Mini Bootcamp Data Analyst Menggunakan Excel", img: "/certificates/certificate10.png", link: "https://drive.google.com/file/d/1RASS1KeZ5407IpihU5NmkLcVYuv4H2T0/view?usp=sharing", date: "August 25th 2025" },
    { id: 11, title: "Self-Paced Azure AI Basic Fundamental", img: "/certificates/certificate11.png", link: "https://drive.google.com/file/d/1J9SuLDBj7nCWeXWud34MElmzYgPwUkvP/view?usp=sharing", date: "2025-04-28" },
    { id: 12, title: "Self-Paced Microsoft Azure AI Fundamentals: Microsoft AI-900T00-A", img: "/certificates/certificate12.png", link: "https://drive.google.com/file/d/1Q1xcB7g8Yw_ufQmFPl2fmaTCNtbsqqow/view?usp=sharing", date: "2025-05-09" },
    { id: 13, title: "Fullstack Intensive Bootcamp Graphic Design and Canva", img: "/", link: "#", date: "" },
    { id: 14, title: "Designing Using Canva - short class Graphic Design by MySkill", img: "/certificates/certificate14.png", link: "https://drive.google.com/file/d/1aUtdQF-_ERcZZ16yFU98SAuGDi_C6yLt/view?usp=sharing", date: "August 18th 2025" },
    { id: 15, title: "Public Speaking", img: "/", link: "https://drive.google.com/drive/folders/15sk2BuiAdGq6hnPQnCEZ_H1gad8tHi4F?usp=sharing", date: "September - October 2025" },
    { id: 16, title: "Panitia dalam Pemilihan Duta Bahasa BINUS 2022", img: "/certificates/Certificate16.png", link: "https://drive.google.com/file/d/1_fu8KnQakbK6_UwR8cKYESjBahOZjw1S/view?usp=sharing", date: "March 18 2022" },
    { id: 17, title: "sebagai Finalis Duta Bahasa BINUS 2021", img: "/certificates/certificate17.png", link: "https://drive.google.com/file/d/1LfyZcEhGMK1DMETmWDtsUGZAadgWmGkk/view?usp=sharing", date: "March 16 2021" },
    // { id: 18, title: "Bina Nusantara English Profiency Test", img: "/certificates/certificate18.png", link: "https://drive.google.com/file/d/1eGzFrFrFJlInmZkznYtTypiQu-Nw1Wxe/view?usp=sharing", date: "Friday, January 28, 2022" },
  ];

  return (
    <div className="certificates">
      <h1>My Certificates</h1>
      <div className="cert-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="cert-card">
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img src={cert.img} alt={cert.title} />
            </a>
            <p>{cert.title}</p>
            <p style={{fontSize: "15px"}}>{cert.date}</p>
          </div>
        ))}
      </div>
      <BackButton/>
      {/* <a href="/" className="cert">Back to home</a> */}
    </div>
  );
  
}
