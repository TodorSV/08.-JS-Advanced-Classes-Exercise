function autoEngineering(inputArr) {
  const models = {};
  inputArr.forEach((productLine) => {
    const [brand, model, quantity] = productLine.split(" | ");
    if (!models.hasOwnProperty(brand)) {
      models[brand] = {};
    }
    if (!models[brand].hasOwnProperty(model)) {
      models[brand][model] = 0;
    }
    models[brand][model] += Number(quantity);
  });
  for (const [brand, currModel] of Object.entries(models)) {
    console.log(`${brand}`);
    for (const [model, quantity] of Object.entries(currModel)) {
      console.log(`###${model} -> ${quantity}`);
    }
  }
}

autoEngineering([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
