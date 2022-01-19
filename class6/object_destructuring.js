// ==================================================================
// object destructuring
const product = {
  name: "Samsung s10",
  price: 256,
  specialPrice: 124,
  categories: ["phones"],
  isBuyable: true,
};

const template = `Produkt ${product.name} można kupic w cenie ${product.price} lub w cenie specjalnej ${product.specialPrice}`;
if (product.isBuyable) {
  //...
}

// mozna prosciej:
const { name, price, specialPrice, categories, isBuyable } = product;
const template = `Produkt ${name} można kupic w cenie ${price} lub w cenie specjalnej ${specialPrice}`;
if (isBuyable) {
  //...
}

// ==================================================================
// object destructuring - default values

const iPhone = {
  name: "iPhoneX",
  isBuyable: false,
};

const { name, price = 1000, isBuyable } = iPhone;
console.log(name, price, isBuyable);

// ==================================================================
// object destructuring - changing variable name

const samsung = {
  name: "Samsung s10",
  price: 256,
  specialPrice: 124,
  categories: ["phones"],
  isBuyable: true,
};

const iPhone = {
  name: "iPhoneX",
  price: 1250,
  specialPrice: 500,
  categories: ["phones"],
  isBuyable: false,
};

const { name, price, specialPrice, categories, isBuyable } = samsung;
const { name, price, specialPrice, categories, isBuyable } = iPhone;
console.log(name); // w00t?

const {
  name: iPhoneName,
  price: iPhonePrice,
  specialPrice: iPhoneSpecialPrice,
  categories: iPhoneCategories,
} = iPhone;
console.log(iPhoneName, iPhonePrice, iPhoneSpecialPrice, iPhoneCategories);

// ==================================================================
// object destructuring - loops

const products = [
  {
    name: "Samsung s10",
    price: 256,
    specialPrice: 124,
    categories: ["phones"],
    isBuyable: true,
  },
  {
    name: "iPhoneX",
    price: 1250,
    specialPrice: 500,
    categories: ["phones"],
    isBuyable: false,
  },
];

for (const product of products) {
  const { name, price, categories } = product;

  console.log(name);
  console.log(price);
  console.log(categories);
}

for (const { name, price, categories } of products) {
  console.log(name);
  console.log(price);
  console.log(categories);
}

// ==================================================================
// object destructuring - deep destructuring

const permissions = {
  addPosts: true,
  deletePosts: false,
  viewContent: true,
};

const address = {
  street: "Wymyslona",
  streerNr: 16,
  country: "Poland",
};

const user = {
  name: "Karol",
  age: 36,

  permissions,

  groups: ["admin", "user", "owner"],
  login: "kossak",

  address,

  marketingConsents: false,
};

const {
  name,
  permissions: { addPosts, deletePosts },
  address: { street },
} = user;
console.log(name);
console.log(addPosts);
console.log(deletePosts);
console.log(street);
