// ==================================================================
// ... spread - passing arguments (rozlozenie/rozpakowanie)

const grades = [2, 3, 3, 5, 6];
console.log(...grades);

const lowestGrade = Math.min(grades); // not working
// Math.min([2, 3, 3, 5, 6])

const lowestGrade = Math.min(...grades); // it works
// Math.min(...[2, 3, 3, 5, 6]) -> Math.min(2, 3, 3, 5, 6)

// ==================================================================
// ... spread - creating new array (copy)

const copyOfGrades = [...grades];
console.log(grades === copyOfGrades);

const classAGrades = [1, 2, 1, 2, 5];
const classBGrades = [5, 5, 6, 4, 3];
const allGrades = [...classAGrades, ...classBGrades];

// ==================================================================
// ... spread - creating new object (copy)

const vehicle = { engine: true };
const landingVehicle = { tires: 4, windows: 6 };
const car = { ...vehicle, ...landingVehicle };
console.log(car);
// { ...{engine: true}, ...{ tires: 4, windows: 6 }} -> { engine: true, tires: 4, windows: 6 }

// order is important!

const person1 = {
  name: "karol",
  lastname: "kozak",
  age: 31,
};

const person2 = {
  name: "piotr",
  lastname: "nowak",
};

const mixedPerson = { ...person1, ...person2 };
console.log(mixedPerson);

const mixedPerson2 = { ...person2, ...person1 };
console.log(mixedPerson2);

const anotherPerson = { ...person1, age: 16, ...person2 };
console.log(anotherPerson);

const stranger = { age: 16, ...person2, ...person1 };
console.log(stranger);

// ==================================================================
// ... spread - more complicated exaxmple

const permissions = {
  addPosts: true,
  deletePosts: false,
  viewContent: true,
};

const address = {
  street: "Wymyslona",
  streerNr: 16,
  country: "Poland",
};

const user = {
  name: "Karol",
  age: 36,

  ...permissions,

  groups: ["admin", "user", "owner"],
  login: "kossak",

  ...address,

  marketingConsents: false,
};

// ==================================================================
// ... rest - function arguments

function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3);
sum(1, 2);
sum(23, 32, 12);

function specialSum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

specialSum(1, 2, 3);
specialSum(1, 2);
specialSum(23, 32, 12);
