import App from "./app";
import React from "react";
import ReactDomServer from "react-dom/server";

//static render

export default (req, res) => {
  res.send(ReactDomServer.renderToString(<App />));
};
