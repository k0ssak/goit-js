// ==================================================================
// side effects

let sum = 0;
const dirtySum = () => {
  const result = a + b;
  sum += result;
  return result;
};

// or

const testArr = [1, 2, 3, 4];
const dirtyMultiplyBy = (arr, multiplicator) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i] * multiplicator;
  }
};
dirtyMultiplyBy(testArr, 2);
console.log(testArr);

// ==================================================================
// pure functions

const multiplyBy = (arr, multiplicator) => {
  const arr = [];

  arr.forEach((element) => {
    newArray.push(element * multiplicator);
  });

  return newArray;
};

// another example of not pure function
const dirtyAssoc = (key, value, object) => {
  object[key] = value;
};

const person = {
  name: "Bobo",
};

const result = dirtyAssoc("shoeSize", 400, person);

console.log({
  person,
  result,
});

const pureAssoc = (key, value, object) => () => {
  return {
    ...object,
    [key]: value,
  };
};

const pureResult = pureAssoc("shoeSize", 400, person);
console.log(person);
console.log(result);
