import React from "react";
import "./footer.css";
import insta from "../../images/Insta.webp";
import linked from "../../images/linked.svg";
import git from "../../images/git.png";

const footer = () => {
  return (

    <div id="footer">
      <div className="footer-box">
        <div className="foot">
          <h3>Hitesh Developer Portfolio</h3>
        </div>
        <div className="foot">
          <img className="img" src={insta} alt="" />

          <img className="img" src={git} alt="" />

          <img className="img" src={linked} alt="" />
        </div>

        <div className="foot">Contact No.8218342075</div>
      </div>

      <div className="footer-right text-gray">
        copyright&copy; 2k23 www.hiteshportfolio.com | All right reserved
      </div>
    </div>
  );
};

export default footer;
