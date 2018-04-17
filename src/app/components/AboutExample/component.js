import React from "react";
import PropTypes from "prop-types";

const Example = ({ styles }) => (
  <div className={styles.fontColor}>
    <div>Rafael, developer currently learning and using React.js.</div>
    <div>Passion for gaming, mostly on PS4 with a high regard for RPGs.</div>
  </div>
);

Example.propTypes = {
  styles: PropTypes.object.isRequired
};

export default Example;
