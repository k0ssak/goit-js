// ==================================================================
// if statement - instrukcja warunkowa
if (condition) {
  // code to execute
}

// ==================================================================
// if example 1

let productPrice = 360;
let isBlackFriday = true;

if (isBlackFriday === true) {
  productPrice = 300;
}

console.log(productPrice);

// ==================================================================
// if example 2

let isAdmin = false;
let permissions = "normalUser";

if (isAdmin === true) {
  permissions = "superUser";
}

console.log(permissions);

// ==================================================================
// if...else statement

if (condition) {
  // code to execute
} else {
  // code to exectute if condition is not met
}

// ==================================================================
// if...else example 1

let deliveryCost;
const basketSum = 300;

if (basketSum > 400) {
  deliveryCost = 0;
} else {
  deliveryCost = 20;
}

console.log(deliveryCost);

// ==================================================================
// if...elseif...else

if (condition) {
  // code to execute
} else if (condition2) {
  // code to execute if condition is not met but condition2 is met
} else {
}

// ==================================================================
// if...elseif...else  example

let discount;
let deliveryCost;
const basketSum = 300;

if (basketSum > 100) {
  discount = 5;
  deliveryCost = 10;
} else if (basketSum > 200) {
  discount = 10;
  deliveryCost = 0;
} else if (basketSum > 400) {
  discount = 20;
  deliveryCost = 0;
} else {
  discount = 0;
  deliveryCost = 20;
}

console.log(discount, deliveryCost);

// ==================================================================
// short version

const isLogged = true;
if (isLogged) console.log("User is logged");

if (isLogged) {
  console.log("User is logged");
} else console.log("User is not logged");

// ==================================================================
// user interaction example
let isAdult = confirm("Czy jesteś pełnoletni?");

if (isAdult) {
  alert("Super, to możesz kupić alkohol w naszym sklepie!");
} else {
  window.location = "https://bajki-zasypianki.pl/";
}
