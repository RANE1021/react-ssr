import React from "react";
import PropTypes from "prop-types";

import Routes from "../../../routes";
import Footer from "~/components/Footer";

const LandingPage = ({ styles }) => (
  <div className={styles.wrapper}>
    <div>
      <Routes />
      <Footer />
    </div>
  </div>
);

LandingPage.propTypes = {
  styles: PropTypes.object.isRequired
};

export default LandingPage;
