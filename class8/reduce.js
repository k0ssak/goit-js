// ==================================================================
// arr.reduce

const arr = [0, 1, 2, 3, 4, 5];
const initialValue = 0;

arr.reduce((previousValue, element, index, array) => {
  return previousValue + element;
}, initialValue);

// Pierwsza iteracja => initialValue = 0; element = 0 -> return 0 + 0 => 0
// Pierwsza iteracja => initialValue = 0; element = 1 -> return 0 + 1 => 1
// Pierwsza iteracja => initialValue = 1; element = 2 -> return 1 + 2 => 3
// Pierwsza iteracja => initialValue = 3; element = 3 -> return 3 + 3 => 6
// Pierwsza iteracja => initialValue = 6; element = 4 -> return 6 + 4 => 10
// Pierwsza iteracja => initialValue = 10; element = 5 -> return 10 + 5 => 15

// ==================================================================
// arr.reduce examples

const productsInBasket = [
  {
    id: 1,
    price: 300,
    name: "Banany",
    count: 2,
    categories: "",
  },
  {
    id: 2,
    price: 500,
    name: "Kiwi",
    count: 1,
  },
  {
    id: 3,
    price: 600,
    name: "Jabłka",
    count: 3,
  },
  {
    id: 4,
    price: 100,
    name: "Mango",
    count: 1,
  },
  {
    id: 5,
    price: 200,
    name: "Awokado",
    count: 2,
  },
];

// mozemy napisc reduce'a ktory nam policzy sume
const basketSum = productsInBasket.reduce(
  (sum, product) => sum + product.price,
  0
);

// mozemy tez zrobic z tego funkcje
const countBasketSum = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};

const bestsellers = productsInBasket.reduce((bestsellers, product) => {
  if (product.count > 2) {
    bestsellers.push(product);
  }
  return bestsellers;
}, []);

const getBestsellers = (products) => {
  return productsInBasket.reduce((bestsellers, product) => {
    if (product.count > 2) {
      bestsellers.push(product);
    }
    return bestsellers;
  }, []);
};
