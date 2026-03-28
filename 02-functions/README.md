# 🚀 JavaScript Functions

This section covers the fundamentals of JavaScript functions with clear explanations and structured examples.
It is designed to build a strong understanding of how functions work and how they are used in real-world scenarios.

---

## 📌 What is a Function?

A function is a reusable block of code that performs a specific task.
In JavaScript, code runs line by line, but a function executes only when it is called.

---

## 🎯 Why Functions are Important

Functions help to:

* Reduce code duplication
* Improve readability
* Organize logic into smaller parts
* Make code reusable and maintainable

---

## 🧩 Types of Functions

### 1. Function Declaration

A function defined using the `function` keyword.
It is hoisted, which means it can be called before its definition.

```js
function greet() {
  console.log("Hello");
}
greet();
```

---

### 2. Function Expression

A function stored inside a variable.
It is not available before initialization.

```js
const greet = function() {
  console.log("Hello");
};
greet();
```

---

### 3. Arrow Function (ES6)

A shorter syntax for writing functions.

```js
const greet = () => {
  console.log("Hello");
};
```

---

### 4. Anonymous Function

A function without a name, commonly used in callbacks.

```js
setTimeout(function() {
  console.log("Hello");
}, 1000);
```

---

## 🔁 Parameters and Arguments

Parameters are variables defined in a function.
Arguments are the values passed during the function call.

```js
function welcome(name){
  console.log(name);
}
welcome("Harsh");
```

---

## ⚙️ Default Parameters

Default values are used when no arguments are provided.

```js
function add(v1 = 0, v2 = 0){
  console.log(v1 + v2);
}

add();        // 0
add(12, 8);   // 20
```

---

## 📦 Rest Operator (`...`)

The rest operator collects multiple values into an array.

```js
function abcd(...val){
  console.log(val);
}
abcd(1,2,3,4,5,6);
```

```js
function abcd(a, b, c, ...val){
  console.log(a, b, c, val);
}
abcd(1,2,3,4,5,6);
```

---

## 🔙 Return Values

A function can return a value using the `return` keyword.

```js
function abcd(){
  return 12;
}

abcd();
```

---

## ⚡ Early Return

Early return helps simplify conditions by returning early.

```js
function checkage(age){
  if(age < 18) return "Too young";
  return "Allowed";
}

console.log(checkage(17));
```

---

## 🧠 First-Class Functions

Functions can be treated like values in JavaScript.

```js
function abcd(val){
  val();
}

abcd(function(){
  console.log("hey");
});
```

---

## 🔄 Higher Order Functions

A function that accepts or returns another function.

```js
function abcd(){
  return function(){
    console.log("hello Vinay");
  }
}

abcd()();
```

---

## ⚖️ Pure vs Impure Functions

### Impure Function

Depends on external variables.

```js
let total = 0;
function addTotal(num){
  total += num;
}
```

### Pure Function

Returns output based only on input.

```js
function addTotalPure(total, num){
  return total + num;
}
```

---

## 🔒 Closures

A closure allows a function to access variables from its outer scope even after execution.

```js
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();
```

---

## ⚡ IIFE (Immediately Invoked Function Expression)

A function that runs immediately after it is defined.

```js
(function init(){
  console.log("Initialized");
})();
```

---

## 🧬 Hoisting

Hoisting moves declarations to the top of their scope.

### Function Declaration (Works)

```js
greet();
function greet(){
  console.log("Hi!");
}
```

### Function Expression (Error)

```js
// greet();
var greet = function(){
  console.log("Hi!");
};
```

---

## 📂 Folder Structure

```
02-functions/
│
├── README.md
├── basic.js
├── intermediate.js
├── advanced.js
│
├── questions/
│   ├── README.md
│
│   ├── 01-function-declaration.js
│   ├── 02-function-expression.js
│   ├── 03-arrow-function.js
│   ├── 04-anonymous-function.js
│   ├── 05-default-parameters.js
│   ├── 06-rest-operator.js
│   ├── 07-return-values.js
│   ├── 08-early-return.js
│   ├── 09-first-class-function.js
│   ├── 10-higher-order-function.js
│   ├── 11-parameters-vs-arguments.js
│   ├── 12-count-params-args.js
│   ├── 13-default-param-output.js
│   ├── 14-rest-with-params.js
│   ├── 15-sum-rest-operator.js
│   ├── 16-return-undefined.js
│   ├── 17-function-variable.js
│   ├── 18-pass-function.js
│   ├── 19-closure.js
│   ├── 20-iife.js
│   ├── 21-hoisting-declaration.js
│   ├── 22-hoisting-expression.js
│   ├── 23-bmi-calculator.js
│   ├── 24-discount-calculator.js
│   ├── 25-counter-closure.js
│   ├── 26-pure-functions.js
│   └── 27-iife-isolation.js
```

---

## 📘 File Overview

* **basic.js** → Core fundamentals
* **intermediate.js** → Practical usage
* **advanced.js** → Advanced concepts
* **questions/** → Concept-wise practice (one file per question)

---

## 🛠 How to Use

* Read the concepts from this file
* Practice from `basic.js → intermediate.js → advanced.js`
* Solve problems from the `questions` folder

---

## 👨‍💻 Author

Pankaj Goswami
