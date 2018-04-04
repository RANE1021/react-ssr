import React from "react";

import Example1 from "./containers/example";
import Image from "./components/image";

//Redux, Fela, ReactRouter
const App = () => (
  <div>
    <Example1 />
    <Image />
  </div>
);

App.propTypes = {};

export default App;
