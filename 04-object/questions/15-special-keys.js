// 15 Question:
// Can object keys be numbers or booleans?

const obj = {
  true: "yes",
  42: "answer",
};

console.log(obj[42]);
console.log(obj[true]);

// 📤 Output:
// answer
// yes
