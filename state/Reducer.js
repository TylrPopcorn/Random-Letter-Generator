//Reducer to help regulate Articles state
//-----
import React, { createContext, useContext } from "react";

const Functions = {}; //Any functions that help the reducer below.
const initialData = {};
//
//------    ---------   ----------------    ---------   ----------
//------    ---------   ----------
//
//----Main Component:------------------
const Reducer = (state = initialData, action) => {
  switch (action.type) {
    //DEFAULT------
    default: {
      if (action.type !== "@@INIT") {
        //On the first instance, skip over and return regular state. This only involves UI that is on the screen.
        //(This should not occur).
        console.log(`${action.type} REDUCER CANNOT BE FOUND.`); //tell the developer
        //This will only occur if a(n) reducer cannot be found for a corresponding action-creator
        return {
          //Update the slice of state
          ...state,
          errors: `ERROR: ${action.type} not found`,
        };
      } else {
        return state;
      }
    }
  }
};

//-----REDUX STUFF:
const StoreContext = createContext();
//const useStore = () => useContext(StoreContext);

// Create a Provider component to wrap your app with
const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, initialData);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
//----------------------

//---Exports:
export default StoreProvider;
