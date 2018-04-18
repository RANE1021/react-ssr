import React from "react";
import { Provider as FelaProvider } from "react-fela";
import { Provider as ReduxProvider } from "react-redux"
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import css from "./reset.css";
import LandingPage from "./containers/LandingPage";

//Redux, Fela, ReactRouter
const App = ({ renderer, store }) => {
  renderer.renderStatic(css.toString());
  return (
    <ReduxProvider store={store}>
      <FelaProvider renderer={renderer}>
        <LandingPage />
      </FelaProvider>
    </ReduxProvider>
  );
};

App.propTypes = {
  renderer: PropTypes.object.isRequired
};

export default App;
