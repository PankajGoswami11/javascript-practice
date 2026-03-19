// 4️⃣0️⃣ count how many number between 1 to 100 are divisible by by both 3 and 5.
let count = 0;
for(let i=1; i<=100; i++){
    if (i%3===0 && i%5===0){
        count++;
        console.log(i);
    }
}
console.log(`Count of numbers divisible by both 3 and 5: ${count}`);
// output: 15 30 45 60 75 90 ,Count of numbers divisible by both 3 and 5: 6