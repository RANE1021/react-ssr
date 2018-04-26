import React from "react";
import PropTypes from "prop-types";

import image from "./gow.jpg";

const Image = ({ styles }) => {
  return (
    <div>
      <div className={styles.fontColor}>Are we excited for God of War 4?</div>
      <img src={image} />
    </div>
  );
};

Image.propTypes = {
  styles: PropTypes.object.isRequired
};

export default Image;
