// 🔹 What is a Function?
// Function ek reusable block of code hota hai jo tab execute hota hai jab usse call kiya jata hai.

// 1️⃣ Function Declaration
// Normal function jo hoisted hota hai
function greet() {
  console.log("Hello");
}
greet();

// 2️⃣ Function Expression
// Function ko variable me store kiya jata hai
const greetExp = function () {
  console.log("Hello");
};
greetExp();

// 3️⃣ Arrow Function
// Short syntax (ES6)
const greetArrow = () => {
  console.log("Hello");
};
greetArrow();

// 4️⃣ Anonymous Function
// Function without name (mostly callback me use hota hai)
setTimeout(function () {
  console.log("Hello after 1 sec");
}, 1000);

// 🔹 Parameters & Arguments
function add(v1, v2) {
  console.log(v1, v2);
}
add(); // undefined undefined

// 🔹 Default Parameters
function addDefault(v1 = 0, v2 = 0) {
  console.log(v1 + v2);
}
addDefault();       // 0
addDefault(12, 8);  // 20

// 🔹 Return Values
function getValue() {
  return 12;
}
console.log(getValue()); // 12

// 🔹 Early Return
function checkAge(age) {
  if (age < 18) return "Too young";
  return "Allowed";
}
console.log(checkAge(17)); // Too young