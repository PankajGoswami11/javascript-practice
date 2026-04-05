// 14 Question:
// Add dynamic key in object using computed properties.

let role = "admin";

let obj = {
  name: "harsh",
  [role]: "superuser",
};

console.log(obj);

// 📤 Output:
// { name: 'harsh', admin: 'superuser' }