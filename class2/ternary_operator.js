const age = 20;
let canBuyAlcohol;

if (age >= 18) {
  canBuyAlcohol = true;
} else {
  canBuyAlcohol = false;
}

// ==================================================================
// ternary operator
let canBuyAlcohol = age >= 18 ? true : false;

// ==================================================================
// Nie musi byc przypisany do zmiennej!
age >= 18 ? console.log("Jestes dorosly") : console.log("Jestes dzieckiem");

// ==================================================================
// Ternary operator hell!
let canBuyAlcohol =
  age >= 18
    ? true
    : isWithParent === true
    ? true
    : hasGun === true
    ? true
    : false;
