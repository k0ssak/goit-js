// ==================================================================
// arr.forEach

const arr = [
  {
    title: "Lord of the rings",
    genre: "fantasy",
  },
  {
    title: "Matrix",
    genre: "s-f",
  },
];

arr.forEach(function (element, index, array) {
  console.log(element);
  console.log(index);
  console.log(array);
});

// break doesnt work!
