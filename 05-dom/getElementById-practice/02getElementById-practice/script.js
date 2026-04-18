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
#inputField me jo text user likhe, usko <li> bana ke #list ke andar add karo jab #addBtn click ho.
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
#removeLast button click hone par #list ka last <li> remove karo.
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
#container ke andar jitne bhi <p> elements hain, un sabka text "Updated Text" kar do.
*/
let container = document.getElementById("container");
let para = container.querySelectorAll("p")
para.forEach(function(p){
    p.innerText = "Updated Text";
})


/*
Q34
#disableBtn par click hone ke baad us button ko disable kar do.
*/
let disableBtn = document.getElementById("disableBtn");
disableBtn.addEventListener("click", function(){
    disableBtn.disable = true;
});


/*
Q35
#enableBtn par click hone par #disableBtn ko wapas enable karo.
*/
let enableBtn = document.getElementById("enableBtn");
enableBtn.addEventListener("click", function(){
    disableBtn.disable = false;
});