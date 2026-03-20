// 4️⃣3️⃣ Count odd numbers between 1 to 100 and stop at 5th odd number
let count = 0;
for(let i =1; i<=100; i++){
    if(i % 2 !== 0){
        console.log(i)
        count++
    }
    if (count === 5) break;
}
console.log(`Count of odd numbers: ${count}`);
// output: 1 3 5 7 9,   Count of odd numbers: 5
