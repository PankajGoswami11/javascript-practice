// 4️⃣8️⃣ Find product of digits
let digit = 123;
let product = 1;
while(digit > 0){
    product = product * (digit % 10);
    digit = Math.floor(digit/10);
}
console.log(`product = ${product}`)
// output: product = 6
