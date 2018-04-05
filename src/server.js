import React from "react";
import ReactDomServer from "react-dom/server";
import { renderToString } from "react-dom/server";
import { createRenderer } from "fela";
import { renderToMarkup, render } from "fela-dom";

import App from "./app";
import indexHtml from "./index";

export default (req, res) => {
  const renderer = createRenderer();

  const html = renderToString(<App renderer={renderer} />);
  const syles = renderToMarkup(renderer);

  res.send(indexHtml(html, styles));
};
