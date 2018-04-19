import React from "react";
import ReactDomServer from "react-dom/server";
import { renderToString } from "react-dom/server";
import { createRenderer } from "fela";
import { renderToMarkup, render } from "fela-dom";
import { StaticRouter } from "react-router-dom";

import App from "./app";
import htmlTemplate from "./template";
import createStore from "~/store";

export default (req, res) => {
  const renderer = createRenderer();
  const store = createStore();
  const context = {};

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App renderer={renderer} store={store} />
    </StaticRouter>
  );
  const styles = renderToMarkup(renderer);
  const preloadedState = store.getState();

  res.send(htmlTemplate({ html, styles, preloadedState }));
};
