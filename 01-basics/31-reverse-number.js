// 3️⃣1️⃣ Reverse a Number
let num = 12345;
let reversed = 0;
while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}
console.log(reversed);
// output: 54321