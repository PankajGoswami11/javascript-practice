//  2️⃣2️⃣ Power Calculator 

// way 1: Using the Exponentiation Operator (Modern ES6)
function power(base, exponent){
    return base ** exponent;
}
console.log(power(2, 3));
//output: 8

// Way 2: Using the built-in Math library
let base = 2;
let exp = 3;
let result = Math.pow(base, exp);
// output: 8
console.log(result); // Output: 8

// way 3: Using Math.pow() (Classic Method)
function powerMath(base, exponent){
    return Math.pow(base, exponent);
}
console.log(powerMath(2, 3));
//output: 8 

// Way 4: Manual calculation using a for-loop
function manualPower(base, exponent){
    let result = 1;
    for(let i = 0 ; i < exponent; i++){
        result = result * base;
    }
    return result;
}
console.log(manualPower(2, 2));
//output: 4
