# 🚀 JavaScript Objects

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Objects-yellow?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/Level-Beginner_to_Advanced-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Focus-Real_World_Data-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Active_Learning-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Made_By-Pankaj_Goswami-blueviolet?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=2500&color=00C2FF&center=true&vCenter=true&width=700&lines=Mastering+JavaScript+Objects;Real+World+Data+Handling;From+Basics+to+Advanced;Consistency+%2B+Practice+%3D+Success+🚀" />
</p>

<p align="center">
  <img src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif" width="400" />
</p>

---

## 📌 Overview

Objects are one of the most powerful and widely used data structures in JavaScript.

They allow you to store and manage **structured data** (like user info, API responses, configurations, etc.).

---

## 🧠 What is an Object?

```js 
let user = {
  name: "Pankaj",
  age: 21,
  city: "Delhi"
};

console.log(user);
```

### ✅ Output

```
{ name: 'Pankaj', age: 21, city: 'Delhi' }
```

---

## 🎯 Why Objects Matter

Objects are used in:

* User profiles
* API responses
* Form data
* Real-world entities

---

## 🛠 Creating Objects

### ▸ Object Literal

```js 
let user = {
  name: "Pankaj",
  age: 21
};

console.log(user.name);
```

### ✅ Output

```
Pankaj
```

---

### ▸ Constructor

```js 
let user = new Object();
user.name = "Pankaj";
user.age = 21;

console.log(user);
```

### ✅ Output

```
{ name: 'Pankaj', age: 21 }
```

---

## 🔍 Accessing Values

### 🔹 Dot Notation

```js 
console.log(user.name);
```

### ✅ Output

```
Pankaj
```

---

### 🔹 Bracket Notation

```js 
console.log(user["age"]);
```

### ✅ Output

```
21
```

---

### ⚡ Dynamic Access

```js 
let key = "name";

console.log(user[key]);
```

### ✅ Output

```
Pankaj
```

---

## ✏️ Updating Objects

```js 
let user = {
  name: "Pankaj",
  age: 21
};

user.age = 22;

console.log(user);
```

### ✅ Output

```
{ name: 'Pankaj', age: 22 }
```

---

## 🛠 Modifying Objects

### 🔹 Add Property

```js 
user.email = "pankaj@gmail.com";

console.log(user);
```

### ✅ Output

```
{ name: 'Pankaj', age: 22, email: 'pankaj@gmail.com' }
```

---

### 🔹 Delete Property

```js 
delete user.age;

console.log(user);
```

### ✅ Output

```
{ name: 'Pankaj', email: 'pankaj@gmail.com' }
```

---

## 🔗 Nested Objects

```js 
let user = {
  name: "Pankaj",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

console.log(user.address);
```

### ✅ Output

```
{ city: 'Delhi', pincode: 110001 }
```

---

## 🔍 Deep Access

```js 
console.log(user.address.city);
```

### ✅ Output

```
Delhi
```

---

## 🛡 Optional Chaining

```js 
console.log(user.contact?.phone);
```

### ✅ Output

```
undefined
```

---

## 🔁 Iteration

```js 
for (let key in user) {
  console.log(key, user[key]);
}
```

### ✅ Output

```
name Pankaj
address { city: 'Delhi', pincode: 110001 }
```

---

## ⚙️ Object Method

```js 
let user = {
  name: "Pankaj",
  greet() {
    return "Hello " + this.name;
  }
};

console.log(user.greet());
```

### ✅ Output

```
Hello Pankaj
```

---

## 📚 Built-in Methods

```js 
let user = {
  name: "Pankaj",
  age: 21
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
```

### ✅ Output

```
[ 'name', 'age' ]
[ 'Pankaj', 21 ]
[ [ 'name', 'Pankaj' ], [ 'age', 21 ] ]
```

---

## 🧬 Copying Objects

### ❌ Reference Copy

```js 
let obj = { name: "Pankaj" };
let copy = obj;

copy.name = "Rahul";

console.log(obj);
```

### ⚠️ Output

```
{ name: 'Rahul' }
```

---

### ✅ Shallow Copy

```js 
let obj = { name: "Pankaj" };
let copy = { ...obj };

copy.name = "Rahul";

console.log(obj);
```

### ✅ Output

```
{ name: 'Pankaj' }
```

---

## 🧠 Destructuring

```js 
let user = {
  name: "Pankaj",
  age: 21
};

let { name, age } = user;

console.log(name, age);
```

### ✅ Output

```
Pankaj 21
```

---

## ⚡ Spread Operator

```js 
let user = { name: "Pankaj" };

let newUser = { ...user, age: 21 };

console.log(newUser);
```

### ✅ Output

```
{ name: 'Pankaj', age: 21 }
```

---

## 📊 Summary

✔ Store structured data
✔ Access & update easily
✔ Handle real-world data
✔ Work with APIs

---

## ⚖️ Comparisons

### Dot vs Bracket

| Feature | Dot      | Bracket     |
| ------- | -------- | ----------- |
| Syntax  | obj.name | obj["name"] |
| Dynamic | ❌        | ✅           |

---

## 🧠 Quick Revision

* obj.name → access
* obj[key] → dynamic
* delete → remove
* Object.keys → keys
* spread → copy

---
## 📂 Structure

```

04-object/ 
│
├── README.md
├── basic.js
├── intermediate.js
├── advanced.js
|
├── questions/
|
|  ├── 01-create-object.js  
|  ├── 02-access-dot.js  
|  ├── 03-access-bracket.js  
|  ├── 04-dynamic-key.js  
|  ├── 05-nested-access.js  
|  ├── 06-destructuring.js  
|  ├── 07-for-in-loop.js  
|  ├── 08-object-keys.js  
|  ├── 09-object-entries.js  
|  ├── 10-spread-copy.js  |
|  ├── 11-object-assign.js  
|  ├── 12-deep-clone.js  
|  ├── 13-optional-chaining.js  
|  ├── 14-computed-properties.js  
|  ├── 15-special-keys.js  
|  ├── 16-first-name-access.js  
|  ├── 17-dynamic-access.js  
|  ├── 18-missing-property.js  
|  ├── 19-destructure-special.js  
|  ├── 20-entries-format.js  
|  ├── 21-shallow-copy-problem.js 
|  └── 22-deep-clone-fix.js  
```

---

## 🎯 Learning Flow

```
Basic → Intermediate → Advanced
   ↓          ↓            ↓
Create   Modify      Deep Access
Access   Update      Optimization
```

---

## 👨‍💻 Author

Pankaj Goswami
