# 🌳 JavaScript DOM (Document Object Model)

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?color=00F7FF&center=true&vCenter=true&width=700&lines=Mastering+DOM+Manipulation;Turning+Static+Pages+into+Dynamic+Apps;Frontend+Core+Skill+🚀" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-DOM-yellow?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/Focus-Dynamic%20UI-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Level-Beginner→Advanced-green?style=for-the-badge" />
</p>

---

## 🧭 Overview

The **DOM (Document Object Model)** is a tree-like representation of an HTML document.

JavaScript uses it to:

* Access elements
* Modify content
* Update UI dynamically

---

## ⚡ DOM Thinking Model (Important)

```txt
User Action → JS Trigger → DOM Selection → Update → Browser Re-render
```

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?color=FFD700&center=true&vCenter=true&lines=Think+in+Steps;Select+→+Modify+→+Render;This+is+DOM+Power" />
</p>

---

## 🌳 DOM Tree Structure

```txt
Document
  └── html
       └── body
            ├── h1 → "Hello"
            └── p  → "Text"
```

### 🧠 Explanation

* **Element Node** → HTML tags
* **Text Node** → Text inside elements
* **Comment Node** → Hidden notes

---

## 🎯 Selecting Elements

### 🧠 Why Important?

👉 DOM ka **entry point** hai — bina select kiye kuch nahi hoga

### 💻 Example

```js
document.getElementById("title");
document.getElementsByClassName("text");

document.querySelector("#title");
document.querySelectorAll(".text");
```

### ⚡ When to Use What

```txt
getElementById      → fast (single element)
querySelector       → flexible (most used)
querySelectorAll    → multiple elements
```

---

## 📝 Text & Content Handling

### 🧠 Concept

Different methods = different behavior

### 💻 Example

```js
let el = document.querySelector("#title");

el.innerText = "Hello";       
el.textContent;               
el.innerHTML = "<span>Hi</span>";
```

### ⚡ Difference

```txt
innerText   → visible only
textContent → all text
innerHTML   → HTML + text (⚠️ careful)
```

---

## ⚙️ Attribute Manipulation

### 💻 Example

```js
el.getAttribute("id");
el.setAttribute("class", "new");
el.removeAttribute("class");
```

---

## 🔄 Dynamic DOM Manipulation

### 💻 Example

```js
let div = document.createElement("div");
div.innerText = "New";

document.body.appendChild(div);
document.body.prepend(div);
document.body.removeChild(div);
```

### ⚡ Flow

```txt
Create → Insert → Update → Remove
```

---

## 🎨 Styling Elements

### 💻 Inline Style

```js
el.style.color = "red";
```

### 💻 classList (Best Practice)

```js
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");
```

---

## ⚡ Real Example (User Interaction)

```html
<h1 id="title">Hello</h1>
<button id="btn">Click</button>
```

```js
let btn = document.getElementById("btn");
let title = document.getElementById("title");

btn.addEventListener("click", () => {
  title.innerText = "Clicked!";
  title.style.color = "blue";
});
```

---

## 🧪 Common Mistakes (Must Know)

```diff
- innerHTML ka overuse
- null element access
- inline styling everywhere
+ classList use karo
+ querySelector prefer karo
```

---

## 🚀 Performance Insight (Important)

```txt
Too many DOM updates ❌ → Slow UI  
Batch updates ✅ → Fast UI ⚡
```

---

## 🧩 Real-World Use Cases

* Form validation
* Dynamic UI updates
* API data rendering
* Interactive components (modals, dropdowns)

---

## 📂 Folder Structure

```bash
05-dom/
│
├── README.md
├── basic.js
├── intermediate.js
├── advanced.js
│
├── questions/
│   ├── 01-select-by-id.js
│   ├── 02-select-by-class.js
│   ├── 03-query-selector.js
│   ├── 04-query-selector-all.js
│   ├── 05-inner-text.js
│   ├── 06-text-content.js
│   ├── 07-inner-html.js
│   ├── 08-get-attribute.js
│   ├── 09-set-attribute.js
│   ├── 10-remove-attribute.js
│   ├── 11-create-element.js
│   ├── 12-append-child.js
│   ├── 13-prepend.js
│   ├── 14-remove-child.js
│   ├── 15-style-update.js
│   ├── 16-classlist-add.js
│   ├── 17-classlist-remove.js
│   ├── 18-classlist-toggle.js
```

---

## 📈 Learning Path

```txt
DOM Basics → Selection → Manipulation → Events → Real Apps 🚀
```

---

## 🎯 Purpose

* Strong DOM understanding
* Build dynamic UI
* Prepare for real-world frontend development

---

## 👨‍💻 Author

**Pankaj Goswami**
