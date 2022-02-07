// ==================================================================
// class declaration

// class WashingMachine {}

// // ==================================================================
// // new class instance

// const whirlpoolXXL = new WashingMachine();
// const whirlpoolAPlus = new WashingMachine();
// const samsungCSmall = new WashingMachine();

// const x = {};

// console.log(whirlpoolXXL, whirlpoolAPlus, samsungCSmall);
// console.log(whirlpoolAPlus instanceof WashingMachine);

// // ==================================================================
// // class constructor

// class WashingMachine {
//   constructor(size, energyClass, color = undefined) {
//     this.size = size;
//     this.energyClass = energyClass;
//     this.color = color;
//   }
// }

// const whirlpoolXXL = new WashingMachine("XXL", "A");
// const whirlpoolAPlus = new WashingMachine("L", "A+");
// const samsungCSmall = new WashingMachine("S", "A++");

// console.log(whirlpoolXXL);
// console.log(whirlpoolAPlus);
// console.log(samsungCSmall);

// console.log(whirlpoolXXL.size);
// console.log(samsungCSmall.size);
// console.log(whirlpoolAPlus.energyClass);

// // ==================================================================
// // destructuring
// class WashingMachine {
//   constructor({ size, energyClass }) {
//     this.size = size;
//     this.energyClass = energyClass;
//   }
// }

// const whirlpoolXXL = new WashingMachine({ size: "XXL", energyClass: "A" });

//
// // ==================================================================
// // class methods

// class WashingMachine {
//   program = null;
//   color = "#fff";

//   constructor({ size, energyClass }) {
//     this.size = size;
//     this.energyClass = energyClass;
//   }

//   run() {
//     if (!this.program) {
//       return console.log("Nie wybrano programu!");
//     }
//     return console.log(`running program ${this.program}`);
//   }

//   setProgram(program) {
//     this.program = program;
//   }
// }

// const samsungCSmall = new WashingMachine("S", "A++");
// console.log(samsungCSmall);
// // ==================================================================
// // private properties

// class WashingMachine {
//   #program = null;

//   constructor({ size, energyClass }) {
//     this.size = size;
//     this.energyClass = energyClass;
//     this.#program;
//   }

//   run() {
//     if (!this.#program) {
//       return console.log("Nie wybrano programu!");
//     }

//     this.#hiddenRunProcedure();
//     return console.log(`running program ${this.program}`);
//   }

//   setProgram(program) {
//     this.#program = program;
//   }

//   #hiddenRunProcedure() {
//     console.log("some important procedure");
//   }
// }

// const samsungCSmall = new WashingMachine("S", "A++");
// samsungCSmall.setProgram(1);
// samsungCSmall.run();
// console.log(samsungCSmall.#hiddenRunProcedure());
// console.log(samsungCSmall.program, samsungCSmall.#program);
// samsungCSmall.run();

// // ==================================================================
// // getters and setters

// class Product {
//   #price;
//   constructor(price) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(price) {
//     if (price > 0) {
//       this.#price = price;
//     } else {
//       console.log("Blad, cena produktu musi byc wieksza od 0");
//     }
//   }
// }

// const banany = new Product(4.99);
// // console.log(banany.price);
// banany.price = -4;
// console.log(banany.price);

// console.log(banany.price);
// banany.price = 5;
// console.log(banany.price);

// // ==================================================================
// // static properties

// class Product {
//   static count = 0;
//   static #lastId = null;

//   static getLastId() {
//     return Product.#lastId;
//   }

//   #name;
//   #price;

//   constructor({ name, price }) {
//     this.#name = name;
//     this.#price = price;

//     Product.count += 1;
//     Product.#lastId = Math.random();
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(price) {
//     this.#price = price;
//   }
// }

// const banany = new Product("Banany", 4.99);
// const kiwi = new Product("Kiwi", 7.99);
// const ananas = new Product("Ananas", 8.99);

// console.log(Product.count);
// console.log(Product.getLastId());

// console.log(banany.count);
// console.log(kiwi.count);
// console.log(Product.getLastId());

// // ==================================================================
// // inheritance

// class Child extends Parent {
//   // body
// }

class User {
  constructor(email) {
    this.email = email;
  }

  showEmail() {
    console.log(`my email is: ${this.email}`);
  }
}

const piotr = new User("piotr@wp.pl");
console.log(piotr);
piotr.showEmail();

class SuperUser extends User {
  constructor(email, nick) {
    super(email);

    this.nick = nick;
  }

  showNick() {
    console.log(`my nick is: ${this.nick}`);
  }
}

const jan = new SuperUser("superuser@wp.pl", "superHero");
console.log(jan);
jan.showEmail();
jan.showNick();
