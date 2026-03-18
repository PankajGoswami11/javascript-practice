// 2️⃣8️⃣ Count Digits
let num = 12345;

// way 1: Using a while Loop (Iterative Approach)
let count = 0;
while(num > 0){
    num = Math.floor(num / 10);
    count++;
}
console.log(count);
// Output: 5

// way 2: Using String Conversion (Simple & Effective)
function countDigits(num){
    return num.toString().length;
}
console.log(countDigits(12345)); 
// Output: 5