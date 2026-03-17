// 1️⃣7️⃣ Convert Hours to Minutes
let hours = 3;
// way 1: Using a Variable for the Conversion Factor
let minutesConverter = hours * 60;
console.log(`${hours}hr contain ${minutesConverter}min`)
//Output: 3hr contain 180min

// way 2: Using a Function for Reusability
function convertToMinutes(hrs){
  return hrs*60;
}
console.log(`${hours}hr = ${convertToMinutes(hours)}min`);
// Output: 3hr = 180min

// WAY 3: Using an Arrow Function (Modern & Short)
// Arrow functions are the standard in modern JavaScript (ES6+).
const toMinutes = (hrs) => hrs * 60;
console.log(`${hours}hr = ${toMinutes(hours)}min`);
// Output: 3hr = 180min