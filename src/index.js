import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';

const store = configureStore({
  reducer: reducers,
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
