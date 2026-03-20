// 4️⃣7️⃣ Print Fibonacci series 
let n = 5; 
let n1 = 0, n2 = 1, nextTerm;
let result = ""; 
for (let i = 1; i <= n; i++) {
    result = result + n1 + " "; 
    nextTerm = n1 + n2;
    n1 = n2;    
    n2 = nextTerm;  
}
console.log(result.trim()); 
// Output: 0 1 1 2 3
