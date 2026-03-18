// 2️⃣3️⃣ Square and Cube
// way 1: Using Functions for Reusability
function square(num){ 
    return num * num;
}
function cube(num){ 
    return num * num * num;
}
console.log(square(5)); // 25
console.log(cube(5)); // 125

// way 2: Using Arrow Functions (Modern & Concise)
const squareArrow = (num) => num * num;
const cubArrow = (num) => num * num* num;
console.log(squareArrow(5));
 //output: 25
console.log(cubArrow(5)); 
//output: 125
