// 1️⃣5️⃣ Find the Largest of Three Numbers
let a = 10;
let b = 25;
let c = 15;

// way 1: Using if-else statements (Classic Approach)
if (a>b && a>c){
  console.log(`${a} a is grater`)
}else if(b>a && b>c){
  console.log(`${b} b is grater`)
}else{
  console.log(`${c} c is grater`);
}
// output: 25 b is grater

// way 2: Using Math.max() (The Best Way) 
// The Math.max() function is the standard and most readable way to find the largest number.
let largest = Math.max(a,b,c);
console.log(`${largest} is the grater`)
// output: 25 is the grater
