import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <div id="ContactSection">
      <h1>Contact Me</h1>

      <div className="contact-form">
        <form action="/">
          <div className="form-group">
            <label for="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label for="Mobile">Mobile :</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Enter your Number"
              required
            />
          </div>

          <div className="form-group">
            <label for="mssg">Message :</label>
            <textarea name="" id="" cols="20" rows="8"></textarea>
          </div>
          <button className="btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
