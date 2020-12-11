import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {  } from "./reducers";
const store = createStore(reducers, compose(applyMiddleware(thunk)));
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
