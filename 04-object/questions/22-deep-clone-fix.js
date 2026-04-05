// ❓ Question:
// Fix shallow copy issue using deep clone.

const obj = {
  info: { score: 80 },
};

let copy = JSON.parse(JSON.stringify(obj));

copy.info.score = 100;

console.log(obj.info.score);
console.log(copy.info.score);

// 📤 Output:
// 80
// 100