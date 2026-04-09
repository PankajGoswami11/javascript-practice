/*
🧩 Q9: Set Attribute

👉 HTML:
<h1 id="title">Hello</h1>

👉 Task:
Add class "heading" to #title
*/

const element = document.getElementById("title");
element.setAttribute("class", "heading");

console.log(element);

// Output:
// <h1 id="title" class="heading">Hello</h1>