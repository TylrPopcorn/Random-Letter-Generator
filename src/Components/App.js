import React, { useState } from "react";
import { connect } from "react-redux";

import ACTIONS, { ACTION_TYPES } from "../state/action-creators"; //helpers
import generateLetter from "./generateLetter.ts";
//----- ------  ------- ---------
//----Main function:
class App extends React.Component {
  //
  //

  //--------------------------------                      --------------------------------
  //--
  //---HTML
  render() {
    return (
      <div id="wrapper" className="App">
        <div className="LetterArea">
          <div className="randomLetter">{this.props.letter}</div>
        </div>
        <div className="ButtonHolder">
          <button className="GenerateButton" onClick={generateLetter}>
            Generate
          </button>
        </div>
        <div className="BottomFrame">
          <p> Click the button above to generate a random letter </p>
        </div>
      </div>
    );
  }
}

//Used for reducer:
const mapstateToProps = (stateFromStore) => {
  return stateFromStore; //Will import props.
};

//EXPORTS:
export default connect(mapstateToProps, ACTIONS)(App); //Props / Reducer
