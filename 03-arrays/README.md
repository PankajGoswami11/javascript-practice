# 🚀 JavaScript Arrays

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Arrays-yellow?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/Level-Beginner_to_Advanced-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Focus-Problem_Solving-success?style=for-the-badge" />
</p>

---

## 📌 Overview

Arrays are one of the most fundamental and powerful data structures in JavaScript.

They allow you to store, manipulate, and transform collections of data efficiently.

This section covers everything from basic array creation to advanced operations like transformation and aggregation.

---

## 🧠 What is an Array?

An array is a collection of values stored in a single variable.

```js
let arr = [1, 2, 3, 4, 5];
```

* Index starts from `0`
* Each value can be accessed using its index

```js
console.log(arr[0]); // 1
```

---

## 🎯 Why Arrays Matter

Arrays are used in:

* Rendering lists (UI components)
* API data handling
* Filtering and searching
* Calculations (totals, analytics)
* Data transformation

---

## 🧩 Types of Operations Covered

✔ Creation
✔ Access & Update
✔ Modification
✔ Iteration
✔ Transformation
✔ Optimization

---

## 🛠 Creating Arrays

### ▸ Using Array Literal (Recommended)

```js
let cars = ["Saab", "Volvo", "BMW"];
```

### ▸ Using Constructor

```js
let cars = new Array("Saab", "Volvo", "BMW");
```

---

## ✏️ Updating Arrays

```js
let arr = [1, 2, 3, 4, 5, 6];

arr[2] = 13;

console.log(arr);
// [1, 2, 13, 4, 5, 6]
```

---

## 📦 Core Array Methods

### 🔹 push() → Add at end

```js
let arr = [1, 2, 3, 4, 5];
arr.push(7000);

console.log(arr);
// [1, 2, 3, 4, 5, 7000]
```

---

### 🔹 pop() → Remove from end

```js
let arr = [1, 2, 3, 4, 5];
arr.pop();

console.log(arr);
// [1, 2, 3, 4]
```

---

### 🔹 shift() → Remove from start

```js
let arr = [1, 2, 3, 4, 5];
arr.shift();

console.log(arr);
// [2, 3, 4, 5]
```

---

### 🔹 unshift() → Add at start

```js
let arr = [1, 2, 3, 4, 5];
arr.unshift(0);

console.log(arr);
// [0, 1, 2, 3, 4, 5]
```

---

### 🔹 splice() → Modify array (add/remove)

```js
let arr = [1, 2, 3, 4, 5];

arr.splice(2, 1);

console.log(arr);
// [1, 2, 4, 5]
```

---

### 🔹 slice() → Create a new array

```js
let arr = [1, 2, 3, 4, 5];

let newArr = arr.slice(2, 5);

console.log(newArr);
// [3, 4, 5]
```

---

### 🔹 reverse() → Reverse array

```js
let arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr);
// [5, 4, 3, 2, 1]
```

---

### 🔹 sort() → Sort values

```js
const arr = [40, 100, 1, 5, 25, 10];

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr);
// [1, 5, 10, 25, 40, 100]
```

---

## 🔁 Iteration & Transformation

### 🔹 forEach() → Loop through array

```js
let arr = [11, 23, 3, 1, 25];

arr.forEach(function (val) {
  console.log(val);
});
```

---

### 🔹 map() → Create new array

```js
let arr = [11, 23, 3, 1, 25];

let mapArr = arr.map(function (val) {
  return val * 2;
});

console.log(mapArr);
```

---

### 🔹 filter() → Select specific values

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let filtArr = arr.filter(function (val) {
  return val > 4;
});

console.log(filtArr);
// [5, 6, 7, 8]
```

---

### 🔹 reduce() → Convert to single value

```js
let arr = [11, 23, 3, 9, 25];

let ans = arr.reduce(function (acc, val) {
  return acc + val;
}, 0);

console.log(ans);
// 71
```

---

### 🔹 find() → First matching value

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let result = arr.find(function (val) {
  return val === 5;
});

console.log(result);
// 5
```

---

### 🔹 some() → At least one match

```js
let arr = [10, 30, 23, 11, 90];

let result = arr.some(function (val) {
  return val > 85;
});

console.log(result);
// true
```

---

### 🔹 every() → All must match

```js
let arr = [10, 30, 23, 11, 90];

let result = arr.every(function (val) {
  return val > 5;
});

console.log(result);
// true
```

---

## 🧠 Destructuring

Extract values easily from arrays:

```js
let arr = [1, 2, 3, 4, 5];

let [a, b] = arr;

console.log(a, b);
// 1 2
```

```js
let [c, d, , , e] = arr;

console.log(c, d, e);
// 1 2 5
```

---

## ⚡ Spread Operator

Create a copy of an array:

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8.9];

let arr2 = [...arr];

console.log(arr2.pop()); // 8.9
console.log(arr2);       // modified copy
console.log(arr);        // original unchanged
```

---

## 📊 Summary

Arrays help you:

✔ Store multiple values
✔ Perform transformations
✔ Filter and process data
✔ Solve real-world problems

They are one of the most important concepts for any JavaScript developer.

---

## ⚖️ Important Comparisons

### map vs forEach

| Feature  | map()     | forEach() |
| -------- | --------- | --------- |
| Return   | New array | Undefined |
| Use case | Transform | Loop      |

---

### filter vs find

| Feature  | filter()         | find()       |
| -------- | ---------------- | ------------ |
| Output   | Array            | Single value |
| Use case | Multiple results | First match  |

---

## 🧠 Quick Revision

* push → add end
* pop → remove end
* shift → remove start
* unshift → add start
* map → transform
* filter → condition
* reduce → single value

---

## 🎯 Learning Flow

```
Basic → Intermediate → Advanced
   ↓          ↓            ↓
Create   Modify      Transform
Access   Slice       Optimize
Update   Splice      Real-world use
```

---

## 📂 Folder Structure

```
03-arrays/
│
├── README.md
├── basic.js
├── intermediate.js
├── advanced.js
├── questions/
│   ├── 01-basic.js
│   ├── 02-basic.js
│   ├── ...
```

---

## 🛠 How to Use

1. Read this README for concepts
2. Open `basic.js` → fundamentals
3. Move to `intermediate.js` → logic
4. Practice `advanced.js` → real usage
5. Solve questions in `questions/`

---

## 🚀 Goal

The goal of this section is to:

* Build strong fundamentals
* Improve problem-solving
* Prepare for real-world development
* Strengthen interview readiness

---

## 👨‍💻 Author

Pankaj Goswami
