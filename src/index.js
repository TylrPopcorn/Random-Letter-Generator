import React from "react";
import ReactDOM from "react-dom/client";
//----    ----    ----

//styles:
import "../styles/reset.css";
import "../styles/styles.css";
//----    ----    ----
//REDUCER STUFF: ---
import { configureStore, compose } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Reducer from "./state/Reducer";
//--

//components:
import App from "./Components/App";

/*
  Dependencies:
  -----   ------
  npm install react
  npm install react-redux
  npm install parcel-bundler
  npm install redux-thunk
  npm install npm install @reduxjs/toolkit

*/

//.
//vars:
const TITLE = "LETTER GENERATOR"; /* Change the title to whatever */

//-----------          ------------------------------------------------
//START:

// REDUX STORE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  enhancers: composeEnhancers,
});
//--

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <h1 className="title" data-text={TITLE}>
      {TITLE}
    </h1>
    <h2> Generate a random letter </h2>
    <App />
  </Provider>
);
