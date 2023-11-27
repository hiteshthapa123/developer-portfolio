import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/2logo.png";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="iconLogo">
        <img src={logo} alt="logo" className="logo" />
        <div onClick={() => setMenu(!menu)} className="icon">
          <BiMenu className="menuIcon" />
        </div>
      </div>

      {!menu ? (
        <div className="desktopmenu">
          <Link to="/" className="menuListItem">
            Home
          </Link>
          <Link to="/about" className="menuListItem">
            About us
          </Link>
          <Link to="/skills" className="menuListItem">
            Skills
          </Link>
          <Link to="/projects" className="menuListItem">
            Projects
          </Link>
          <Link to="/contact" className="menuListItem">
            Contact Me
          </Link>
        </div>
      ) : (
        <div className="mobilemenu">
          <Link to="/" className="menuListItem">
            Home
          </Link>
          <Link to="/about" className="menuListItem">
            About us
          </Link>
          <Link to="/skills" className="menuListItem">
            Skills
          </Link>
          <Link to="/projects" className="menuListItem">
            Projects
          </Link>
          <Link to="/contact" className="menuListItem">
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
