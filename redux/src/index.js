import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import user from "./reducers/userReducer";

// reducerを登録したstoreを生成
const store = createStore(
  combineReducers(
    {
      user: user,
    },
    applyMiddleware()
  )
);

/**
 * Providerとは
 * ①Reactコンポーネント内でreact-reduxのconnect()関数を使えるようにする。
 * ②ラップしたコンポーネントにstore情報を渡す。
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
