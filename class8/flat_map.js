// ==================================================================
// arr.flatMap

const categoriesTree = [
  ["Delitatesy", "Owoce"],
  ["RTV", "Telewizory", "Laptopy"],
  ["Ubrania", "Kurtki"],
];

const categoriesNamesFlatMap = categoriesTree.flatMap((categoryArr) => {
  return categoryArr;
});

const categoriesNamesMap = categoriesTree.map((categoryArr) => {
  return categoryArr;
});

console.log(categoriesNamesFlatMap);
console.log(categoriesNamesMap);
