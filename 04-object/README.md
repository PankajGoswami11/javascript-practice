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

```js id="airb5z"
let user = {
  name: "Pankaj",
  age: 21,
  city: "Delhi"
};

console.log(user);
```

### ✅ Output

```id="0ahqph"
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

```js id="p9eduy"
let user = {
  name: "Pankaj",
  age: 21
};

console.log(user.name);
```

### ✅ Output

```id="xbl7rm"
Pankaj
```

---

### ▸ Constructor

```js id="7y048v"
let user = new Object();
user.name = "Pankaj";
user.age = 21;

console.log(user);
```

### ✅ Output

```id="tk0wni"
{ name: 'Pankaj', age: 21 }
```

---

## 🔍 Accessing Values

### 🔹 Dot Notation

```js id="cpdje8"
console.log(user.name);
```

### ✅ Output

```id="druy0m"
Pankaj
```

---

### 🔹 Bracket Notation

```js id="942dg6"
console.log(user["age"]);
```

### ✅ Output

```id="l8lsd4"
21
```

---

### ⚡ Dynamic Access

```js id="3zzwq0"
let key = "name";

console.log(user[key]);
```

### ✅ Output

```id="ldmijc"
Pankaj
```

---

## ✏️ Updating Objects

```js id="c8z6gw"
let user = {
  name: "Pankaj",
  age: 21
};

user.age = 22;

console.log(user);
```

### ✅ Output

```id="7i7lsu"
{ name: 'Pankaj', age: 22 }
```

---

## 🛠 Modifying Objects

### 🔹 Add Property

```js id="cbg8gt"
user.email = "pankaj@gmail.com";

console.log(user);
```

### ✅ Output

```id="v4z44m"
{ name: 'Pankaj', age: 22, email: 'pankaj@gmail.com' }
```

---

### 🔹 Delete Property

```js id="dndkd4"
delete user.age;

console.log(user);
```

### ✅ Output

```id="4k87x8"
{ name: 'Pankaj', email: 'pankaj@gmail.com' }
```

---

## 🔗 Nested Objects

```js id="7jqhzv"
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

```id="hs3wk3"
{ city: 'Delhi', pincode: 110001 }
```

---

## 🔍 Deep Access

```js id="a7vg7a"
console.log(user.address.city);
```

### ✅ Output

```id="34luwy"
Delhi
```

---

## 🛡 Optional Chaining

```js id="pueaqq"
console.log(user.contact?.phone);
```

### ✅ Output

```id="4e26wz"
undefined
```

---

## 🔁 Iteration

```js id="4lt88e"
for (let key in user) {
  console.log(key, user[key]);
}
```

### ✅ Output

```id="7617r4"
name Pankaj
address { city: 'Delhi', pincode: 110001 }
```

---

## ⚙️ Object Method

```js id="uzkoth"
let user = {
  name: "Pankaj",
  greet() {
    return "Hello " + this.name;
  }
};

console.log(user.greet());
```

### ✅ Output

```id="9z7kvy"
Hello Pankaj
```

---

## 📚 Built-in Methods

```js id="ocb7kb"
let user = {
  name: "Pankaj",
  age: 21
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
```

### ✅ Output

```id="u5kwhm"
[ 'name', 'age' ]
[ 'Pankaj', 21 ]
[ [ 'name', 'Pankaj' ], [ 'age', 21 ] ]
```

---

## 🧬 Copying Objects

### ❌ Reference Copy

```js id="aorn56"
let obj = { name: "Pankaj" };
let copy = obj;

copy.name = "Rahul";

console.log(obj);
```

### ⚠️ Output

```id="fvel6l"
{ name: 'Rahul' }
```

---

### ✅ Shallow Copy

```js id="k6nj5l"
let obj = { name: "Pankaj" };
let copy = { ...obj };

copy.name = "Rahul";

console.log(obj);
```

### ✅ Output

```id="umjtc1"
{ name: 'Pankaj' }
```

---

## 🧠 Destructuring

```js id="uid2vl"
let user = {
  name: "Pankaj",
  age: 21
};

let { name, age } = user;

console.log(name, age);
```

### ✅ Output

```id="tg8iq6"
Pankaj 21
```

---

## ⚡ Spread Operator

```js id="6onqov"
let user = { name: "Pankaj" };

let newUser = { ...user, age: 21 };

console.log(newUser);
```

### ✅ Output

```id="ttz62c"
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

## 🎯 Learning Flow

```id="geuy7g"
Basic → Intermediate → Advanced
   ↓          ↓            ↓
Create   Modify      Deep Access
Access   Update      Optimization
```

---

## 👨‍💻 Author

Pankaj Goswami
