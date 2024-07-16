import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "44f91e32-84ac-4ee9-8abb-879f44495131");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
       toast.success("Submit Successfully!", {
        position: "top-right",
        autoClose: 5000,
    });
    }
    else
      {
        toast.error("Not Submitted", {
          position: "top-right",
          autoClose: 5000,
        });
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>

      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Aspiring Full Stack Developer eager to leverage coding skills in
            ReactJS and Backend. Enthusiastic about creating seamless,
            user-friendly applications.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
               <img src={mail_icon}/>
               <p>nautiyalnitin1999@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={call_icon}/>
                <p>+91 7055487739</p>
            </div>
            <div className="contact-detail">
                <img src={location_icon}/>
                <p>Dehradun,Uttarakhand,India</p>
            </div>
          </div>
        </div>

        <form className="contact-right" onSubmit={onSubmit}>
              <label>Your Name</label>
              <input text="text" placeholder="Enter Your Name" name= "name"/>

              <label>Your Email</label>
              <input type= "email" placeholder="Enter Your Name" name="email"/>

              <label htmlFor="">Write Your Message Here</label>
              <textarea name="message" rows="8" placeholder="Enter Your Message"></textarea>

              <button type='submit' className="contact-submit">Submit</button>
              <ToastContainer/>
        </form>
      </div>
    </div>
  );
}
