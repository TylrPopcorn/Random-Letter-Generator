//Reducer to help regulate Articles state
//-----
import React, { useContext, useState } from "react";

//----variables
const MyContext = React.createContext();

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

function Context() {
  const { data, updateData } = useContext(MyContext);

  return (
    <div>
      <p>Data from Context: {data}</p>
      <button onClick={() => updateData("New value")}>Change Data</button>
    </div>
  );
}

export default MyContextProvider;
