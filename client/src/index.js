import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import { store, persistor } from "./store/index";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

//store data not pesisting
//redux reject is not getting backend payload
//https://www.npmjs.com/package/reduxjs-toolkit-persist
