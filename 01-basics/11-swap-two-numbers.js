// 1️⃣1️⃣ Swap Two Numbers
// Swap two numbers without using a third variable.
let a = 5;
let b = 10;

// WAY 1: Using Destructuring Assignment (Modern ES6)
[a, b] = [b, a]
console.log(`a = ${a}, b = ${b}`)
// Output:a = 10, b = 5

// WAY 2: Arithmetic Addition/Subtraction
// Swaps numbers without a temporary variable.
a = a + b;
b = a - b;
a = a - b;
console.log(`a = ${a}, b = ${b}`)
// Output:a = 10, b = 5

// WAY 3: Arithmetic Multiplication/Division
// Similar logic to addition, but slightly riskier.
a = a * b;
b = a / b;
a = a / b;
console.log(`a = ${a}, b = ${b}`)
// Output:a = 10, b = 5