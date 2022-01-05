// ==================================================================
// for loop
for (initialization; condition; post - expression) {
  // code to execute
}

// ==================================================================
// for loop example
for (let i = 0; i <= 20; i += 1) {
  console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 0, j = 2; j < 4 && i <= 10; i += 2, j += 1) {
  console.log(i, j);
}

// ==================================================================
// liczby z przedzialu 1 - 1000 podzielne przez 4
let maxNumber = 1000;
let divideBy = 39;

for (let i = 0; i <= maxNumber; i += 1) {
  if (i % divideBy === 0) {
    // some complicated logic
    console.log(i);
  }
}

// ==================================================================
// continue instruction
let maxNumber = 1000;
let divideBy = 39;

for (let i = 0; i <= maxNumber; i += 1) {
  if (i % divideBy !== 0) {
    continue;
  }

  // some complicated logic
  console.log(i);
}

// ==================================================================
// break instruction
for (let i = 0; i <= 10; i += 1) {
  const randomBetween1and10 = Math.floor(Math.random() * 10) + 1;

  if (randomBetween1and10 === 5) {
    break;
  }

  console.log(i);
}
