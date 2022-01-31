// ==================================================================
// arr.filter

const degrees = [1, 2, 3, 2, 1, 5, 6, 2, 1, 6, 5, 2];
const degressBelowThree = degrees.filter((degree) => degree < 3);
console.log(degressBelowThree);

// with objects

const books = [
  {
    name: "Lord of the rings",
    price: 35,
    specialPrice: false,
  },
  {
    name: "The witcher",
    price: 10,
    specialPrice: true,
  },
  {
    name: "Ulisses",
    price: 25,
    specialPrice: false,
  },
  {
    name: "IT",
    price: 16,
    specialPrice: false,
  },
];

const expensiveBooks = books.filter((book) => {
  return book.price > 20;
});

const specialPriceBooks = books.filter((book) => {
  return book.specialPrice;
});

console.log(expensiveBooks);
console.log(specialPriceBooks);
