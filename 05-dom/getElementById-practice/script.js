// getElementById Practice (Q1–Q17)

/* Q1
Change the text of the element with id="title" to "Hello World"
*/
way: 1
document.getElementById("title").innerText = "Hello World";
way: 2
let eleTitle = document.getElementById("title");
eleTitle.innerText = "Hello World";


/* Q2
Change the text of the paragraph with id="para" to "This is a paragraph"
*/
 way: 1
let paraText = document.getElementById("para");
paraText.innerText = "This is a paragraph";
way: 2
document.getElementById("para").innerText = "This is a Paragraph"



/* Q3
Set the text color of the element with id="heading" to red
*/
way: 1
let heading = document.getElementById("heading");
heading.style.color = "red";
way: 2
document.getElementById("heading").style.color = "red";

/* Q4
Set the background color of the element with id="box" to blue
*/
way: 1
document.getElementById("box").style.backgroundColor = "blue";
way: 2
let box = document.getElementById("box");
box.style.backgroundColor="blue";

/* Q5
Set the font size of the element with id="text" to 20px
*/
way: 1
let text = document.getElementById("text");
text.style.fontSize = "20px"
way: 2
document.getElementById("text").style.fontSize = "20px";

/* Q6
Change the button text of the element with id="btn" to "Clicked"
*/
let btn = document.getElementById("btn");
btn.innerText = "Clicked";


/* Q7
Change the source (src) of the image with id="image" to "new-image.jpg"
*/
let image = document.getElementById("image");
image.src = "new-image.jpg";


/* Q8
Set the href of the link with id="link" to "https://google.com"
*/
way: 1
let link = document.getElementById("link");
link.href = "https://google.com"
way: 2
document.getElementById("link").href = "https://google.com";

/* Q9
Set the value of the input field with id="inputBox" to "Hello User"
*/
way: 1
let inputBox = document.getElementById("inputBox");
inputBox.value = "Hello User";
way: 2
document.getElementById("inputBox").value = "Hello User";

/* Q10
Get the value from the input field with id="inputBox" and print it in the console
*/
let inputValue = document.getElementById("inputBox");
console.log(inputValue.value);


/* Q11
Hide the element with id="container"
*/
way: 1
document.getElementById("container").style.display = "none"
way: 2
let container = document.getElementById("container");
container.style.display ="none"

/* Q12
Show the element with id="container"
*/
way: 1
document.getElementById("container").style.display = "block";
way: 2
let container = document.getElementById("container");
container.style.display = "block"

/* Q13
Add the class "active" to the element with id="card"
*/
way: 1
let card = document.getElementById("card");
card.className = "active"
way: 2
document.getElementById("card").className = "active";

/* Q14
Remove the class "active" from the element with id="card"
*/
way: 1
let card = document.getElementById("card");
card.classList.remove("active");
way: 2
document.getElementById("card").classList.remove("active")



/* Q15
Insert the following HTML inside the element with id="title":
<span>New Text</span>
*/
way: 1
let title = document.getElementById("title");
title.innerHTML = "<span>New Text</span>";
way : 2
document.getElementById("title").innerHTML = "<span>New Text</span>";



/* Q16
Create a new <li> element with the text "Item 1" and add it inside the element with id="list"
*/
way : 1
let list = document.getElementById("list");
let li = document.createElement("li");
li.innerText = "item 1";
list.appendChild(li);


/* Q17
Set the width and height of the element with id="box" to 200px
*/
way : 1
let box = document.getElementById("box");
box.style.cssText = "width:200px; height:200px;";
way : 2
let box = document.getElementById("box");
box.style.width="200px"
box.style.height="200px"

// Q18
// Set the text of the element with id="text" to bold
// way1
document.getElementById("text").style.fontWeight = "bold";
// way: 2
let text = document.getElementById("text");
text.style.fontWeight = "bold"


// Q19
// Show an alert "Button Clicked" when the button with id="btn" is clicked
// way: 1
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    alert("Button Clicked");
});
// way: 2
document.getElementById("btn").addEventListener("click", function (){
    alert("Button Clicked");
});


// Q20
// Change the text of the element with id="counter" from "0" to incrementing numbers when the button is clicked
let counter = document.getElementById("counter");
btn.addEventListener("click", function() {
  counter.innerText = Number(counter.innerText) + 1;
});


// Q21
// Convert the text of the element with id="para" to uppercase
let para = document.getElementById("para");
para.innerText = para.innerText.toUpperCase();


// Q22
// Set the border of the element with id="box" to "2px solid black"
// way: 1
let para = document.getElementById("para")
para.innerText = para.innerText.toUpperCase();
// way: 2
document.getElementById("para").innerText =
document.getElementById("para").innerText.toUpperCase();



// Q23
// Hide the element with id="image"
// way: 1
let image = document.getElementById("image");
image.style.display="none";
// way: 2
document.getElementById("image").style.display="none";



// Q24
// Show the element with id="image"
way: 1
document.getElementById("image").style.display="block";
// way: 2
let image =document.getElementById("iamge");
image.style.display="block";


// Q25
// Change the text of the element with id="title" from "Welcome" to "Good Morning" after 2 seconds
document.getElementById("title").innerText = "Welcome"
let title = document.getElementById("title");
setTimeout(function(){
    title.innerText = "Good Morning";
}, 2000);
