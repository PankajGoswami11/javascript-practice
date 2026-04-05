// 05 Question:
// Access a deeply nested property from an object.

const user = {
  address: {
    location: {
      lng: 77.4,
    },
  },
};

console.log(user.address.location.lng);

// 📤 Output:
// 77.4