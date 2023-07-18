import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  
const [activeLink, setActiveLink] = useState("");



  return (
    <div className="menu-container">
      <header className="header">
        <div className="header-logo">DGC</div>
        <nav className="menu">
          <div className="links-wrapper">
            <a
              href="#Home"
              className={activeLink === "Home" ? "active" : ""}
            >
              Home
            </a>
            <a
              href="#Utilities"
              className={activeLink === "Utilities" ? "active" : ""}
            >
              Utilities
            </a>
            <a
              href="#AboutUs"
              className={activeLink === "AboutUs" ? "active" : ""}
            >
              About 
            </a>
            <a
              href="#FAQ"
              className={activeLink === "FAQ" ? "active" : ""}
            >
              FAQ
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;