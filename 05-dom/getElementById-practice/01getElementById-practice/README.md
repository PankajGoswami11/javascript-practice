# ⚡ JavaScript DOM Practice (Q1–Q25)

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?color=F7DF1E&size=25&center=true&vCenter=true&width=600&lines=JavaScript+DOM+Practice;Q1+-+Q25;getElementById+Concepts" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-DOM-yellow" />
  <img src="https://img.shields.io/badge/Level-Beginner-blue" />
  <img src="https://img.shields.io/badge/Status-Active-success" />
</p>

---

## 📌 About

This repository contains basic JavaScript DOM practice questions (Q1–Q25) focused on understanding `getElementById` and core DOM manipulation concepts.

---

## 📂 File Structure

```id="p4n8zx"
dom-practice/
│
├── index.html        // HTML elements (title, button, input, list, etc.)
├── script.js         // Solutions for Q1–Q25
├── README.md         // Documentation
```

---

## 📘 Questions List

### 🔹 Q1–Q5

* Q1: Change text of `#title`
* Q2: Update paragraph text
* Q3: Change text color
* Q4: Set background color
* Q5: Set font size

### 🔹 Q6–Q10

* Q6: Change button text
* Q7: Change image source
* Q8: Update link URL
* Q9: Set input value
* Q10: Get input value in console

### 🔹 Q11–Q15

* Q11: Hide element
* Q12: Show element
* Q13: Add class
* Q14: Remove class
* Q15: Insert HTML

### 🔹 Q16–Q20

* Q16: Create and append `<li>`
* Q17: Set width & height
* Q18: Make text bold
* Q19: Show alert on click
* Q20: Increment counter

### 🔹 Q21–Q25

* Q21: Convert text to uppercase
* Q22: Modify element styling
* Q23: Hide image
* Q24: Show image
* Q25: Change text after delay

---

## 💻 Example (Q20)

```javascript id="q7k1vd"
const counter = document.getElementById("counter");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    counter.innerText = Number(counter.innerText) + 1;
});
```

---

## ▶️ How to Run

1. Clone or download the repository
2. Open `index.html` in your browser
3. Test each feature

---

## 🎯 Purpose

* Build strong DOM fundamentals
* Practice JavaScript basics
* Prepare for frontend development

---

## 👨‍💻 Author

Pankaj Goswami
