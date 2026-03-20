// 4️⃣5️⃣ find the total number of vowels in this sentence. 
let jsvowels = "Javascript is awesome!";
let count = 0;
for(i = 0; i < jsvowels.length; i++){
    let char = jsvowels[i];
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' ||char === 'E' || char === 'I' || char === 'O' ||char === 'U' ){
        count++
    }
}
console.log(`The sentence contains ${count} vowels.`)
// output: The sentence contains 8 vowels.
