//Reducer to help regulate state
//-----
import React, { useState } from "react";

//----variables
export const MyContext = React.createContext();
const initialData = {
  currentLetter: "", //the current letter generated
};

//--------FUNCTIONS:
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  //Function that will update data:
  const Dispatch = (newValue) => {
    setData(newValue); //useState
  };

  //return data:
  return (
    <MyContext.Provider value={{ data, Dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

//EXPORTS----------
export default MyContextProvider;
