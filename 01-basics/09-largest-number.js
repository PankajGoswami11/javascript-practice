// 9️⃣ Find Largest Number
// Find the largest number between two numbers.
let a = 45;
let b = 60;
// WAY 1: The Ternary Operator (Best for simple checks)
console.log(a>b ? "a is grater" : "b is grater")
// Output: b is grater
// WAY 2: Template Literals (Dynamic output)
console.log(`${a>b ? a : b } is grater`)
// Output: 60 is grater
// WAY 3: Math.max (The "Math" way)
let grater = Math.max(a,b);
console.log(grater + " is greater")
// Output: 60 is grater
// WAY 4: Arrow Function
const compare = (x,y) => x > y ? "a is grater" : "b is grater";
console.log(compare(a,b));
// Output: b is grater
// WAY 5:  If/Else if:
if(a>b){
   console.log("b is grater");
}else{
    console.log("b is grater");
}
// Output: b is grater
// WAY 6: function with if
 function checkGreater(a, b) {
  if (a > b) return "a is greater";
  if (b > a) return "b is greater";
  return "they are equal"; // Catch-all if neither is true
}
console.log(checkGreater(70, 70));
// Output:they are equal
