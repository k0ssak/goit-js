// ==================================================================
// object literal

const product = {
  name: "Samsung TV",
  price: 2150,
  specialPrice: 2000,
  description: "Bardzo fajny telewizor",
};

// ==================================================================
// object may contain another objects (or arrays)

const productExtented = {
  name: "Samsung OLED TV 56'",

  prices: {
    normal: 2150,
    special: 2000,
  },

  description: "Bardzo fajny telewizor",

  category: {
    categoryId: 2,
    categoryName: "Telewizory",
  },

  producer: {
    producerId: 6,
    producerName: "Samsung",
  },

  images: ["tv.jpg", "tv2.jpg", "tv3.jpg"],
};

// ==================================================================
// getting the property

const productName = product.name;
console.log(productName);
console.log(product.name);

const productPrice = productExtented.prices.normal;
console.log(productPrice);
console.log(productExtented.prices.normal);

const productImages = productExtented.images;
console.log(productImages);
console.log(productImages[1]);

// ==================================================================
// getting the property with brackets

const bracketsProductName = product["name"];
console.log(productName);
console.log(product["name"]);

const bracketsProductPrice = productExtented["prices"]["normal"];
console.log(productPrice);
console.log(productExtented["prices"]["normal"]);

const bracketsProductImages = productExtented["images"];
console.log(productImages);
console.log(productImages[1]);
console.log(productExtented["images"][0]);

// ==================================================================
// changing the value

productExtented.name = "Samsung super OLED TV 56'";
productExtented.prices.special = 100;
productExtented.images.push("tv4.jpg");

// ==================================================================
// adding the value
productExtented.ean = "432423423";
productExtented["url"] = "https://moj-sklep/samsung-tv";

// ==================================================================
// removing key with value

delete productExtented.url;

// ==================================================================
// short properties

const productName = "Samsung Galaxy 10";
const price = 599;

const samsungPhone = {
  productName: productName,
  price: price,
};

const samsungPhoneShorter = {
  productName,
  price,
};

// ==================================================================
// object key as a variable

const propLogin = "login";
const user = {
  email: "karol@goit.pl",
};

user[propLogin] = "kossak";

console.log(propLogin);

const newUser = {
  email: "karol@goit.pl",
  [propLogin]: "kossak",
};

// ==================================================================
// object methods

const basket = {
  products: ["Samsung Tv", "iPhone", "Mysz Logitech"],

  addProduct(productName) {
    console.log("addding product");
  },

  getProducts() {
    console.log("display all products");
  },
};

basket.addProduct("Klawiatura Logitech");
basket.getProducts();

// ==================================================================
// `this` in object

const basket = {
  products: ["Samsung Tv", "iPhone", "Mysz Logitech"],

  addProduct(productName) {
    this.products.push(productName);
  },

  getProducts() {
    return this.products;
  },

  showThis() {
    console.log(this);
  },
};

basket.addProduct("Klawiatura Logitech");
basket.addProduct("Słuchawki Creative");
basket.getProducts();
basket.showThis();
