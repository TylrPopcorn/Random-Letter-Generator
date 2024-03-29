//Reducer to help regulate Articles state
//-----
import React, { useState } from "react";

//----variables
export const MyContext = React.createContext();
const initialData = {
  // currentLetter: "Loading...",
  currentLetter: "B",
};

//--------FUNCTIONS:
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const Dispatch = (newValue) => {
    setData(newValue);
  };

  return (
    <MyContext.Provider value={{ data, Dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

//EXPORTS
export default MyContextProvider;
