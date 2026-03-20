// 4️⃣4️⃣ Sum of only even numbers in the array 
let arr = [3, 6, 9, 12, 15, 18];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        console.log(`even number ${arr[i]}`)
    sum += arr[i]; 
    }
}
console.log(`sum of even number ${sum}`); 
// output: even number 6, even number 12, even number 18, sum of even number 36
