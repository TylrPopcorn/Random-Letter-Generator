//This file will generate a random letter to be shown on screen
//------------------------------------------------------------------------
//(IMPORTED) functions:
import wait from "./wait.ts";

//VARIABLES:
let letterGenerated: string; // eslint-disable-line

// prettier-ignore
const letters: string[] = [ 
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];
//--

//------------------------------------------                -----------------------------------------------
//----------MAIN / START:
let generateRunning: boolean = false; //Debounce for generating letters.
function generateLetter(): void {
  //console.log("generating letter")

  if (generateRunning === false) {
    generateRunning = true;

    //Get a random letter from the 'letters' table:
    const randomIndex = Math.floor(Math.random() * letters.length);
    letterGenerated = letters[randomIndex].toUpperCase();

    wait(1800).then(() => {
      generateRunning = false;
    });
  }
}

//---EXPORTS:
export default generateLetter;
