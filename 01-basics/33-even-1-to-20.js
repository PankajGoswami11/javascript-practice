// 3️⃣3️⃣ print even number from 1 to 20 using a for loop
// way :1 for loop with increment of 2
for(let i=2;i<=20;i+=2){
    console.log(i);
}
// output: 2 4 6 8 10 12 14 16 18 20

// way :2 for and if condition
for(let i=1;i<=20;i++){
    if(i%2===0){
        console.log(i);
    };
};
// output: 2 4 6 8 10 12 14 16 18 20

// way :3 while loop
let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}
// output: 2 4 6 8 10 12 14 16 18 20