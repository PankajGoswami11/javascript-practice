// 3️⃣0️⃣ Find Greatest Between Three Numbers (Function)

//way 1: The Standard if-else Method
function findGreatest(a, b, c) {
    if (a >= b && a >= c) {
        return `${a} sabse bada hai.`;
    } else if (b >= a && b >= c) {
        return `${b} sabse bada hai.`;
    } else {
        return `${c} sabse bada hai.`;
    }
}
console.log(findGreatest(10, 25, 15)); 
// Output: 25 sabse bada hai.

// way :2 The Professional Way (Math.max)
function findGreatest(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findGreatest(45, 89, 22)); 
// Output: 89