/*
🧩 Q7: Use innerHTML

👉 HTML:
<h1 id="title">Hello</h1>

👉 Task:
Add <span>New Text</span> inside #title
*/

const title = document.getElementById("title");
title.innerHTML = "<span>New Text</span>";

console.log(title);

// Output:
// <h1 id="title"><span>New Text</span></h1>
