"use strict";
// ==================================================================
// context

// Jakub uczy się programować w JavaScripcie, bo Jakub chce zostać dobrym frontend developerem
// Jakub uczy się programować w JavaScripcie, bo on chce chce zostać dobrym frontend developerem

// Jakub uczy się programować w JavaScripcie, bo Jakub chce zostać dobrym frontend developerem
const jakub = {
  firstname: "Jakub",
  learn() {
    console.log(`${jakub.firstname} started to learn javascript`);
  },
};

// // Jakub uczy się programować w JavaScripcie, bo on(this) chce zostać dobrym frontend developerem
const secondJakub = {
  firstname: "Jakub",
  learn() {
    console.log(`${this.firstname} started to learn javascript`);
  },
};

// ==================================================================
// defining this

// context is described when we call function not when or how we define it!!!

// in global scope this reffers to Window object
// console.log(this);

// // // in function "this" reffers to Window object without strict mode and unfefined in strict mode
// function foo() {
//   console.log(this);
// }

// foo();

// // // arrow functions doesnt have own "this", its described by place of its declaration. It reffers to outside function
// const bar = () => {
//   console.log(this);
// };

// // foo();
// bar();

// ==================================================================
// more complicated example (differce with arrow function)

// function showThis() {
//   console.log(`That is this:`, this);
// }

// showThis();

// const product = {
//   name: "Bananas",
// };

// product.myNewFoo = showThis;
// product.myNewFoo();

// // same problem in other way

// const otherProduct = {
//   name: "Bananas",
//   showName() {
//     console.log(this);
//   },
// };

// otherProduct.showName();

// const showName = otherProduct.showName;
// showName();

// ==================================================================
// what arrow functions do differently

// const warrior = {
//   name: "Conan",

//   sword: "Big bad ssword",
//   mace: "Hercules mace",

//   fightWithSword: () => {
//     console.log(this);
//     console.log(`Im using awesome ${this.sword}`);
//   },

//   fightWithMace() {
//     console.log(this);
//     console.log(`Fighting with a ${this.mace}`);
//   },
// };

// warrior.fightWithSword();
// warrior.fightWithMace();

// // why its undefined?

// function foo() {
//   const warrior = {
//     name: "Conan",

//     sword: "Big bad ssword",
//     mace: "Hercules mace",

//     fightWithSword: () => {
//       console.log(this);
//       console.log(`Im using awesome ${this.sword}`);
//     },

//     fightWithMace() {
//       console.log(this);
//       console.log(`Fighting with a ${this.mace}`);
//     },
//   };

//   warrior.fightWithSword();
//   warrior.fightWithMace();
// }
// foo();

// this is now undefined

const warrior = {
  name: "Conan",

  sword: "Big bad ssword",
  mace: "Hercules mace",

  prepare() {
    console.log(this);
    this.fightWithSword = () => {
      console.log(`Im using awesome ${this.sword}`);
    };
  },

  fightWithMace() {
    console.log(this);
    console.log(`Fighting with a ${this.mace}`);
  },
};

warrior.prepare();

warrior.fightWithSword();

const useSword = warrior.fightWithSword;
useSword();

// we did it!
