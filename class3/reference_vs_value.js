// ==================================================================
// difference between variables values and reference

// Primitive data types
// By value

let text = "Some text";
let age = 16;
let isValid = false;
let emptiness = null;
let wtf = undefined;

let changeText = text;
let youngAge = age;
let invalid = isValid;
let nothingness = emptiness;
let nothing = wtf;

text = "otherText";
age = 78;
isValid = true;
emptiness = "not really!";
wtf = "wtf?";

console.log(text, age, isValid, emptiness, wtf);
console.log(changeText, youngAge, invalid, nothingness, nothing);

// complex types (objects, arrays)
// By reference

const evenNumbers = [2, 4, 6, 8];
const allNumbers = evenNumbers;

allNumbers.push(1, 3, 5, 7);

console.log(evenNumbers);
console.log(allNumbers);
console.log(evenNumbers === allNumbers);

const almostTheSame = [2, 4, 6, 8, 1, 3, 5, 7];
console.log(almostTheSame, "prawie to samo");
console.log(almostTheSame === evenNumbers);
