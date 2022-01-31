// ==================================================================
// arr.sort
const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores);

// immutable
const sorted = [...scores.sort()];
console.log(sorted);

// ==================================================================
// not standard sort

scores.sort((a, b) => {});

//  a mniejsz od b -> a przed b
const ascendingScores = [...scores].sort((a, b) => a - b);

// b wieksza od a -> b przed a
const descendingScores = [...scores].sort((a, b) => b - a);

// ==================================================================
// sorting strings

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0

const languages = ["JavaScript", "C++", "PHP", "GO", "Java", "C#", "Python"];

const inAlphabetOrder = [...languages].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder);

const inReversedOrder = [...languages].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder);

// ==================================================================
// sorting objects

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

const booksAscendingPrice = books.sort(
  (firstBook, secondBook) => firstBook.price - secondBook.price
);

console.log(booksAscendingPrice);
