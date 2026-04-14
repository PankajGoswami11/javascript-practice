// 🚀 QuerySelector Practice (Basic + Intermediate)

// ======================
// 🟢 BASIC QUESTIONS
// ======================

// Q1: Select the h1 element.
let h1ele = document.querySelector("h1");

// Q2: Select the element with id="title".
let titleElement = document.querySelector("#title");

// Q3: Select the first <p> element.
let pelement = document.querySelector("p");

// Q4: Select the first element with class "text".
let classtext = document.querySelector(".text");

// Q5: Select the second paragraph.
let secondPara = document.querySelectorAll("p")[1];

// Q6: Select the <button> element.
let btnelement = document.querySelector("button");

// Q7: Select the element with id="btn".
let idbtn = document.querySelector("#btn");

// Q8: Select the first .text element from all paragraphs.
let firstText = document.querySelector(".text");

// Q9: Select the h1 inside the <body>.
let bodyh1 = document.querySelector("body h1");

// Q10: Select the <button> inside the <body>.
let bodyBtn = document.querySelector("body button");

// Q11: Select the second element with class "text"
let sectext = document.querySelectorAll(".text")[1];
// OR
let sectextAlt = document.querySelector(".text:nth-of-type(2)");


// ======================
// 🔵 INTERMEDIATE QUESTIONS
// ======================

// Q12: Select the h1 with id "main-title"
let mTitle = document.querySelector("#main-title");

// Q13: Select all elements with class "text"
let allText = document.querySelectorAll(".text");

// Q14: Select the first .text inside .container
let firstTextContainer = document.querySelector(".container .text");

// Q15: Select the second .item from the list
let itemList = document.querySelectorAll(".item")[1];

// Q16: Select the <ul> with id "list"
let ulList = document.querySelector("#list");

// Q17: Select all <li> inside the <ul>
let liUnderUl = document.querySelectorAll("ul li");

// Q18: Select the button inside .container
let butInContainer = document.querySelector(".container button");

// Q19: Select the <h2> inside .box
let h2InsideBox = document.querySelector(".box h2");

// Q20: Select the element with id "highlight"
let eleHighlight = document.querySelector("#highlight");

// Q21: Select the paragraph inside <footer>
let pInsideFooter = document.querySelector("footer p");

// Q22: Select the last .item from the list
let lastItemInList = document.querySelectorAll(".item")[2];
// OR
let lastItemInList2 = document.querySelector(".item:last-child");

// Q23: Select the third paragraph inside .container
let thirdParagraphInContainer = document.querySelectorAll(".container p")[2];

// Q24: Select all paragraphs inside .box
let allParaInBox = document.querySelectorAll(".box p");

// Q25: Select the first <li> inside #list
let firstLiInText = document.querySelector("#list li");

// Q26: Select the <span> inside .box
let spanInBox = document.querySelector(".box span");