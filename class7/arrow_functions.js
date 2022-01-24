// ==================================================================
// arrow functions

function sum(a, b) {
  //   console.log(this);
  return a + b;
}

const arrowSum = (a, b) => {
  //   console.log(this);
  return a + b;
};

// ==================================================================
// with one parameter

const show = (msg) => {
  console.log(msg);
};

// ==================================================================
// with no parameters

const alert = () => {
  console.log("alert");
};

// ==================================================================
// implicit return

const sum = (a, b) => a + b;

// ==================================================================
// no arguments in arrow function only ...args

// ==================================================================
// no arguments in arrow function only ...args
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
