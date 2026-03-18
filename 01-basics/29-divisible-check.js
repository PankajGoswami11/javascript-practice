// 2️⃣9️⃣ Divisible Check

// way 1: Using a Function with Modulo (Clean & Reusable)
function isDivisible(num, divisor) {
    return num % divisor === 0;
}
console.log(isDivisible(10, 2)); // Output: true
console.log(isDivisible(10, 3)); // Output: false

// way 2: The Standard If-Else Method (Beginner Friendly)
function checkDivisibility(num) {
    console.log(`Checking number: ${num}`);
    if (num % 2 === 0) {
        console.log("✅ 2 se divisible hai");
    } else {
        console.log("❌ 2 se divisible nahi hai");
    }
    if (num % 3 === 0) {
        console.log("✅ 3 se divisible hai");
    } else {
        console.log("❌ 3 se divisible nahi hai");
    }
    if (num % 5 === 0) {
        console.log("✅ 5 se divisible hai");
    } else {
        console.log("❌ 5 se divisible nahi hai");
    }
}
checkDivisibility(60);