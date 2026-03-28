// ===============================
// 📌 FUNCTION QUESTIONS PRACTICE
// ===============================

// Q1: Function Declaration vs Expression (Hoisting)

// Function Declaration
abcd(); // works
function abcd() {
  console.log("Declaration");
}

// Function Expression
// abcd2(); ❌ error
let abcd2 = function () {
  console.log("Expression");
};

// -------------------------------

// Q2: Convert into Arrow Function

function multiply(a, b) {
  return a * b;
}

// Arrow Version
const multiplyArrow = (a, b) => a * b;

// -------------------------------

// Q3: Parameters vs Arguments

function welcome(name) {
  console.log(name);
}
welcome("Harsh");

// Parameter → name
// Argument → "Harsh"

// -------------------------------

// Q4: Count Parameters & Arguments

function demo(a, b, c) {}
demo(1, 2);

// Parameters = 3
// Arguments = 2

// -------------------------------

// Q5: Default Parameter Output

function sayHi(name = "Guest") {
  console.log("Hi", name);
}
sayHi(); // Hi Guest

// -------------------------------

// Q6: Rest Operator

function abcd(...val) {
  console.log(val);
}
abcd(1, 2, 3, 4);

// Output: [1,2,3,4]

// -------------------------------

// Q7: Rest with fixed params

function abcd2(a, b, c, ...val) {
  console.log(a, b, c, val);
}
abcd2(1, 2, 3, 4, 5);

// -------------------------------

// Q8: Sum using Rest Operator

function getScore(...score) {
  let total = 0;
  score.forEach((val) => {
    total += val;
  });
  return total;
}

console.log(getScore(10, 20, 30));

// -------------------------------

// Q9: Early Return Fix

function checkAge(age) {
  if (age < 18) return "Too young";
  return "Allowed";
}

console.log(checkAge(17));

// -------------------------------

// Q10: Return Value

function f() {
  return;
}
console.log(f()); // undefined

// -------------------------------

// Q11: First-Class Function

let myFunc = function () {
  return "hello";
};

console.log(myFunc());

// -------------------------------

// Q12: Pass Function as Argument

function run(fn) {
  fn();
}

run(function () {
  console.log("hey");
});

// -------------------------------

// Q13: Higher Order Function

function outer() {
  return function () {
    console.log("Hello");
  };
}

outer()();

// -------------------------------

// Q14: Pure vs Impure

// Impure
let total = 0;
function addTotal(num) {
  total += num;
}

// Pure
function addPure(total, num) {
  return total + num;
}

// -------------------------------

// Q15: Closure Output

function outerCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = outerCounter();
counter(); // 1
counter(); // 2

// -------------------------------

// Q16: Convert to IIFE

(function () {
  console.log("Initialized");
})();

// -------------------------------

// Q17: Hoisting Output

// greet(); ❌ error
var greet = function () {
  console.log("Hi!");
};

// -------------------------------

// Q18: Hoisting (works)

greet2();
function greet2() {
  console.log("Hi!");
}

// -------------------------------

// Q19: BMI Calculator

function bmi(weight, height) {
  return (weight / (height * height)).toFixed(2);
}

console.log(bmi(69, 1.7));

// -------------------------------

// Q20: Discount Calculator (HOF)

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

const thirty = discountCalculator(30);
console.log(thirty(300));

// -------------------------------

// Q21: Counter using Closure

function counterFunc() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c = counterFunc();
console.log(c());
console.log(c());

// -------------------------------

// Q22: Pure Function Example

function createDouble(val) {
  return val * 2;
}

console.log(createDouble(3));

// -------------------------------

// Q23: IIFE for Privacy

(function () {
  const password = "secret";
  console.log(password);
})();