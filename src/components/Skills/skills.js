import React from "react";
import "./skills.css";
import html from "../../images/2HTML.png";
import css from "../../images/2 css.png";
import js from "../../images/javascript.png";
import rj from "../../images/2react.png";
import bs from "../../images/Bootstrap.svg";

const skills = () => {
  return (
    <div id="skillSection">
      <h1>Skills</h1>

      <div className="box">
        <img className="imgs" src={html} alt="" />
        <div className="Text">
          <h3>HTML:5</h3>
          <p className="text-gray">
            HTML is the standard markup language for Web pages. I have learned
            HTML (HyperText Markup Language) by YouTube which are presented in
            skill pages .
          </p>
        </div>
      </div>

      <div className="box">
        <img className="imgs" src={css} alt="" />
        <div className="Text">
          <h3>CSS</h3>
          <p className="text-gray">
            CSS is the language we use to style an HTML document. I have learned
            CSS (Cascading Style Sheets) by YouTube which are presented in skill
            pages .
          </p>
        </div>
      </div>

      <div className="box">
        <img className="imgs" src={js} alt="" />
        <div className="Text">
          <h3>JAVASCRIPT</h3>
          <p className="text-gray">
            JAVASCRIPT is the world's most popular programming language. I have
            learned JAVASCRIPT by YouTube which are presented in skill pages .
          </p>
        </div>
      </div>

      <div className="box">
        <img className="imgs" src={rj} alt="" />
        <div className="Text">
          <h3>REACT JS</h3>
          <p className="text-gray">
            REACT JS is the library for web and native user interfaces. build
            user interfaces out of individual pieces called components written
            in javaScript. I have learned REACT JS by YouTube which are
            presented in skill pages .
          </p>
        </div>
      </div>

      <div className="box">
        <img className="imgs" src={bs} alt="" />
        <div className="Text">
          <h3>BOOTSTRAP</h3>
          <p className="text-gray">
            BOOTSTRAP utilizes Sass for a modular and customizable architecture.
            Import only the components you need, enable global options like
            gradients and shadows etc. I have learned BOOTSTRAP by YouTube which
            are presented in skill pages .
          </p>
        </div>
      </div>
    </div>
  );
};

export default skills;
