// 3️⃣5️⃣ print odd number from 1 to 15 using a while loop
// way :1 while loop with if condition
let j = 1;
while (j <= 15) {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
}
// output: 1 3 5 7 9 11 13 15

// way :2 while loop with increment of 2
let k = 1;
while (k <= 15) {
    console.log(k);
    k += 2;
}
// output: 1 3 5 7 9 11 13 15