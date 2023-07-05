import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    // <div className="contact-card">
    //   <div className="contact-card__photo">
    //     <img className="photo" src="./public/yo.jpg" alt="" />
    //   </div>
    //   <div className="contact-card__info">
    //     <h2>Cristian Jimenez</h2>
    // <a href="https://github.com/Cristianjs93" target="_blank">
    //   GitHub
    // </a>
    //     <h2>cristian.jimenezsa@hotmail.com</h2>
    //   </div>
    // </div>
    <div class="contact-container">
      <div class="contact-content">
        <h1 class="contact-content__title">THE CREW</h1>

        <div class="content__info">
          <h2 class="content__info__title">WHO WE ARE?</h2>

          <p class="content__ info__paragraph">
            We are a team of talents from the Colombian coast at the service of
            programming and web development. Working in various locations from
            the world.
          </p>
        </div>
      </div>
      <section class="container-images">
        <div class="container-images__img">
          <img class="container-images__pictures" src="../../public/yo.jpg" />
          <h3 class="container-images__profession">FULLSTACK DEVELOPER</h3>
          <h3 class="container-images__name">Cristian Jimenez</h3>
          <h3 class="container-images__email">
            cristian.jimenezsa@hotmail.com
          </h3>
          <a
            href="https://github.com/Cristianjs93"
            target="_blank"
            className="container-images__github"
          >
            GitHub
          </a>
        </div>
        <div class="container-images__img">
          <img
            class="container-images__pictures"
            src="https://ca.slack-edge.com/T03KUKHBV-U05DWC543QQ-9ae604b8e0f5-512"
          />
          <h3 class="container-images__profession">FULLSTACK DEVELOPER</h3>
          <h3 class="container-images__name">Jesus Bravo</h3>
          <h3 class="container-images__email">jesusBravoexample@test.com</h3>
          <a
            href="https://github.com/Cristianjs93"
            target="_blank"
            className="container-images__github"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
