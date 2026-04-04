// 🔹 Nested Object

let user = {
  name: "Pankaj",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

console.log(user.address.city); // Delhi

// 🔹 Optional Chaining

console.log(user.contact?.phone); // undefined

// 🔹 Looping Object

for (let key in user) {
  console.log(key, user[key]);
}

// 🔹 Object Methods

let person = {
  name: "Pankaj",
  greet() {
    return `Hello ${this.name}`;
  }
};

console.log(person.greet());

// 🔹 Object.keys, values, entries

let obj = { a: 1, b: 2 };

console.log(Object.keys(obj));    // ['a', 'b']
console.log(Object.values(obj));  // [1, 2]
console.log(Object.entries(obj)); // [['a',1],['b',2]]