// 🔹 Object Creation

let user = {
  name: "Pankaj",
  age: 21,
  city: "Delhi"
};

console.log(user);

// 🔹 Accessing Values

console.log(user.name);       // Pankaj
console.log(user["age"]);     // 21

// 🔹 Updating Values

user.age = 22;
console.log(user.age);        // 22

// 🔹 Adding New Property

user.email = "pankaj@gmail.com";
console.log(user);

// 🔹 Deleting Property

delete user.city;
console.log(user);

// 🔹 Dynamic Access

let key = "name";
console.log(user[key]);       // Pankaj