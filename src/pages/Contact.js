import React from "react";
import { links } from "../portfolio";
import { SocialIcon } from "react-social-icons";

import Fade from "react-reveal/Fade";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">
        <Fade bottom cascade duration={2500}>
          Reach Out To Me!
        </Fade>
      </h1>
      <div className="icon">
        {links.map((link) => (
          <div className="icons">
            {" "}
            <SocialIcon url={link}  target="_blank" />{" "}
          </div>
        ))}
      </div>

      <center>
        <p id="emailPhone"><a href="tel:+918250353954">📞+91 8250353954</a>  <a href="mailto:surajitdhar.official21@gmail.com" target="_blank" id="email"> 📧 surajitdhar.official21@gmail.com</a></p>
        <hr className="style-f" />
      </center>
      <p className="copyright">
       ©👨‍💻 with ❤️ by <b id="footName">Surajit Dhar</b> using ⚛️ 
       </p>
      

    </div>
  );
};

export default Contact;
