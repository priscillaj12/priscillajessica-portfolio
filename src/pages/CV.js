import "./CV.css";
import Me from "../components/me";
import { FaGlobe } from "react-icons/fa";
import { languages } from "./Language";
import SkillsBar from "../components/SkillsBar";
// import BackButton from "../BackButton";

export default function CV() {
  return (
    <section className="cv" id="cv">
      <Me />
      <h2 className="cv-title">My CV</h2>
      <div className="cv-grid education">
        <div className="card education">
          <h1>Education</h1>
          <br />
          <ul>
            <li>
              <h3 className="bold" style={{fontSize: "35px"}}>Bachelor Degree Computer Science</h3>
              <p className="medium" style={{color: "black", fontSize: "25px"}}>Bina Nusantara (BINUS) University</p>
              <p className="medium">GPA: 3,05 / 4.00</p>
              <p className="small">Sept 2020 – August 2025</p>
              <br />
              <ul className="item">
                <li>Leader of the Multimedia System Course Class <br /></li>
                <li>Leader of the Research Methodology Course Class <br /></li>
                <li>Leader of the Basic Statistics Course Class <br /></li>
                <li>Leader of the Compilation Techniques Course Class <br /></li>
                <li>Actively participates in more than 10+ campus events, such as webinars, competition and skills training workshops <br /></li>
                <li><b>Thesis :</b> Design of Web-Based Rukun Tetangga Letter Administration System Application</li>
              </ul>
            </li>
            {/* <li className="edu-item">
              <div className="edu-left">
                <p className="bold">Bachelor Degree – Computer Science</p>
                {/* <p className="medium">Bina Nusantara University</p> */}
                {/* <p className="medium">GPA: 3,05 / 4.00</p>
                <p className="small">Sept 2020 – August 2025</p>
              </div> */}
              {/* <div className="edu-right">
                <h1 className="large">Bina Nusantara University</h1>
                <ul>
                  <li>Leader of the Multimedia System Course Class <br /></li>
                  <li>Leader of the Research Methodology Course Class <br /></li>
                  <li>Leader of the Basic Statistics Course Class <br /></li>
                  <li>Leader of the Compilation Techniques Course Class <br /></li>
                  <li>Actively participates in more than 10+ campus events, such as webinars, 
                  competition and skills training workshops <br /></li>
                  <li><b>Thesis :</b> Design of Web-Based Rukun Tetangga Letter Administration 
                  System Application</li>
                </ul>
              </div>
            </li> */}
            <br/>
            <li>
              <h3 className="bold">Senior High School - IPA</h3>
              <p className="medium" style={{color: "black", fontSize: "20px"}}>SMA 4 PSKD Jakarta</p>
              <p className="medium">Grade: 81,14/100.00</p>
              <p className="small">July 2017 – May 2020</p>
              <br />
              <ul className="item">
                <li>Vice Leader of Class 12<br /></li>
                <li>Scout Troop Leader<br /></li>
                <li>Cosplay Members</li>
                <li>Modern Dance Members<br /></li>
              </ul>
            </li>
            <br />
            <li>
              <h3 className="bold">Junior High School</h3>
              <p className="medium" style={{color: "black", fontSize: "20px"}}>Ora et Labora</p>
              <p className="small">2014 – 2017</p>
              <br />
              <ul className="item">
                <li>Scout Troop Leader</li>
                <li>Choir Member</li>
                <li>Performing Arts Member</li>
              </ul>
            </li>
            {/* <li className="edu-item">
              <div className="edu-left">
                <p className="bold">Senior High School - IPA</p>
                <p className="medium">Grade: 81,14/100.00</p>
                <p className="small">July 2017 – May 2020</p>
              </div>
              <div className="edu-right">
                <h1 className="large">SMA 4 PSKD Jakarta</h1>
                <ul>
                  <li>Vice Leader of Class 12<br /></li>
                  <li>Scout Troop Leader<br /></li>
                  <li>Cosplay Members</li>
                  <li>Modern Dance Members<br /></li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>

        <div className="card skills">
          <h1 className="card-title">Technical Skills</h1>
          <ul className="skills-list">
            <SkillsBar />
          </ul>
          <br/>
          <hr />
          <div className="personal">
            <h2>Personal Skills</h2>
            <ul>
              <li>Computer Skills</li>
              <li>Responsible</li>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Creative</li>
              <li>Disciplined and Honest</li>
              <li>Communicative</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cv-grid">
        <div className="card">
          <h1>Interests</h1>
          <br />
          {/* <br /> */}
          <p className="paragraph" style={{color: "black"}}>💻📱 Application Developer, Software Engineering, Front - End Developer, Back end Developer, Fullstack Developer, IT Programmer, 
            <br/>
            <br />
            Data Analytics & Data Science 📊📈💻🧠,
            <br />
            <br />
            🎨💡💻📱 UI / UX Design,
            <br />
            <br />
            Graphic Designer 🎨🖌️🖼️💻.</p>
        </div>

        <div className="card">
          <h1><FaGlobe/>Languages</h1>
          {languages.map((lang, idx) => (
            <div key={idx} className="bg-white shadow p-4 rounded-2xl">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{lang.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <BackButton /> */}
    </section>
  );
}
