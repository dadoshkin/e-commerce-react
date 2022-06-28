import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, } from "react-redux";
import {productsFetch} from "./redux/products/productsSlice"
import { store } from "./redux/store";
import { getTotals } from "./redux/products/cartSlice";

store.dispatch(productsFetch());
store.dispatch(getTotals());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
