// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// Pages
import Home from "./Content/Home/Home";
// Styling
import "bootstrap/dist/css/bootstrap.min.css";

// import './index.css';
// import App from "./App";
// import reportWebVitals from './reportWebVitals';
// const redux = require("redux");

const initialState = {
  totalOrder: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  return state;
};

// Store
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
