import React from "react";
import ReactDomServer from "react-dom/server";
import { renderToString } from "react-dom/server";
import { createRenderer } from "fela"
import { renderToMarkup } from "fela-dom"

import App from "./app";
import indexHtml from "./index";

const renderer = createRenderer();

export default (req, res) => {
  const html = renderToString(<App />);
  const syles = renderToMarkup(renderer)

  res.send(indexHtml(html, styles));
};
