// 20 Question:
// Print object as key: value using Object.entries().

const course = {
  title: "JavaScript",
  duration: "4 weeks",
};

Object.entries(course).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// 📤 Output:
// title: JavaScript
// duration: 4 weeks
