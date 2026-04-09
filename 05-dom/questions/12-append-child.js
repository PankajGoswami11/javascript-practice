/*
🧩 Q12: Append Child

👉 HTML:
<body></body>

👉 Task:
Add the created div inside body
*/

const newDiv = document.createElement("div");
newDiv.textContent = "Hello DOM";

document.body.appendChild(newDiv);

// Output:
// <body>
//   <div>Hello DOM</div>
// </body>