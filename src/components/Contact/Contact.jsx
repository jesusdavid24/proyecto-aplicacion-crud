import React from "react";
import Header from "../Header/Header";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-card">
      <div className="contact-card__photo">
        <img className="photo" src="./public/yo.jpg" alt="" />
      </div>
      <div className="contact-card__info">
        <h2>Cristian Jimenez</h2>
        <a href="https://github.com/Cristianjs93" target="_blank">
          GitHub
        </a>
        <h2>cristian.jimenezsa@hotmail.com</h2>
      </div>
    </div>
  );
};

export default Contact;
