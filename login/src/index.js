import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/";
import PrivateRoute from "./components/PrivateRoute";
import GuestRoute from "./components/GuestRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
      <Link to="/mypage">MyPage</Link>
    </nav>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact children={<Home />} />
          <GuestRoute path="/login" children={<Login />} />
          <PrivateRoute path="/mypage" children={<MyPage />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
