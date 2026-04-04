// 🔹 Destructuring

let user = {
  name: "Pankaj",
  age: 21
};

let { name, age } = user;
console.log(name, age); // Pankaj 21

// 🔹 Spread Operator (Copy Object)

let original = { name: "Pankaj" };

let copy = { ...original };
copy.name = "Rahul";

console.log(original.name); // Pankaj
console.log(copy.name);     // Rahul

// 🔹 Merging Objects

let obj1 = { a: 1 };
let obj2 = { b: 2 };

let merged = { ...obj1, ...obj2 };
console.log(merged); // { a:1, b:2 }

// 🔹 Deep Access

let data = {
  user: {
    profile: {
      name: "Pankaj"
    }
  }
};

console.log(data.user.profile.name); // Pankaj

// 🔹 Check Property

let obj = { name: "Pankaj" };

console.log("name" in obj); // true
console.log(obj.hasOwnProperty("name")); // true