//Reducer to help regulate Articles state
//-----
import React, { useState } from "react";

//----variables
export const MyContext = React.createContext();
const initialData = {
  currentLetter: "Loading...",
};

//--------FUNCTIONS:
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const updateData = (newValue) => {
    setData(newValue);
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

//EXPORTS
export default MyContextProvider;
