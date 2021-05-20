import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//store data not pesisting
//redux reject is not getting backend payload
//https://www.npmjs.com/package/reduxjs-toolkit-persist
