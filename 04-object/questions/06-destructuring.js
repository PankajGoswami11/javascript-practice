// 06 Question:
// Destructure lat and lng from a nested object.

const user = {
  address: {
    location: {
      lat: 23.2,
      lng: 77.4,
    },
  },
};

let { lat, lng } = user.address.location;

console.log(lat);
console.log(lng);

// 📤 Output:
// 23.2
// 77.4
