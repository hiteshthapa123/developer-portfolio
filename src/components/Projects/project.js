import React from "react";
import "./project.css";
import first from "../../images/first.png";
import second from "../../images/second.png";
import third from "../../images/calculator.png";
import fourth from '../../images/netflix.png';

const project = () => {
  return (
    <div id="ProjectSection">
      <h1>Projects</h1>

      <div className="project">
        <img className="first-img" src={first} alt="" />
        <div className="delivery-app">
          <h3>Food Delivery Webpage .</h3>
        </div>
        <div className="text-gray">
          I have build my first Food Delivery Webpage project by using HTML &
          CSS. Click check button to see my food delivery project...
        </div>
        <button className="btn"><a href="https://food-delivery-indian-app.netlify.app/">Check Project.</a></button>
      </div>

      <div className="project">
        <img className="second-img" src={second} alt="" />
        <div className="amazon">
          <h3>Amazon Web Page .</h3>
        </div>
        <div className="text-gray">
          I have build Amazon web page project by using HTML & CSS.
          Click check button to see my amazon project...
        </div>
        <button className="btn"><a href="https://myamazon-webpage.netlify.app/">Check Project.</a></button>
      </div>

      <div className="project">
        <img className="third-img" src={third} alt="" />
        <div className="Calculator">
          <h3>Simple Calculator .</h3>
        </div>
        <div className="text-gray">
          I have build Simple Calculator by using HTML , CSS & JAVA SCRIPT.
          Click check button to see my Netflix project...
        </div>
        <button className="btn"><a href="https://create-my-calculator.netlify.app/">Check Project.</a></button>
      </div>
      <div className="project">
        <img className="fourth-img" src={fourth} alt="" />
        <div className="netflix">
          <h3>Netflix Web Page .</h3>
        </div>
        <div className="text-gray">
          I have build Netflix Clone project by using HTML , CSS & React js.
          Click check button to see my Netflix project...
        </div>
        <button className="btn"><a href="https://my-netflix-webpage.netlify.app/">Check Project.</a></button>
      </div>
    </div>
  );
};

export default project;
