import { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div
        className="header-container"
        style={{
          backgroundColor: showNavbar ? "black" : "transparent",
          transition: "0.5s ease-in",
        }}
      >
        <div className="logo">DGC</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon style={{ color: "#fff" }} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="#FAQ">Faq</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
