// 1️⃣3️⃣ Convert Minutes to Seconds
let minutes = 5;

//  WAY 1: without function
let secondsConverter = minutes * 60;
console.log(`${minutes}min contain ${secondsConverter}sec`)
//Output: 5min contain 300sec

//WAY 2: Using a Standard Function
function convertToSeconds(mins){
  return mins*60;
}
//Output: 5min contain 300sec
console.log(`${minutes}min contain ${convertToSeconds(minutes)}sec`);

//WAY 3: Using an Arrow Function (ES6+)
// A shorter, more modern version of the standard function.
const minutesToSeconds = (mins) => minutes * 60;
console.log(`${minutes}min contain ${minutesToSeconds(minutes)}sec`);

//WAY 4:Using Template Literals for Formatting
// If you want to keep the calculation inside the console log itself:
console.log(`${minutes}min = ${minutes * 60}sec`)
