// 30: Calculator using callback

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }

function divide(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

function displayResult(operation, a, b) {
    console.log("Result:", operation(a, b));
}

displayResult(add, 10, 5);
displayResult(subtract, 10, 5);
displayResult(multiply, 10, 5);
displayResult(divide, 10, 5);
displayResult(remainder, 10, 3);

