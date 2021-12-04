import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import user from "./reducers/userReducer";

// store
const store = createStore(
  combineReducers(
    {
      user: user,
    },
    applyMiddleware()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
