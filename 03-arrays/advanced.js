// 🔹 ADVANCED ARRAY METHODS

let arr = [11, 23, 3, 1, 25];

// map → create new array
let doubled = arr.map((val) => val * 2);
console.log(doubled);

// filter → condition based
let filtered = arr.filter((val) => val > 10);
console.log(filtered);

// reduce → single value
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum);

// find → first match
let found = arr.find((val) => val === 23);
console.log(found);

// some → at least one true
let hasBig = arr.some((val) => val > 20);
console.log(hasBig);

// every → all must be true
let allPositive = arr.every((val) => val > 0);
console.log(allPositive);

// destructuring
let [a, b] = arr;
console.log(a, b);

// spread operator
let copy = [...arr];
console.log(copy);
