function animalCount(miles) {
  const tenMiles = 10;
  const twentyMiles = 50;
  const otherMiles = 100;
  if (miles <= 10) {
    const count = miles * tenMiles;
    return count;
  } else if (miles <= 20) {
    const firstDensity = 10 * tenMiles;
    const restMiles = miles - 10;
    const secondDensity = restMiles * twentyMiles;
    const totalAnimals = firstDensity + secondDensity;
    return totalAnimals;
  } else {
    const firstDensity = 10 * tenMiles;
    const secondDensity = 10 * twentyMiles;
    const restMiles = miles - 20;
    const restDensity = restMiles * otherMiles;
    const totalAnimals = firstDensity + secondDensity + restDensity;
    return totalAnimals;
  }
}

const animals = animalCount(25);
console.log(animals);
