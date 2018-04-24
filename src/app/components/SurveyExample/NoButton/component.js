import React from "react";

const NoButton = ({ onNoClick, styles }) => {
  return (
    <div>
      <button name="no" onClick={onNoClick}>
        No
      </button>
    </div>
  );
};

export default NoButton;
