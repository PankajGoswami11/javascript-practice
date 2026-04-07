// Run this in browser console after adding HTML in index.html
/*
🧩 Q4: Select All Elements using querySelectorAll

👉 HTML:
<p class="text">Para 1</p>
<p class="text">Para 2</p>

👉 Task:
Select all elements with class "text" and print each using a loop.
*/

let allElements = document.querySelectorAll(".text");

allElements.forEach((el) => {
  console.log(el);
});

// Output:
// <p class="text">Para 1</p>
// <p class="text">Para 2</p>
