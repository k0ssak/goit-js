const coordinates = [
  [432, 432],
  [12, 32],
  [32, 17],
];

for (const coordinate of coordinates) {
  console.log(coordinate[0], coordinate[1]); // w00t?
}

for (const coordinate of coordinates) {
  const [x, y] = coordinate;
  console.log(x, y);
}

for (const [x, y] of coordinates) {
  console.log(x, y);
}
