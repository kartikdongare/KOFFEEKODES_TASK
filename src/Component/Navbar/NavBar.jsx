import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navbar">
        <img src={logo} alt="" loading="lazy" className="logo-img"/>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
          <li className="home">
            HOME
            <div className="nav-bottom"></div>
          </li>
          <li className="about">WORK</li>
          <li className="product">ABOUT</li>
          <li className="contact">CONTACT</li>
        
          <li className="signup">CAREER</li>
        <li className="signup" style={{border:0}}>DEDICATE</li>
        <li>
        <button type="button" className="contact-btn">CONTACT</button>
        </li>
        <li>
        <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fa fa-times" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-align-justify" aria-hidden="true"></i>
        )}
      </button>
        </li>
      </ul>
      
    </div>
  );
};

export default NavBar;
