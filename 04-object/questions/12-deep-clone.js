// 12 Question:
// Deep clone an object and modify the copy.

const user = {
  address: { city: "Bhopal" },
};

let copy = JSON.parse(JSON.stringify(user));

copy.address.city = "Indore";

console.log(user.address.city);
console.log(copy.address.city);

// 📤 Output:
// Bhopal
// Indore