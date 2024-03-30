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
function generateLetter(): string {
  //console.log("generating letter")

  //Get a random letter from the 'letters' table:
  const randomIndex = Math.floor(Math.random() * letters.length);
  letterGenerated = letters[randomIndex].toUpperCase();

  return letterGenerated;
}

//---EXPORTS:
export default generateLetter;
