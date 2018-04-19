import React from "react";
import { hydrate } from "react-dom";
import { createRenderer } from "fela";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import App from "./app";
import createStore from "~/store";

const renderer = createRenderer();
const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(preloadedState);

hydrate(
  <BrowserRouter>
    <App renderer={renderer} store={store}/>
  </BrowserRouter>,
  document.getElementById("root")
);
