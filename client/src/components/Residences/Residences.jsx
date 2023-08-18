import React from "react";
import "./Residences.css";
import Sale from "./Sale/Sale";
import Rent from "./Rent/Rent";
import Renovation from "./Renovation/Renovation";

const Residences = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText r-text">Nuestros favoritos</span>
          <span className="primaryText">En venta</span>
        </div>
        <Sale />
        <hr className="r-separator" />
        <div className="r-head flexColStart">
          <span className="primaryText">En alquiler</span>
        </div>
        <Rent />
        <hr className="r-separator" />
        <div className="r-head flexColStart">
          <span className="primaryText">Reformados</span>
        </div>
        <Renovation />
      </div>
    </section>
  );
};

export default Residences;
