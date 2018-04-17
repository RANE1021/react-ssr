import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

const Home = ({ styles }) => (
  <div className={styles.fontColor}>
    <div>This is an example server side rendering web application.</div>
    <div>The next few pages ask a simple question with more examples and provide background info.</div>
  </div>
);

Home.propTypes = {
  styles: PropTypes.object.isRequired
};

export default Home;
