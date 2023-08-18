import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section className="l-wrapper">
      <div className="paddings innerWidth l-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">¿Dónde estamos?</span>
          <span className="secondaryText">
            C. de el Sol, 15, 28911 Leganés, Madrid
          </span>
          <span className="secondaryText">Lunes - Viernes</span>
          <span className="secondaryText">09:00 - 20:00</span>
          <a
            className="button secondaryText"
            target="_blank"
            href="https://goo.gl/maps/d6X1eUuVY6ufAFC99"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
