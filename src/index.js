import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
import createHashHistory from "history/createHashHistory";

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
ReactDOM.render(
  <HashRouter history={hashHistory}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
