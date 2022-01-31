// ==================================================================
// arr.every

const degress = [3, 4, 3, 5, 5, 6, 3, 5];
const doesEveryonePassedTest = degress.every((degree) => degree >= 3);
console.log(doesEveryonePassedTest);

// ==================================================================
// arr.some
const doesAnyoneFailedTheTest = degress.every((degree) => degree < 3);
console.log(doesAnyoneFailedTheTest);
