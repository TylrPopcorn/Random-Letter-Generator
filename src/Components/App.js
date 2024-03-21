import React from "react";
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

//EXPORTS:
export default App;
