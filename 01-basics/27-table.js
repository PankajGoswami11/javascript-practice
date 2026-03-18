// 2️⃣7️⃣ Multiplication Table
let num = 5;

// way 1: Using a for Loop (Classic Method)
for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}

// way 2: The Fixed Version (Using console.log)
function numToTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
numToTable(num);
