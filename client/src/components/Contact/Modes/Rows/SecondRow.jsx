import React from "react";
import { MdEmail } from "react-icons/md";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const SecondRow = () => {
  return (
    <div className="flexStart row">
      {/* Third mode */}
      <div className="flexColCenter mode">
        <div className="flexStart">
          <div className="flexCenter icon">
            <MdEmail size={25} />
          </div>
          <div className="flexColStart detail">
            <span className="primaryText">Email</span>
            <span className="secondaryText">info@lisarinmobyreformas.es</span>
          </div>
        </div>
        <div className="flexCenter button">Contáctanos por mail</div>
      </div>

      {/* Fourth mode */}
      <div className="flexColCenter mode">
        <div className="flexStart">
          <div className="flexCenter icon">
            <HiChatBubbleBottomCenter size={25} />
          </div>
          <div className="flexColStart detail">
            <span className="primaryText">Mensaje</span>
            <span className="secondaryText">+34 638 843 982</span>
          </div>
        </div>
        <div className="flexCenter button">Envíanos un SMS</div>
      </div>
    </div>
  );
};

export default SecondRow;
