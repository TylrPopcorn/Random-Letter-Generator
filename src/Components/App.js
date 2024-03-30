import React from "react";
import generateLetter from "./generateLetter.ts";
import wait from "./wait.ts";
//--
import { MyContext } from "../../state/Context.js"; //context
//----- ------  ------- ---------
//----Main function:
class App extends React.Component {
  static contextType = MyContext;
  //
  //
  constructor(props) {
    super(props); //Allow access to 'this.props'
    this.generateRunning = false;
  }
  //--------------------------------                      --------------------------------
  Generate = () => {
    //this function will generate a random letter
    if (this.generateRunning === false) {
      this.generateRunning = true;
      const { Dispatch } = this.context; // Get the updateData function from the context

      const letterGenerated = generateLetter(); // ???
      Dispatch({ currentLetter: letterGenerated });

      wait(1800).then(() => {
        this.generateRunning = false;
      });
    }
  };
  //--
  //---HTML
  render() {
    const { data } = this.context; //context data

    return (
      <div id="wrapper" className="App">
        <div className="LetterArea">
          <div className="Triangle1">
            <div className="Triangle2">
              <div className="Triangle3">
                <div className="randomLetter">{data.currentLetter}</div>
              </div>
            </div>
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
