"use strict";
// ==================================================================
// call()

// function foo() {
//   console.log(this);
// }

// // foo();
// foo.call(1, "a", "b", "c");

// const banana = {
//   name: "banana",
// };

// const apple = {
//   name: "apple",
// };

// // foo.call(banana);
// foo.call(apple);

// ==================================================================
// apply()

// function foo(t, y, u) {
//   console.log(t, y, u);
//   console.log(this);
// }

// // foo();
// // foo.apply(null);

// const banana = {
//   name: "banana",
// };

// const apple = {
//   name: "apple",
// };

// foo.apply(banana, ["a", "b", "c"]);
// foo.apply(apple, [1, 2, 3]);

// const otherProduct = {
//   name: "Bananas",
//   showName() {
//     console.log(this.name);
//   },
// };

// // otherProduct.showName();

// ==================================================================
// bind()

const product = {
  name: "Bananas",
  showName() {
    console.log(this.name);
  },
};

const showName = product.showName.bind(product);
showName();
