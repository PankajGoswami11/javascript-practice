/*
🧩 Q14: Remove Child Element

👉 HTML:
<body>
  <div>Hello DOM</div>
</body>

👉 Task:
Remove the div from body
*/

const element = document.querySelector("div");
element.parentNode.removeChild(element);

console.log("Div removed");

// Output:
// Div removed