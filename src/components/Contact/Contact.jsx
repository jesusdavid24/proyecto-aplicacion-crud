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
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-content__title">THE CREW</h1>

        <div className="content__info">
          <h2 className="content__info__title">WHO WE ARE?</h2>

          <p className="content__ info__paragraph">
            We are a team of talents from the Colombian coast at the service of
            programming and web development. Working in various locations from
            the world.
          </p>
        </div>
      </div>
      <section className="container-images">
        <div className="container-images__img">
          <img
            className="container-images__pictures"
            src="../../public/contact__Cristian.jpg"
          />
          <h3 className="container-images__profession">FULLSTACK DEVELOPER</h3>
          <h3 className="container-images__name">Cristian Jimenez</h3>
          <h3 className="container-images__email">
            cristian.jimenezsa@hotmail.com
          </h3>
          <h3 className="container-images__github">
            Github: &nbsp;
            <a
              href="https://github.com/Cristianjs93"
              target="_blank"
              className="container-images__github"
            >
              Cristianjs93
            </a>
          </h3>
        </div>
        <div className="container-images__img">
          <img
            className="container-images__pictures"
            src="../../public/contact__Jesus.jpeg"
          />
          <h3 className="container-images__profession">FULLSTACK DEVELOPER</h3>
          <h3 className="container-images__name">Jesus Bravo</h3>
          <h3 className="container-images__email">
            jesusBravoexample@test.com
          </h3>
          <h3 className="container-images__github">
            Github: &nbsp;
            <a
              href="https://github.com/jesusdavid24"
              target="_blank"
              className="container-images__github"
            >
              jesusdavid24
            </a>
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Contact;
