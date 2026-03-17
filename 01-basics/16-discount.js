// 1️⃣6️⃣ Calculate Discount
// A product price is ₹1000 and discount is 20%.
// Find the final price.

// way 1: Basic Arithmetic (Step-by-Step)
let price = 1000;
let discount = 20;
// Calculate the amount to subtract
let discountAmount = (price * discount) / 100; // 200
// Subtract it from the original price
let finalPrice = price - discountAmount;
console.log(`Final Price: ₹${finalPrice}`);
// Output: Final Price: ₹800

// way 2: The Reusable Way (Function)
const getDiscountedPrice = (price, percentage) => {
    return price - (price * percentage / 100);
};
console.log(`Final Price: ₹${getDiscountedPrice(1000, 20)}`); 
// Output: Final Price: ₹800