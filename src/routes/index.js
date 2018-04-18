import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "~/components/HomeExample";
import Survey from "~/containers/SurveyPage";
import About from "~/components/AboutExample";
import { about, survey } from "./path";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={survey} component={Survey} />
      <Route path={about} component={About} />
    </Switch>
  );
};
