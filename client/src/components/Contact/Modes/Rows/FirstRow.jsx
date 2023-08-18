import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";

const FirstRow = () => {
  return (
    <div className="flexStart row">
      {/* First mode */}
      <div className="flexColCenter mode">
        <div className="flexStart">
          <div className="flexCenter icon">
            <MdCall size={25} />
          </div>
          <div className="flexColStart detail">
            <span className="primaryText">Teléfono</span>
            <span className="secondaryText">+34 638 843 982</span>
          </div>
        </div>
        <div className="flexCenter button">Llama ahora</div>
      </div>

      {/* Second mode */}
      <div className="flexColCenter mode">
        <div className="flexStart">
          <div className="flexCenter icon">
            <BsFillChatDotsFill size={25} />
          </div>
          <div className="flexColStart detail">
            <span className="primaryText">WhatsApp</span>
            <span className="secondaryText">+34 638 843 982</span>
          </div>
        </div>
        <div className="flexCenter button">Chatea con nosotros</div>
      </div>
    </div>
  );
};

export default FirstRow;
