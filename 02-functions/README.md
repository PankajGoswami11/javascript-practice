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

## 🔁 Parameters vs Arguments

* **Parameters** → Variables defined in function
* **Arguments** → Values passed during function call

```js
function welcome(name){
  console.log(name);
}
welcome("Harsh");
```

---

## ⚙️ Default Parameters

```js
function add(v1 = 0, v2 = 0){
  console.log(v1 + v2);
}

add();        // 0
add(12, 8);   // 20
```

---

## 📦 Rest Operator (`...`)

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

```js
function abcd(){
  return 12;
}
```

---

## ⚡ Early Return

```js
function checkAge(age){
  if(age < 18) return "Too young";
  return "Allowed";
}
```

---

## 🧠 First-Class Functions

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

### Impure

```js
let total = 0;
function addTotal(num){
  total += num;
}
```

### Pure

```js
function addTotalPure(total, num){
  return total + num;
}
```

---

## 🔒 Closures

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

## ⚡ IIFE

```js
(function init(){
  console.log("Initialized");
})();
```

---

## 🧬 Hoisting

### Function Declaration

```js
greet();
function greet(){
  console.log("Hi!");
}
```

### Function Expression

```js
// greet(); ❌
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
|
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
|
│   ├── 21-hoisting-declaration.js
│   ├── 22-hoisting-expression.js
│   ├── 23-bmi-calculator.js
│   ├── 24-discount-calculator.js
│   ├── 25-counter-closure.js
│   ├── 26-pure-functions.js
│   ├── 27-iife-isolation.js
│
│   ├── 28-callback-basic.js
│   ├── 29-callback-square.js
│   ├── 30-calculator-callback.js
│   ├── 31-settimeout-basic.js
│   ├── 32-settimeout-loop.js
│   ├── 33-setinterval-basic.js
│   ├── 34-callback-hell.js
│   ├── 35-promise-basic.js
│   ├── 36-promise-chaining.js
│   ├── 37-async-await.js
│   ├── 38-error-handling.js
│   └── 39-event-listener.js
```

---

## 📘 File Overview

* **basic.js** → Core fundamentals
* **intermediate.js** → Practical usage
* **advanced.js** → Advanced concepts
* **questions/** → 1–39 structured practice questions (basic → async JS)

---

## 📚 Questions Breakdown

* **01–10** → Basics
* **11–20** → Intermediate
* **21–27** → Core Concepts
* **28–39** → Callbacks + Async JavaScript

---

## 🛠 How to Use

* Read concepts from this file
* Practice: `basic.js → intermediate.js → advanced.js`
* Solve all problems from `questions/`

---

## 👨‍💻 Author

**Pankaj Goswami**
