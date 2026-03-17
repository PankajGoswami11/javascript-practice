// 2️⃣0️⃣ Calculate Total Marks and Percentage
let math = 80;
let english = 70;
let science = 90;

// way 1: Using a Function for Reusability
function calculateTotalAndPercentage(m, e, s) {
  let total = m + e + s;
  let percentage = (total / 300) * 100; // Assuming max marks are 300
  return `Total = ${total}, Percentage = ${percentage}%`;
}
console.log(calculateTotalAndPercentage(math, english, science));
// Output: Total = 240, Percentage = 80%

// way 2: Direct Calculation (Without a Function)
let totalMarks = math + english + science;
let percentage = (totalMarks / 300) * 100; // Assuming max marks are 300
console.log(`Total Marks: ${totalMarks}, Percentage: ${percentage}%`);
// Output: Total Marks: 240, Percentage: 80%

// way 3: Arrow Function (Modern & Concise)
const calculateTotalAndPercentageArrow = (m, e, s) => {
  let total = m + e + s;
  let percentage = (total / 300) * 100;
  return `Total = ${total}, Percentage = ${percentage}%`;
};
console.log(calculateTotalAndPercentageArrow(math, english, science));
// Output: Total = 240, Percentage = 80%