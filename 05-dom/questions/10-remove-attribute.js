/*
🧩 Q10: Remove Attribute

👉 HTML:
<h1 id="title" class="heading">Hello</h1>

👉 Task:
Remove class attribute from #title
*/

const element = document.getElementById("title");
element.removeAttribute("class");

console.log(element);

// Output:
// <h1 id="title">Hello</h1>