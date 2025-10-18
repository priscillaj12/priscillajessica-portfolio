import { MenuData } from "./MenuData";
import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo" style={{fontSize: "25px"}}>Priscilla Jessica</h1>
      
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className="nav-links">
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}