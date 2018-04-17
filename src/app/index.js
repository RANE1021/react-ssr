import React from "react";
import { Provider as FelaProvider } from "react-fela";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import css from "./reset.css";
import LandingPage from "./containers/LandingPage";

//Redux, Fela, ReactRouter
const App = ({ renderer }) => {
  renderer.renderStatic(css.toString());
  return (
    <FelaProvider renderer={renderer}>
      <div>
        <LandingPage />
      </div>
    </FelaProvider>
  );
};

App.propTypes = {
  renderer: PropTypes.object.isRequired
};

export default App;
