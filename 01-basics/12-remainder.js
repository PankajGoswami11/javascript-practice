// 1️⃣2️⃣ Find the Remainder
// Find the remainder when one number is divided by another.
let a = 29;
let b = 4;

// WAY 1: The Modern Way (Modulo Operator)
// This is the fastest and most common method in JavaScript.
let remainder = a % b; 
console.log(remainder);
// output: 1

// WAY 2: The Mathematical Way (Floor Division)
// We find how many full times 4 fits into 29, then subtract the difference.
let whole = Math.floor(a / b); // Result: 7
let remainder2 = a - (whole * b); // 29 - 28 = 1
console.log(remainder2);
// output: 1

// WAY 3: The Logic Way (Repeated Subtraction)
// We keep taking 4 away from 29 until we can't anymore.
let tempA = a; // Use a copy so we don't destroy the original 'a'
while (tempA >= b) {
  tempA = tempA - b;
}
let remainder3 = tempA;
console.log(remainder3);
// output: 1