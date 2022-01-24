// ==================================================================
// Functions

/**
 *
 * funkcję mogą przyjmować inne funckcje jako parametry
 * funkcja przekazywana do innej funkcji ktora jest tam wylowyna nazywana jest "callbackiem"
 * funkcja ktora przyjmuje inna funkcje jako parametr albo zwraca inna funkcja nazywana jest "higher order function"
 */

function welcome(name) {
  return `Welcome ${name}`;
}

console.log(welcome("karol"));
console.log(welcome);

function doMath(a, b, callback) {
  return callback(a, b);
}

doMath(2, 3, function (x, y) {
  return x + y;
});

doMath(2, 3, function (x, y) {
  return x * y;
});

const divide = function (x, y) {
  return x / y;
};

doMath(6, 7, divide);

setTimeout(function () {
  console.log("This will appear after 1s");
}, 1000);

// ==================================================================
// more callbacks

const registerUser = function (user, onUserExist, onUserNotExist) {
  if (user.isRegistred) {
    onUserExist(user);
    return;
  }

  onUserNotExist(user);
};

const user = {
  name: "Piotr",
  isRegistred: false,
};

const admin = {
  name: "Michał",
  isRegistred: true,
};

const logInUser = function () {
  console.log("logging in");
};

const showAdminPrivileges = function () {
  console.log("Unlimited power!");
};

const showError = function () {
  console.log("Ups something went wrong");
};

registerUser(user, logInUser, showError);
registerUser(admin, showAdminPrivileges, showError);

// ==================================================================
// abstraction - hides the implementation

const filterArr = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const result = filter([1, 2, 3, 4, 5], function (value) {
  return value > 2;
});

const result2 = filter([1, 2, 3, 4, 5], function (value) {
  return value < 2;
});

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const result3 = filter(fruits, getFruitsWithQuantity);

// ==================================================================
// do something for every array item

const forEach = function (array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
};

const arr = [1, 2, 3];
forEach(arr, function (item) {
  console.log(item * 2);
});

// more asbtraction
const map = function (array, callback) {
  const newArr = [];
  forEach(arr, function (item) {
    newArr.push(callback(item));
  });
  return newArr;
};

const arr2 = map([1, 2, 3], function (item) {
  return item * 2;
});
