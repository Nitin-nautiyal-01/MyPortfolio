import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_pic from '../../assets/profile_pic.png';

export default function About() {
  return (
    <div className='about' id="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_pic}/>
        </div>
        
        <div className="about-right">
            <div className="about-para">
                <p>As a recent graduate with a strong foundation in computer science and a passion for web development, I am eager to launch my career as a Full Stack Developer. </p>
                <p>I am enthusiastic about bringing my skills, dedication, and fresh perspective to your team as a Full Stack Developer, and I am confident that my background and passion for development will make me a valuable asset to your organization.</p>
            </div>

            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML,CSS and JavaScript</p><hr style = {{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>ReactJS</p><hr style = {{width:"45%"}}/>
                </div>
                <div className="about-skill">
                    <p>NodeJS and ExpressJS</p><hr style = {{width:"55%"}}/>
                </div>
                <div className="about-skill">
                    <p>MongoDB</p><hr style = {{width:"50%"}}/>
                </div>
            </div>
        </div>

      </div>
    </div>

  )
}
