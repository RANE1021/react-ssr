import App from "./app";
import React from "react";
import ReactDomServer from "react-dom/server";
import { renderToString } from "react-dom/server"
import indexHtml from "./index"

export default (req, res) => {
  // res.send(ReactDomServer.renderToString(<App />));

  const html = renderToString(
  <App />
  )

  res.send(indexHtml(html))
}
