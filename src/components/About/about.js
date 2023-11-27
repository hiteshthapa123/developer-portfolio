import React from "react";
import "./about.css";

const about = () => {
  return (
    <>
      <div id="AboutSection">
        <h1>About Me</h1>

        <div className="text-gray">
          <span id="element">Hello I am Hitesh Thapa .</span> I am Frontend Web
          Developer currently living in a Uttrakhand (INDIA) , currently
          building the mobile and web application for a newly Start Up , and
          also made a self-made portfolio website for us. I relise my interest
          in coding then I start as a web Developer and I am a always good
          Learner. I have learned all skills by YouTube which are presented in
          skill page . If you want know more about me so you will ....
        </div>

        <div className="button">
          <div className="btnText">CLICK DOWNLOAD BUTTON --</div>
          <button className="cv-btn"><a href="resume.pdf" download>Download Cv</a></button>
        </div>
      </div>
      <hr />

      <div id="EducationSection">
        <h1>Education</h1>

        <div class="AboutText">
          <div class="about-title">Bachelor of Science , Mathematics</div>
          <div class="text-gray">Kumaun University , Nainital</div>
          <div class="text-gray">jul 2022</div>
        </div>

        <div class="AboutText">
          <div class="about-title">Intermediate , (pcm)</div>
          <div class="text-gray">SBVM Inter college , Haldwani</div>
          <div class="text-gray">jul 2019</div>
        </div>

        <div class="AboutText">
          <div class="about-title">High school</div>
          <div class="text-gray">SBVM Inter college , Haldwani</div>
          <div class="text-gray">jun 2017</div>
        </div>
      </div>
    </>
  );
};

export default about;
