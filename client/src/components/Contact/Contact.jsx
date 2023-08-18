import React from "react";
import "./Contact.css";
import Modes from "./Modes/Modes";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="paddings innerWidth flexCenter contact-container">
        {/* left side */}
        <div className="flexColStart contact-left">
          <span className="orangeText">Contáctanos</span>
          <span className="primaryText">
            Es fácil ponerte en contacto con nosotros
          </span>
          <span className="secondaryText">
            Siempre estamos listos para darte el mejor servicio que mereces.
            Sabemos que un buen lugar para vivir hace que tu vida sea mejor.
          </span>

          <Modes />
        </div>
        {/* right side */}
        <div className="flexColCenter contact-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
