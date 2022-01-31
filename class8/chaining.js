// ==================================================================
// methods chaining

const temperatureInCelsius = [36.6, 23, 21, -10, 5];

const sorted = [...temperatureInCelsius].sort();
const sortedInFahrenfaits = sorted.map((temperature) => temperature * 1.8 + 32);
const sum = sortedInFahrenfaits.reduce((prevTemp, temp) => prevTemp + temp);

const sumOfAllTemparaturesInFahrenheits = [...temperatureInCelsius]
  .sort()
  .map((temperature) => temperature * 1.8 + 32)
  .reduce((prevTemp, temp) => prevTemp + temp);
