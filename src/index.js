import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "./utils/prototype-injector"

import PagesIndex from "./pages";
import {Provider} from "react-redux";
import {setupStore} from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <PagesIndex />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
