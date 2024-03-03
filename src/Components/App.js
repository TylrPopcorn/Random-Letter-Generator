import React from "react";
import { connect } from "react-redux";

import ACTIONS, { ACTION_TYPES } from "../state/action-creators"; //helpers
//----- ------  ------- ---------
//----Main function:
class App extends React.Component {
  //
  //
  //

  render() {
    return <div></div>;
  }
}

//Used for reducer:
const mapstateToProps = (stateFromStore) => {
  return stateFromStore; //Will import props.
};

//EXPORTS:
export default connect(mapstateToProps, ACTIONS)(App); //Props / Reducer
