// ==================================================================
// array destructuring

const names = ["piotr", "stanislaw", "dariusz"];
const [name1, name2, name3] = names;
console.log(name1, name2, name3);

// ==================================================================
// array destructuring - default values
const [name1, name2, name3, name4 = "Janusz"] = names;
console.log(name1, name2, name3, name4);

// ==================================================================
// array destructuring - n elements
const [name1, ...otherNames] = names;
console.log(name1);
console.log(otherNames);

// ==================================================================
// array destructuring - skipping
const [, , lastName] = names;
