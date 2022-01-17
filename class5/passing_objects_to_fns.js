const name = "Karol";
const number = 1;

function foo(primitiveString, primitiveNumber) {
  (primitiveString = "Piotr"), (primitiveNumber = 5);
}

foo(name, number);
console.log(name, number);

//======================================================

const arr = [1, 2, 3];
const obj = {
  name: "Karol",
  age: 31,
};

function modifyArr(array, object) {
  array.push(4);
  object.age = 18;
}

modifyArr(arr, obj);
console.log(arr, obj);
