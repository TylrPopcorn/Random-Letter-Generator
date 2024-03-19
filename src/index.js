import React from "react";
import ReactDOM from "react-dom/client";
//----    ----    ----

//styles:
import "../styles/reset.css";
import "../styles/styles.css";
//----    ----    ----
//--

//components:
import App from "./Components/App";
/*
  Dependencies:
  -----   ------
  npm install react
  npm install react-redux
  npm install parcel-bundler

*/
//.
//vars:
const TITLE = "LETTER GENERATOR"; /* Change the title to whatever */

//-----------          ------------------------------------------------
//START:

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="title" data-text={TITLE}>
      {TITLE}
    </h1>
    <h2> Generate a random letter </h2>
    <App />
  </div>
);
