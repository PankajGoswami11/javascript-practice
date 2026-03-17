// 1️⃣4️⃣ Check Positive, Negative, or Zero
let num = -8;

// way 1: Using if-else statements (Classic Approach)
function check(num){
if(num >= 1) return`Positive`;
if(num < 0) return`Negative`;
return`Zero`;
};
console.log(check(num));
// Output: Negative

// way 2: Using Math.sign() (Modern ES6)
// The Math.sign() method is specifically designed for this. It returns:
let sign = Math.sign(num);
if (sign === 1) console.log("Positive");
else if (sign === -1) console.log("Negative");
else console.log("Zero")
// Output: Negative

// way 3: Using a Ternary Operator (One-Liner) 
// The ternary operator is a concise "shorthand" for if/else. This version correctly handles zero and decimal numbers: 
const check = (num) => num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(check(num)); 
// Output: Negative
