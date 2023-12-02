import React from "react";
import "./footer.css";
import whatsapp from "../../images/whatsapp.webp";
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
          <a
            href="https://wa.me/918218342075"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img" src={whatsapp} alt="" />
          </a>

          <a
            href="https://github.com/hiteshthapa123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img" src={git} alt="" />
          </a>

          <a
            href="https://www.linkedin.com/in/hitesh-thapa-3b11b6283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img" src={linked} alt="" />
          </a>
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
