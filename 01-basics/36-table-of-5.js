// 3️⃣6️⃣ print a multiplication table of 5 (i.e 5 x 1 = 5.. 5 x 10 = 50) using a for loop
// way 1: using template literals
for(let i = 1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
// output: 5 x 1 = 5... 5 x 10 = 50

// way 2: using string concatenation
let num5 = 50;
for(let i = 1; i<=10; i++){
    console.log(`${num5} x ${i} = ${num5*i}`);
}
// output: 50 x 1 = 50... 50 x 10 = 500