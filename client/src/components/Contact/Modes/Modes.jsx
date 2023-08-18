import React from "react";
import FirstRow from "./Rows/FirstRow";
import SecondRow from "./Rows/SecondRow";

const Modes = () => {
  return (
    <div className="flexColStart contactModes">
      {/* First row */}
      <FirstRow />

      {/* Second row */}
      <SecondRow />
    </div>
  );
};

export default Modes;
