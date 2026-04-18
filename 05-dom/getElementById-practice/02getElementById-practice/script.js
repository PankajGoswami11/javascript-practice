/*  getElementById Practice (Q26–Q50)  */

/*
Q26
Get the text from the input field and display it inside an element with id="output" when a button is clicked.
*/
let input = document.getElementById("inputField");
let output = document.getElementById("output");
let btn = document.getElementById("addBtn");
btn.addEventListener("click", function() {
    output.innerText = input.value;
});


/*
Q27
Clear the value of the input field when a button is clicked.
*/
let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function(){
    input.value = "" ;
    output.innerText = "";
})


/*
Q28
Toggle the visibility of an element with id="box" when a button is clicked.
*/
let box = document.getElementById("box");
let toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", function(){
    if(box.style.display === "none"){
        box.style.display = "block"
    }
    else{
        box.style.display = "none"
    }
});


/*
Q29
Change the background color of the page when a button is clicked.
*/
let colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "black"
});


/*
Q30
Count how many times a button is clicked and display the count.
*/
let countBtn = document.getElementById("countBtn");
let clickCount = document.getElementById("clickCount");
countBtn.addEventListener("click",function(){
    clickCount.innerText = Number(clickCount.innerText)+1;
});


/*
Q31
Take the text entered in #inputField, create an <li> with that text, and add it inside #list when #addBtn is clicked.
*/
let input = document.getElementById("inputField");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

addBtn.addEventListener("click", function(){
let text = input.value;
let li = document.createElement("li")
li.innerText = text;
list.appendChild(li);
});


/*
Q32
Remove the last <li> from #list when #removeLast button is clicked.
*/
let removeLast = document.getElementById("removeLast")
let list = document.getElementById("list");

removeLast.addEventListener("click", function(){
    let lastitem = list.lastElementChild;
    if(lastitem){
        list.removeChild(lastitem);
    }
});

// way: 2
removeBtn.addEventListener("click", function () {
    list.lastElementChild?.remove();
});


/*
Q33
Change the text of all <p> elements inside #container to "Updated Text".
*/
let container = document.getElementById("container");
let para = container.querySelectorAll("p")
para.forEach(function(p){
    p.innerText = "Updated Text";
})


/*
Q34
Disable the button when #disableBtn is clicked.
*/
let disableBtn = document.getElementById("disableBtn");
disableBtn.addEventListener("click", function(){
    disableBtn.disable = true;
});


/*
Q35
Enable the #disableBtn button again when #enableBtn is clicked.
*/
let enableBtn = document.getElementById("enableBtn");
enableBtn.addEventListener("click", function(){
    disableBtn.disable = false;
});

/*
Q36
Toggle the image source when #image is clicked:
First: https://via.placeholder.com/150
Second: https://via.placeholder.com/200
*/

let image = document.getElementById("image");
image.addEventListener("click", function(){
    if(image.src.includes("150")){
        image.src = "https://picsum.photos/200";
    }
    else{
        image.src = "https://picsum.photos/150";
    }
});


/*
Q37
Show the current date and time inside #time when #timeBtn is clicked.
*/

let timeBtn = document.getElementById("timeBtn");
let time = document.getElementById("time");

timeBtn.addEventListener("click", function(){
    let currentTime = new Date();
    time.innerText = currentTime;
});


/*
Q38
Display the number of characters typed by the user in #charInput inside #charCount in real time.
*/

let charInput = document.getElementById("charInput");
let charCount = document.getElementById("charCount");

charInput.addEventListener("input", function(){
    charCount.innerText = charInput.value.length;
});