# 🚀 QuerySelector Practice (JavaScript DOM)

![JavaScript](https://img.shields.io/badge/JavaScript-DOM-yellow)
![Level](https://img.shields.io/badge/Level-Beginner_to_Intermediate-green)
![Practice](https://img.shields.io/badge/Practice-Hands--On-blue)

---

## 📌 Overview

This repository contains **basic to intermediate level practice questions** for mastering:

* `querySelector`
* `querySelectorAll`
* DOM element selection using CSS selectors

It is perfect for beginners who want to build a **strong foundation in DOM manipulation**.

---

## 🧠 What You'll Learn

✔️ Selecting elements using **id, class, and tag**
✔️ Selecting elements inside a **parent (nested selection)**
✔️ Difference between `querySelector` and `querySelectorAll`
✔️ Working with **NodeList & indexing**
✔️ Using pseudo-selectors like `:last-child`, `:nth-of-type()`

---

## 🧩 Practice Levels

### 🟢 Basic Level

* Simple element selection
* ID, class, and tag targeting
* First and second element selection

### 🔵 Intermediate Level

* Nested selectors
* Selecting inside specific containers
* Index-based selection
* Advanced CSS selectors

---

## 🎯 Visual Understanding

### 🔹 querySelector

```
document.querySelector(".text")

        ↓

Returns ONLY the FIRST matching element
```

---

### 🔹 querySelectorAll

```
document.querySelectorAll(".text")

        ↓

Returns ALL matching elements (NodeList)

[text1, text2, text3]
```

---

## ⚖️ querySelector vs querySelectorAll

| Feature  | querySelector  | querySelectorAll  |
| -------- | -------------- | ----------------- |
| Returns  | Single Element | Multiple Elements |
| Output   | Element        | NodeList          |
| Use Case | First match    | All matches       |

---

## 💻 Example Usage

```javascript
// Select by ID
document.querySelector("#title");

// Select by class
document.querySelector(".text");

// Select all elements
document.querySelectorAll("p");

// Select inside a container
document.querySelector(".container p");

// Select last element
document.querySelector(".item:last-child");
```

---

## 🔥 Important Concepts

* Indexing starts from **0**
* `querySelectorAll` returns a **NodeList (array-like structure)**
* Use `[index]` to access specific elements

```javascript
let items = document.querySelectorAll(".item");

console.log(items[0]); // First item
console.log(items[1]); // Second item
```

---

## ⚡ Pro Tips

💡 Use meaningful variable names
💡 Prefer `querySelectorAll` for multiple elements
💡 Combine selectors like `.container p`
💡 Keep your code clean and readable

---

## 📁 Project Structure

```
querySelector-practice/
│
├── index.html
├── querySelector-practice.js
└── README.md
```

---

## 🎯 Learning Outcome

After completing this practice:

✅ You can confidently select any DOM element
✅ You understand how CSS selectors work in JavaScript
✅ You are ready to move into DOM manipulation

---

## 🚀 What's Next?

* DOM Manipulation (change text, styles)
* Event Handling (click, input, submit)
* Mini Projects (Todo App, Counter App)

---

## 🙌 Author

**Pankaj Goswami**

---

## ⭐ Support

If you found this helpful, give this project a ⭐ on GitHub!
