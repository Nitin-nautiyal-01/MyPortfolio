import React from "react";
import "./Hero.css";
import profile_pic from "../../assets/profile_pic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "./Nitin_Nautiyal_cv.pdf";
export default function Hero() {
  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = resume;
    link.download = "Nitin_Nautiyal_cv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="hero" id="hero">
      <img src={profile_pic} alt="profile" />
      <h1>
        <span>I'm Nitin Nautiyal,</span> Full Stack Developer based in India.
      </h1>
      <p>
        I am a Full Stack Developer,Looking for a job opportunities in India.I
        have built many projects based on Full Stack.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            className="anchorlink"
            href="https://github.com/Nitin-nautiyal-01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="hero-resume" onClick={downloadResume}>
          My Resume
        </div>
      </div>
    </div>
  );
}
