import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Footer = ({ styles }) => (
  <div className={styles.wrapper}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/survey">Survey</NavLink>
    <NavLink to="/about">About</NavLink>
  </div>
);

Footer.propTypes = {
  styles: PropTypes.object.isRequired
};

export default Footer;
