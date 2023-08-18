import React from "react";
import "./Hero.css";
import LeftSide from "./Sides/LeftSide";
import RightSide from "./Sides/RightSide";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <LeftSide />

        {/* right side */}
        <RightSide />
      </div>
    </section>
  );
};

export default Hero;
