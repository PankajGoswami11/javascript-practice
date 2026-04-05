# 🚀 JavaScript Functions

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?color=36BCF7&center=true&vCenter=true&lines=Functions+Drive+JavaScript;Write+Reusable+Logic;Master+Execution+Flow" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Functions-yellow?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/Level-Beginner_to_Advanced-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Focus-Concepts_+_Practice-green?style=for-the-badge" />
</p>

---

## 🚀 Overview

This section covers the fundamentals of JavaScript functions with clear explanations and structured examples.

It is designed to build a strong understanding of how functions work and how they are used in real-world scenarios.

---

## 📌 What is a Function?

A function is a reusable block of code that performs a specific task.

In JavaScript, code runs line by line, but a function executes only when it is called.

```js id="q9l3lm"
function greet() {
  console.log("Hello");
}
greet();
```

---

## ⚙️ Function Execution Flow

```txt id="2cok3k"
Call → Execution Context → Memory Creation → Code Execution → Return → End
```

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

```js id="g0qk0r"
function greet() {
  console.log("Hello");
}
greet();
```

---

### 2. Function Expression

A function stored inside a variable.
It is not available before initialization.

```js id="1vhtc6"
const greet = function() {
  console.log("Hello");
};
greet();
```

---

### 3. Arrow Function (ES6)

A shorter syntax for writing functions.

```js id="b6h5tl"
const greet = () => {
  console.log("Hello");
};
```

---

### 4. Anonymous Function

A function without a name, commonly used in callbacks.

```js id="fx2u3v"
setTimeout(function() {
  console.log("Hello");
}, 1000);
```

---

## 🔁 Parameters vs Arguments

```txt id="x1p9n8"
Parameters → defined in function
Arguments  → passed during call
```

```js id="3bz2fy"
function welcome(name){
  console.log(name);
}
welcome("Harsh");
```

---

## ⚙️ Default Parameters

```js id="u1m7jw"
function add(v1 = 0, v2 = 0){
  console.log(v1 + v2);
}

add();        
add(12, 8);   
```

---

## 📦 Rest Operator (`...`)

```js id="skq5jz"
function abcd(...val){
  console.log(val);
}
abcd(1,2,3,4,5,6);
```

```js id="j4n2o1"
function abcd(a, b, c, ...val){
  console.log(a, b, c, val);
}
abcd(1,2,3,4,5,6);
```

---

## 🔙 Return Values

```txt id="yq3xrw"
Return → sends value back
No return → undefined
```

```js id="c4o1kt"
function abcd(){
  return 12;
}
```

---

## ⚡ Early Return

```js id="m6px0v"
function checkAge(age){
  if(age < 18) return "Too young";
  return "Allowed";
}
```

---

## 🧠 First-Class Functions

```txt id="3wop2y"
Functions can be passed, returned, and stored
```

```js id="7qk1ra"
function abcd(val){
  val();
}

abcd(function(){
  console.log("hey");
});
```

---

## 🔄 Higher Order Functions

```txt id="b2l8sn"
Function → takes function OR returns function
```

```js id="2r1czg"
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

```js id="1y5tqo"
let total = 0;
function addTotal(num){
  total += num;
}
```

### Pure

```js id="y9wh3x"
function addTotalPure(total, num){
  return total + num;
}
```

---

## 🔒 Closures

```txt id="6p8n1s"
Inner function remembers outer scope
```

```js id="p4h9vd"
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

```js id="l9e7vm"
(function init(){
  console.log("Initialized");
})();
```

---

## 🧬 Hoisting

```txt id="0t4j0z"
Declaration → hoisted ✔
Expression → not hoisted ❌
```

### Function Declaration

```js id="0xk3g2"
greet();
function greet(){
  console.log("Hi!");
}
```

### Function Expression

```js id="k5l2qa"
// greet(); ❌
var greet = function(){
  console.log("Hi!");
};
```

---

## 🔄 Async Flow (Core JS Behavior)

```txt id="0hkl1o"
Call → Web APIs → Callback Queue → Event Loop → Execution
```

---

## 📂 Folder Structure

```id="z5q7mr"
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
│
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
│
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

## 📈 Learning Path

```txt id="g8q3zo"
Basics → Parameters → Closures → HOF → Async JS → Mastery
```

---

## 👨‍💻 Author

**Pankaj Goswami**
