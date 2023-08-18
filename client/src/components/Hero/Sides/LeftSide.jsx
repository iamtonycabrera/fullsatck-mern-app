import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const LeftSide = () => {
  return (
    <div className="flexColStart hero-left">
      <div className="hero-title">
        <motion.h1
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
        >
          Explora, Compra,
          <br />
          Reforma
        </motion.h1>
      </div>
      <div className="flexColStart hero-desc">
        <span className="hero-desc-text secondaryText">
          Tu Portal de Inmuebles ahora más cerca de ti
        </span>
      </div>
      <div className="flexCenter search-bar">
        <HiLocationMarker color="#d89c3e" size={25} />
        <input type="text" />
        <button className="button">Buscar</button>
      </div>
      <div className="flexCenter stats">
        <div className="flexColCenter stat">
          <span>
            <CountUp start={8800} end={9000} duration={4} />
            <span>+</span>
          </span>
          <span className="secondaryText stat-text">Inmuebles</span>
        </div>
        <div className="flexColCenter stat">
          <span>
            <CountUp start={1950} end={2000} duration={4} />
            <span>+</span>
          </span>
          <span className="secondaryText stat-text">Clientes felices</span>
        </div>
        <div className="flexColCenter stat">
          <span>
            <CountUp end={28} duration={4} />
            <span>+</span>
          </span>
          <span className="secondaryText stat-text">Localidades</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
