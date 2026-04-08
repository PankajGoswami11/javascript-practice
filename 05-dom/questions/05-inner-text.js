/*
🧩 Q5: Change Text using innerText

👉 HTML:
<h1 id="title">Hello</h1>

👉 Task:
Change the text of #title to "DOM Learning"
*/

const title = document.getElementById("title");
title.innerText = "DOM Learning";

console.log(title);

// Output:
// <h1 id="title">DOM Learning</h1>