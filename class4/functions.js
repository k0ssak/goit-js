// ==================================================================
// function declaration

function sum() {
  // function body
  console.log("summing...");
}

sum();

// ==================================================================
// function parameters and arguments

function sum(a, b) {
  console.log(`A + B = ${a + b}`);
}

sum(5, 6);
sum(2, 3);

// ==================================================================
// returnig value

function sum(a, b) {
  console.log("summing;");

  return a + b;

  console.log("kod po instrukcji return nigdy sie nie wykonuje!");
}

const sum = sum(1, 2);

const pi = 3.14;
const wo = 5 - pi;
const piec = sum(pi, wo);

// ==================================================================
// call order

function foo() {
  console.log("foo");
}

let a = 5 + 3;
console.log("something before function call");
foo();
console.log(a);
console.log("something after function call");

// ==================================================================
// default parameters

function sayHello(firstname = "Stranger") {
  console.log(`Hello ${firstname}`);
}

sayHello();
sayHello("Karol");

function multiply(a, b = 1, c = 2) {
  return a * b * c;
}

multiply(1);
multiply(1, 2);
multiply(1, 2, 3);

// ==================================================================
// pseudo array arguments

function sum() {
  let sum = 0;

  // Array.from(arguments);

  for (const argument of arguments) {
    sum *= argument;
  }

  return sum;
}

console.log(sum(10, 15, 20));
console.log(sum(10, 15, 20, 100, 200));

// ==================================================================
// spread ...args

function sum(...args) {
  console.log(args);
}

console.log(sum(10, 15, 20));
console.log(sum(10, 15, 20, 100, 200));

// ==================================================================
// early return

function getDiscount(basketSum) {
  let discount = 0;

  if (basketSum > 100) {
    discount = 5;
  } else if (basketSum > 200) {
    discount = 10;
  } else if (basketSum > 400) {
    discount = 20;
  } else {
    discount = 0;
  }

  return discount;
}

function getDiscount(basketSum) {
  if (basketSum > 100) {
    return 5;
  }

  if (basketSum > 200) {
    return 10;
  }

  if (basketSum > 400) {
    return 20;
  }

  return 0;
}

// return may return "nothing"

// ==================================================================
// function expression

sumAsExpression(1, 2);
sumAsDeclaration(1, 2);

const sumAsExpression = function (a, b) {
  return a + b;
};

function sumAsDeclaration(a, b) {
  return a + b;
}

sumAsExpression(1, 2);
sumAsDeclaration(1, 2);

// ==================================================================
// functions may be parameters as well!

function sum(summingFunction) {
  return summingFunction;
}

let newSumming = sum(function (a, b) {
  return 2 * a + 2 * b;
});

let sumWithKarolMathematics = sum(function (a, b) {
  return a * a + b * b;
});

newSumming(2, 2);
sumWithKarolMathematics(3, 3);

sum(function (a, b) {
  return 2 * a + 2 * b;
})(2, 3);

// ==================================================================
// nested functions
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

// ==================================================================
// closures
function outside(x) {
  function inside(y) {
    return x + y; // inside function has access to x variable
  }
  return inside;
}
