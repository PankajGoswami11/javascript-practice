// 1️⃣9️⃣ Check Divisible by 5 and 3
let num = 15;

// way 1: if-else statement
if(num%3 === 0 && num%5 === 0){
    console.log(`Divisible by both`)
}
else{
    console.log(`Not Divisible by both`)
}

// way 2: Using a Function for Reusability
function checkDivisibility (num){
    if(num%3 === 0 && num%5 === 0){
        return `Divisible by both`;
    }
    else{
        return `Not Divisible by both`;
    }
};
console.log(checkDivisibility(num));

// way 3: The Ternary Operator (One-Liner)
let result = (num % 5 === 0 && num % 5 === 0) ? "yes" : "no";
console.log(`Is it divisible? ${result}`);
// Output: Is it divisible? yes

// way 4:The "Clean" Way (Function)
// Returns true only if both conditions are met
function isDivisibleBy5And3(n) {
  return n % 5 === 0 && n % 3 === 0;
}
console.log(isDivisibleBy5And3(15)); // true
console.log(isDivisibleBy5And3(10)); // false 
