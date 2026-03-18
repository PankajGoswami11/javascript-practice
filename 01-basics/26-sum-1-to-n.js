// 2️⃣6️⃣ Sum from 1 to N
// way 1:  while loop (Iterative Approach)
let i = num;
let f = 1;
while(i>=1){
    f = f + i;
    i--;
}
// output: 16
console.log(f);

// way 2: The for Loop (Standard Alternative)
let i = num;
let f = 1;
for (let i = num; i >= 1; i--){
    f = f + i;
}
console.log(f);
// output: 16