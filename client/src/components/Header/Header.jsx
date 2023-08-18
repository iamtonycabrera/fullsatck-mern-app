import React, { useState } from "react";
import "./Header.css";
import { HiBars3 } from "react-icons/hi2";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a className="orangeText" href="">
              Inicio
            </a>
            <a className="orangeText" href="">
              Venta
            </a>
            <a className="orangeText" href="">
              Alquiler
            </a>
            <a className="orangeText" href="">
              Reforma
            </a>
            <a className="orangeText" href="">
              Nosotros
            </a>
            <button className="button">
              <a href="">Contacto</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* Menu icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <HiBars3 size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
