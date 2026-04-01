// 18: Clone this array properly (not by reference)
// Spread operator (...) creates a shallow copy
// So arr2 is a new array, not a reference to arr

// Original array
let arr = [1, 2, 3];

// Clone using spread operator
let arr2 = [...arr];

// Output
console.log(arr);   // [1, 2, 3]
console.log(arr2);  // [1, 2, 3]