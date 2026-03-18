// 2️⃣1️⃣ Basic Calculator
// Way 1: The "Clean" Function (Using if/else)
function calculator(num1, num2, operator){
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "%") return num1 % num2;
    if (operator === "/") return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    return "Invalid Operator";
}
console.log(calculator(10, 5, "+"));
//output: 15
console.log(calculator(10, 5, "/"));
//output: 2

// way 2: Using an Object to Map Operations
const operations ={
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '/' : (a, b) => a / b,
    '%' : (a, b) => a % b
};
function fastCalc(a, b, op){
    return operations[op] ? operations[op](a, b) : "Oprator not found";
}
console.log(fastCalc(8, 2, "*"));
//output: 16

// way 3: Using a Switch Statement (Classic Approach)  
function basicCalc(a, b, op){
    switch(op){
        case '+' : return a + b;
        case '-' : return a - b;
        case '*' : return a * b;
        case '%' : return a % b;
        case '/' : return b !== 0 ? a/b :"Error";
    }
}
console.log(basicCalc(20, 4, "%"))
//output: 0