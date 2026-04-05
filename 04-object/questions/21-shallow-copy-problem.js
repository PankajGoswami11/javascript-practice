// 21 Question:
// Show problem of shallow copy in objects.

const obj = {
  info: { score: 80 },
};

let copy = { ...obj };

copy.info.score = 100;

console.log(obj.info.score);

// 📤 Output:
// 100 ❌ (original also changed)
