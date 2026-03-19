//3️⃣9️⃣ ask the user for a number and print whether number from 1 to that number is even or odd
let val = prompt("give a number");
for(let i = 1; i<=val; i++){
    if(i%2===0){
        console.log(i + " is even");
    }
    else{
        console.log(i + " is odd");
    }
}
// output: if user input is 2, output will be: 1 is odd 2 is even
