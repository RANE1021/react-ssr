import React from "react";
import { hydrate } from "react-dom";
import { createRenderer } from "fela";

import App from "./app";

const renderer = createRenderer();

hydrate(<App renderer={renderer} />, document.getElementById("root"));
