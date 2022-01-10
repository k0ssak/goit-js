// ==================================================================
// iterating over array

const products = ["banan", "kiwi", "jabłko"];

const productsLength = products.length;
for (let i = 0; i < productsLength; i += 1) {
  console.log(products[i]);
}

// ==================================================================
// for...of

for (const product of products) {
  console.log(product);
}

// ==================================================================
// do something as long as needed (break and continue)

let productToSearch = "kiwi";
for (const product of products) {
  if (productToSearch === product) {
    console.log("Znalazłem kiwi!");
    break;
  }
}
