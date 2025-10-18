import React from "react";
import "./style.css";

function SkillsBar() {
    return(
        <div className="container">
            {/* <h1 className="title-text">Progress Bar</h1> */}
            <div className="skill-box">
                <span className="title">Programming</span>
                <div className="skill-bar">
                    <span className="skill-per programming">
                        {/* <span className="tool">75%</span> */}
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Coding</span>
                <div className="skill-bar">
                    <span className="skill-per coding">
                        {/* <span className="tool">80%</span> */}
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Make query with SQL</span>
                <div className="skill-bar">
                    <span className="skill-per makequerywithSQL">
                        {/* <span className="tool">80%</span> */}
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Designing UI / UX in Figma</span>
                <div className="skill-bar">
                    <span className="skill-per desigininguiuxinfigma">
                        {/* <span className="tool">85%</span> */}
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Designing</span>
                <div className="skill-bar">
                    <span className="skill-per designing">
                        {/* <span className="tool">90%</span> */}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SkillsBar;