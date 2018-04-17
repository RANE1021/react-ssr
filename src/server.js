import React from "react";
import ReactDomServer from "react-dom/server";
import { renderToString } from "react-dom/server";
import { createRenderer } from "fela";
import { renderToMarkup, render } from "fela-dom";
import { StaticRouter } from "react-router-dom";

import App from "./app";
import htmlTemplate from "./template";

export default (req, res) => {
  const renderer = createRenderer();
  // context = {}

  const html = renderToString(
    <StaticRouter
      location={req.url}
      // context={context}
    >
      <App renderer={renderer} />
    </StaticRouter>
  );
  const styles = renderToMarkup(renderer);

  // if (context.url) {
  //   redirect(301, context.url)
  // } else {
  //   res.send(htmlTemplate({ html, styles }));
  // }
  res.send(htmlTemplate({ html, styles }));
};
