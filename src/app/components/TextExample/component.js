import React from "react";
import PropTypes from "prop-types";

const Example = ({ styles }) => (
  <div className={styles.fontColor}>
    <div>Are we excited for God of War 4?</div>
  </div>
);

Example.propTypes = {
  styles: PropTypes.object.isRequired
};

export default Example;
