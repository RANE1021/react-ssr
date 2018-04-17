import React from "react";
import image from "./gow.jpg";

const Image = ({ styles }) => {
  return (
    <div>
      <div className={styles.fontColor}>Are we excited for God of War 4?</div>
      <img src={image} />
    </div>
  );
};

export default Image;
