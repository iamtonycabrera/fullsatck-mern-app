import React from "react";
import "./Footer.css";
import {
  SiInstagram,
  SiFacebook,
  SiTwitter,
  // SiWhatsapp,
  SiYoutube,
  SiTiktok,
} from "react-icons/si";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={120} />

          <span className="secondaryText">
            Nuestra visión es hacer a las personas felices
            <br />
            ayudándolos a encontrar el lugar ideal para vivir.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Síguenos</span>
          <span className="secondaryText">En nuestras redes sociales</span>
          <div className="flexCenter f-menu">
            <a href="">
              <SiInstagram />
            </a>
            <a href="">
              <SiFacebook />
            </a>
            <a href="">
              <SiTwitter />
            </a>
            {/* <a href="">
              <SiWhatsapp />
            </a> */}
            <a href="">
              <SiYoutube />
            </a>
            <a href="">
              <SiTiktok />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
