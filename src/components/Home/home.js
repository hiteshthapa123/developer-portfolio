import React from "react";
import "./home.css";
import bg from "../../images/my-img.png";
import { Link } from "react-router-dom";
import About from '../About/about';
import Skills from '../Skills/skills';
import Project from '../Projects/project';
import Contact from '../Contact Us/contact';

const home = () => {
  return (
    <>
    <div id="HomeSection">
      <div className="leftSection">
        <div className="intro">
          <span> Hello, my name is </span>
          <span className="Name">Hitesh</span>
        </div>
        <div className="introText">
          <span> and I am a Passionate </span>
          <span className="Name">Frontend Developer</span>
        </div>
        <Link to="/contact">
          <button className="btn">Hire Me</button>
        </Link>
      </div>
      <div className="rightSection">
        <img src={bg} alt="profile" className="bg" />
      </div>
    </div>
    <hr/>
    <About/>
    <hr />
    <Skills/>
    <hr />
    <Project/>
    <hr />
    <Contact/>
    </>
  );
};

export default home;
