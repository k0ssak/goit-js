// ==================================================================
// creating array

const products = ["banan", "kiwi", "jabłko"];

const emptyArray = [];
const emptyArrayWithNew = new Array();
const emptyArrayWithNewAndParameter = new Array(10);

console.log(products[0]); // -> banan
console.log(products[1]); // -> kiwi
console.log(products[2]); // -> jabłko
console.log(products[3]); // -> undefined

// ==================================================================
// stała referencja, a nie wartość!

console.log(products);

products[0] = "mango";
products[2] = "ananas";

console.log(products);

// ==================================================================
// array length

console.log(products.length);
console.log(emptyArray.length);
console.log(emptyArrayWithNew.length);
console.log(emptyArrayWithNewAndParameter.length);

// ==================================================================
// last index

const lastIndex = products.length - 1;
console.log(products[lastIndex]);

// ==================================================================
// Two and more dimensional arrays;

const array2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(array2d);
console.log(array2d[0]);
console.log(array2d[1]);
console.log(array2d[2]);
console.log(array2d[0][0]);
console.log(array2d[1][1]);
console.table(array2d);

const array3d = [
  [
    ["opona1", "opona2", "opona3"],
    ["opona4", "opona5", "opona6"],
    ["opona7", "opona8", "opona9"],
  ],
  [
    ["lusterko1", "lusterko2", "lusterko3"],
    ["lusterko4", "lusterko5", "lusterko6"],
    ["lusterko7", "lusterko8", "lusterko9"],
  ],
  [
    ["zderzak1", "zderzak2", "zderzak3"],
    ["zderzak4", "zderzak5", "zderzak6"],
    ["zderzak7", "zderzak8", "zderzak9"],
  ],
];
console.log(array3d);
console.log(array3d[0]);
console.log(array3d[1]);
console.log(array3d[2]);
console.log(array3d[0][0]);
console.log(array3d[1][1]);
console.log(array3d[1][1][1]);
console.table(array3d);

const thisGetsComplicated = [[[[[[1]]]]]];
console.log(thisGetsComplicated);
console.table(thisGetsComplicated);

// ==================================================================
// some weird things ;)

const x = [];
x[6] = "1";
console.log(x);

const fruits = [];
fruits["fruit"] = "banana";
console.log(fruits);
