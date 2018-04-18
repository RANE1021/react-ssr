import React from "react";

const YesButton = ({ onYesClick, styles }) => {
  return (
    <div>
      <button name="yes" onClick={() => {onYesClick}}>Yes</button>
    </div>
  );
};

export default YesButton;
