// ==================================================================
// array.join

const sentence = [
  "Java",
  "is",
  "to",
  "JavaScript",
  "what",
  "Car",
  "is",
  "to",
  "Carpet",
];

const sentenceAsString = sentence.join(" ");
const sentenceAsStringWithUnderscore = sentence.join("_");

console.log(sentenceAsString);
console.log(sentenceAsStringWithUnderscore);

// ==================================================================
// string.split
console.log(sentenceAsString.split(" "));
console.log(sentenceAsStringWithUnderscore.split("_"));

// ==================================================================
// array.indexOf
const products = ["banan", "kiwi", "jabłko"];
console.log(products.indexOf("kiwi"));
console.log(products.indexOf("banan"));
console.log(products.indexOf("mango"));

// ==================================================================
// array.includes
console.log(products.includes("kiwi"));
console.log(products.includes("banan"));
console.log(products.includes("mango"));

// ==================================================================
// array.push - modyfikuje tablicie
products.push("mango");
products.push("ananasy", "arbuz");

// ==================================================================
// array.pop - modyfikuje tablicie
const fruit = products.pop();

// ==================================================================
// array.shift - modyfikuje tablicie
const anotherFruit = products.shift();

// ==================================================================
// array.slice - zwraca nowa tablice

const newProducts = products.slice(0, 2);
console.log(newProducts);

const copyProducts = products.slice();

console.log(products.slice(2));
console.log(products.slice(-2));

// ==================================================================
// array.splice - modyfikuje oryginalna tablice i zwraca nowa

// usuwanie za pomoca splice
const numbers = [1, 2, 3, 4, 5, 6];
const deletedNumbers = numbers.splice(1, 2);

console.log(numbers);
console.log(deletedNumbers);

// dodawanie za pomoca splice
const programmingLanguages = ["javascript", "c++"];
programmingLanguages.splice(1, 0, "java", "c#");

// zamiana za pomoca splice
programmingLanguages.splice(2, 1, "c");
programmingLanguages.splice(2, 1, "c", "go");

// ==================================================================
// array.concat -

const jobs = ["developer", "tester", "ceo"];
const newJobs = ["mechanic", "manager"];

const allJobs = jobs.concat(newJobs);
const allJobsWithDifferentOrder = newJobs.concat(jobs);

console.log(allJobs);
console.log(allJobsWithDifferentOrder);
