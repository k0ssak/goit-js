// ==================================================================
// arr.map

const temperatureInCelsius = [36.6, 23, 21, -10, 5];
const temparaturesInFahrenheits = temperatureInCelsius.map((temperature) => {
  return temperature * 1.8 + 32;
});

// to samo
const temparaturesInFahrenheits = temperatureInCelsius.map(
  (temperature) => temperature * 1.8 + 32
);

// to samo
const temparaturesInFahrenheits = temperatureInCelsius.map(function (
  temperature
) {
  return temperature * 1.8 + 32;
});

// to samo
const toFahrenheits = (temperatureInCelsius) => {
  return temperatureInCelsius * 1.8 + 32;
};

const temparaturesInFahrenheits = temperatureInCelsius.map(toFahrenheits);

// ==================================================================
// arr.map - examples
const temparaturesInFahrenheits = temperatureInCelsius.map(
  (temperature, index, originalArr) => {
    console.log(index, originalArr);
    if (temperature > 20) {
      return temperature * 1.8 + 32;
    }
  }
);

// ==================================================================
// arr.map with objects

const weapons = [
  {
    name: "sword",
    dmg: 10,
  },
  {
    name: "bow",
    dmg: 5,
  },
  {
    name: "axe",
    dmg: 12,
  },
];

const weaponNames = weapons.map((weapon) => {
  return weapon.name;
});

console.log(weaponNames);

// or

const employess = ["Karol", "Piotr", "Jan"];
const employessWithSalaries = employess.map((name) => {
  return {
    name: name,
    salary: Math.floor(Math.random() * 5000),
  };
});

console.log(employessWithSalaries);
