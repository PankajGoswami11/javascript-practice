// 8️⃣ Simple Calculator
// Create a small calculator that can add, subtract, multiply, divide.
let a = 10;
let b = 5;
let operator = "+"; // This is a String, so cases must be Strings
switch (operator) {
  case "+": // Match the symbol directly
    console.log(a + b);
    break;
  case "-": 
    console.log(a - b);
    break;
  case "*": 
    console.log(a * b);
    break;
  case "/": 
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
    break;
  default: 
    console.log("Invalid operator selection");
}
// WAY 2: Using Object Lookup (Scalable & Modern)
const operations = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};
const calculate = (num1, num2, op) => {
  return operations[op] ? operations[op](num1, num2) : "Invalid operator";
};
console.log(calculate(10, 5, "+"));
