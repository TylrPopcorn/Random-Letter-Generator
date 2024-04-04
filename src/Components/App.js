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
    this.generateRunning = false; //debounce used for letter generation process
  }
  //--------------------------------                      --------------------------------
  Generate = () => {
    //this function will generate a random letter
    //----------------
    const letterBox = document.querySelector(".randomLetter");
    const triangle = document.querySelector(".Triangle1");

    if (this.generateRunning === false) {
      //IF debounce is false THEN
      this.generateRunning = true;
      const { Dispatch } = this.context; // Get the updateData function from the context

      const letterGenerated = generateLetter();
      Dispatch({ currentLetter: letterGenerated });

      letterBox.classList.add("fade");
      triangle.classList.add("shine");

      //wait some time:
      wait(1000).then(() => {
        letterBox.classList.remove("fade");
        triangle.classList.remove("shine");

        wait(400).then(() => {
          this.generateRunning = false; //disable debounce
        });
        //[NOTE]: By adding another wait at the end of this wait, we can give the function a little bit of time at the end to sit beofre running the function again.
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

//EXPORTS:----------
export default App;
