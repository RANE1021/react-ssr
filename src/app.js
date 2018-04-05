import React from "react";
import { Provider as FelaProvider } from "react-fela";
import PropTypes from "prop-types";

import Example1 from "./containers/Example";
import Image from "./components/image";

//Redux, Fela, ReactRouter
const App = ({ renderer }) => (
  <FelaProvider renderer={renderer}>
    <div>
      <Example1 />
      <Image />
    </div>
  </FelaProvider>
);

App.propTypes = {
  renderer: PropTypes.object.isRequired
};

export default App;
