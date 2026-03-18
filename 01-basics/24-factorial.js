// 2️⃣4️⃣Factorial of a Number
let num = 5;
// way 1:  while loop (Iterative Approach)
let i = num;
let f = 1;
while(i>=1){
    f = f * i;
    i--;
}
// output: 120
console.log(f);

// way 2: The for Loop (Standard Alternative)
let f = 1;
for (let i = num; i >= 1; i--){
    f = f * i;
}
console.log(f);
// output: 120