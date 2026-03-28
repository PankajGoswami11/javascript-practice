// 🔹 Pure vs Impure Function

// ❌ Impure Function (external variable use karta hai)
let total = 0;
function addTotal(num) {
  total += num;
}

// ✅ Pure Function
function addPure(total, num) {
  return total + num;
}

// 🔹 Closure
function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

// 🔹 IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Initialized");
})();

// 🔹 Real Example: Discount Calculator (HOF)
function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

const tenPercent = discountCalculator(10);
console.log(tenPercent(100)); // 90

// 🔹 BMI Calculator
function bmi(weight, height) {
  return (weight / (height * height)).toFixed(2);
}
console.log(bmi(69, 1.7));

// 🔹 Counter using Closure
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c = createCounter();
console.log(c()); // 1
console.log(c()); // 2

// 🔹 Pure Function Example
function createDouble(val) {
  return val * 2;
}
console.log(createDouble(3));

// 🔹 IIFE for Data Privacy
(function () {
  const password = "secret";
  console.log("Private:", password);
})();