import React from "react";
import { hydrate } from "react-dom";
import { createRenderer } from "fela";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

const renderer = createRenderer();

hydrate(
  <BrowserRouter>
    <App renderer={renderer} />
  </BrowserRouter>,
  document.getElementById("root")
);
