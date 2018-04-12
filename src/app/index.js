import React from "react";
import { Provider as FelaProvider } from "react-fela";
import PropTypes from "prop-types";

import css from "./reset.css"
import TextExample from "~/components/TextExample";
import ImageExample from "~/components/ImageExample";

//Redux, Fela, ReactRouter
const App = ({ renderer }) =>{
  renderer.renderStatic(css.toString())
  return (
    <FelaProvider renderer={renderer}>
      <div>
        <TextExample />
        <ImageExample />
      </div>
    </FelaProvider>
)
}

App.propTypes = {
  renderer: PropTypes.object.isRequired
};

export default App;
