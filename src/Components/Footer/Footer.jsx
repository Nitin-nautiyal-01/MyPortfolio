import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from'../../assets/user_icon.svg';
export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Nitin</h1>
                <p>I am a Full Stack Developer,Looking for a job opportunities in India.I
                have built many projects based on Full Stack.</p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src = {user_icon}/>
                    <input type="text" placeholder='Enter Your Email'/>
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
       <hr/>

       <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2024 Nitin Nautiyal. All right reserved 
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>
       </div>
    </div>
  )
}
