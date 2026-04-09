/*
🧩 Q13: Prepend Element

👉 HTML:
<body></body>

👉 Task:
Add the div at the top of body
*/

const newDiv = document.createElement("div");
newDiv.textContent = "Hello DOM";

document.body.prepend(newDiv);

// Output:
// <body>
//   <div>Hello DOM</div>
// </body>