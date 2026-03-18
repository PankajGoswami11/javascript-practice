// 2️⃣5️⃣ Even or Odd (Function)
// way 1: Using a Function with Modulo (Clean & Reusable)
function  evenOddNumber(num){
    if(num % 2 === 0) return "even";
    return "odd";
}
console.log(evenOddNumber(6));
// output: even
console.log(evenOddNumber(7));
// output: odd

// way 2: Using Math.abs() (The "Safe" Modulo)
function evenOddNumber(num) {
    return Math.abs(num % 2) === 0 ? "even" : "odd";
}

// way 3: The Ternary Shortcut
const evenOddNumber = (num) => (num % 2 === 0 ? "even" : "odd");
console.log(evenOddNumber(6));
// output: even
console.log(evenOddNumber(7));
// output: odd