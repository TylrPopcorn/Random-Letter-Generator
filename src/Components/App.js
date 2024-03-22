import React from "react";
import generateLetter from "./generateLetter.ts";
//--
import { MyContext } from "../../state/Context.js"; //context
//----- ------  ------- ---------
//----Main function:
class App extends React.Component {
  //
  //
  static contextType = MyContext;
  //--------------------------------                      --------------------------------
  //--
  //---HTML
  render() {
    const { data, updateData } = this.context;

    return (
      <div id="wrapper" className="App">
        <div className="LetterArea">
          <div className="randomLetter">{data.currentLetter}</div>
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

//EXPORTS:
export default App;
