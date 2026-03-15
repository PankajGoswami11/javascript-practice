// 🔟 Power Calculator
// Find the power of a number.
let base = 3;
let power = 4;
// WAY 1: The Modern Way (** Operator)
let result = base ** power;
console.log(result);
// Output: 81
// WAY 2: The Built-in Method (Math.pow)
let result2 = Math.pow(base, power); 
console.log(result2);
// Output: 81
// WAY 3: The Functional Way 
const calculatePower = (b, p) => b ** p;
console.log(calculatePower(3, 4)); 
// Output: 81
