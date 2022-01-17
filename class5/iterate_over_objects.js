// ==================================================================
// for..in loop

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

for (const key in productExtented) {
  console.log(key);
  console.log(productExtented[key]);
}

// ==================================================================
// hasOwnProperty

const person = {
  name: "karol",
};

const employee = Object.create(person);
employee.salary = 2000;
console.log(employee);

console.log("name" in employee);
console.log("salary" in employee);

console.log(employee.hasOwnProperty("name"));
console.log(employee.hasOwnProperty("salary"));

for (const key in productExtented) {
  if (productExtented.hasOwnProperty(key)) {
    console.log(key);
    console.log(productExtented[key]);
  }
}

// ==================================================================
// Object.keys() method

const keys = Object.keys(productExtented);
console.log(keys);

for (const key of keys) {
  console.log(key);
  console.log(productExtented[key]);
}

// ==================================================================
// Object.values() method

const values = Object.values(productExtented);
console.log(values);

// ==================================================================
// Object.entries() method

const entries = Object.entries(productExtented);
console.log(entries);
