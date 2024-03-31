//This file will generate a random letter to be shown on screen
//------------------------------------------------------------------------
//VARIABLES:
let letterGenerated: string; // eslint-disable-line

// prettier-ignore
const letters: string[] = [ 
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];
//--

//------------------------------------------                -----------------------------------------------
//----------MAIN / START:
let lastGenerated_letter: string; //used to determine the last letter generated.
function generateLetter(): string {
  //This function will generated a random letter.
  //------------------------------------------

  //console.log("generating letter")
  const sameLetter: number = Math.floor(Math.random() * 2) + 1; //random number between 1 and 2.
  let randomIndex: number; //used to determine the index in letters table.
  let letterGenerated: string; //used to determine the letter generated.

  //do-while loop
  do {
    randomIndex = Math.floor(Math.random() * letters.length); //choose a random index
    letterGenerated = letters[randomIndex].toUpperCase(); //choose the corresponding word with the index

    if (sameLetter === 1) {
      //IF the letter CAN be the same as the last letter chosen THEN
      break;
    } else {
      //ELSE, the current generated letter CANNOT be the same as the last generated letter

      // prettier-ignore
      if (letterGenerated !== lastGenerated_letter && letterGenerated !== "Redo") {
        //IF the last letter generated if different than the current letter generated THEN
        break; //.
      } else {
        //ELSE, redo the loop.
        letterGenerated = "Redo";
      }
    }
  } while (letterGenerated === "Redo");
  //--

  lastGenerated_letter = letterGenerated; //Set the last generated_letter variable
  return letterGenerated; //return final product.
}

//---EXPORTS:
export default generateLetter;
