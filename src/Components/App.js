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
  Generate = () => {
    //this function will generate a random letter
    const { Dispatch } = this.context; // Get the updateData function from the context
    console.log(this.context);

    //TODO:
    Dispatch({ currentLetter: "TEST" }); // ??
    generateLetter(Dispatch); // ???
  };
  //--
  //---HTML
  render() {
    const { data } = this.context; //context data

    return (
      <div id="wrapper" className="App">
        <div className="LetterArea">
          <div className="Triangle1">
            {/* <div className="randomLetter">{data.currentLetter}</div> */}
          </div>
        </div>
        <div className="ButtonHolder">
          <button className="GenerateButton" onClick={this.Generate}>
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
