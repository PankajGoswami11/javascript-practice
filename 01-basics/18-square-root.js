// 1️⃣8️⃣ Find Square Root
let num = 81;

// Way 1: Direct Variable
let squareRoot1 = Math.sqrt(num);
console.log(`${squareRoot1}`);
console.log(`${hours}hr = ${toMinutes(hours)}min`);
// Output: 9

// Way 2: Standard Function (Fixed to use 'val')
function getSquareRoot(val) {
  return Math.sqrt(val); // Use 'val' instead of 'num'
}
console.log(`${getSquareRoot(num)}`);
// Output: 9

// Way 3: Arrow Function (Clean & Modern)
const calculateRoot = (n) => Math.sqrt(n);
console.log(`${calculateRoot(num)}`);
// Output: 9