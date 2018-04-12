import React from "react";
import ReactDomServer from "react-dom/server";
import { renderToString } from "react-dom/server";
import { createRenderer } from "fela";
import { renderToMarkup, render } from "fela-dom";

import App from "./app";
import htmlTemplate from "./template";

export default (req, res) => {
  const renderer = createRenderer();

  const html = renderToString(<App renderer={renderer} />);
  const styles = renderToMarkup(renderer);

  res.send(htmlTemplate({ html, styles }));
};
