// ==================================================================
// array of objects

const products = [
  {
    id: 1,
    productName: "Samsung Tv",
    price: 2000,
  },
  {
    id: 2,
    productName: "iPhone",
    price: 3000,
  },
  {
    id: 3,
    productName: "Lenovo ThinkPad",
    price: 2500,
  },
];

for (const product of products) {
  console.log(product);
  console.log(product.productName);
}

// ==================================================================
// find product with given id

function getProductById(id, products) {
  let searchedProduct;

  for (const product of products) {
    if (id === product.id) {
      searchedProduct = product;
    }
  }

  return searchedProduct;
}

const lenovo = getProductById(3, products);
console.log(lenovo);

// sometimes it may be simpler to map our data

function mapToObject(products) {
  const objProducts = {};

  for (const product of products) {
    objProducts[product.id] = {
      productName: product.productName,
      price: product.price,
    };
  }

  return objProducts;
}

const productsAsObject = mapToObject(products);
console.log(const productsAsObject = mapToObject(products);)
const lenovo = productsAsObject[3];
