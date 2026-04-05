// 04 Question:
// Why does obj[key] work but obj.key does not for dynamic keys?

let obj = { name: "Harsh" };
let key = "name";

console.log(obj.key);
console.log(obj[key]);

// 📤 Output:
// undefined
// Harsh
