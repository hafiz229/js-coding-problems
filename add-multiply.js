/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  // constant
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  // wood calculation
  const chairWoodQuantity = chairQuantity * perChairWood;
  const tableWoodQuantity = tableQuantity * perTableWood;
  const bedWoodQuantity = bedQuantity * perBedWood;
  // total wood calcualtion
  const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
  return totalWood;
}

const firstOption = woodCalculator(1, 0, 1);
console.log(firstOption);
