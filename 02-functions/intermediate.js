// 🔹 First-Class Functions
// Functions ko values ki tarah treat kiya ja sakta hai

function execute(fn) {
  fn();
}

execute(function () {
  console.log("Hello from callback");
});

// 🔹 Higher Order Function (HOF)
// Function jo dusre function ko accept kare ya return kare

function greetUser() {
  return function () {
    console.log("Hello User");
  };
}

greetUser()();

// 🔹 Rest Operator
function collectValues(...val) {
  console.log(val);
}
collectValues(1, 2, 3, 4); // [1,2,3,4]

// 🔹 Parameters vs Arguments
function welcome(name) {
  console.log(name);
}
welcome("Harsh"); // name = parameter, "Harsh" = argument

// 🔹 Default Parameter Example
function sayHi(name = "Guest") {
  console.log("Hi", name);
}
sayHi(); // Hi Guest

// 🔹 Hoisting Difference

// Function Declaration (works)
test();
function test() {
  console.log("Hoisted");
}

// Function Expression (error if called before)
// testExp();
const testExp = function () {
  console.log("Not hoisted");
};