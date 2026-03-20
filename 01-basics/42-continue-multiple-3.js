// 4️⃣2️⃣ Skip multiples of 3 between 1 to 20 using a for loop and continue statement
for(let i =1; i<=20; i++){
    if(i%3===0){
        continue;
    }
    console.log(i);
}
// output: 1 2 4 5 7 8 10 11 13 14 16 17 19 20
