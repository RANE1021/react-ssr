import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "~/pages/Landing";
import Survey from "~/pages/Survey";
import About from "~/pages/About";
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
