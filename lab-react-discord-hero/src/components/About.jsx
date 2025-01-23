import React from "react";
import "../components/About.css";
import about from "../assets/img/discord-background.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <h1>Imagine a Place...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          woldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>

        <div className="about-right">
          <div>
            <button className="about-btn">Download for Windows</button>
          </div>
          <button className="about-btn2">Download for Windows</button>
          <ul>
            <img src={about} alt="about_img" className="about_img" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
