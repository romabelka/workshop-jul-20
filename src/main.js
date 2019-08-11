import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store";
import App from "./components/app";

const store = createStore();
window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
