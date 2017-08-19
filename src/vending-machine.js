let change = [
  {
    coin: "nickel",
    value: 0.05,
    count: 18
  },
  {
    coin: "dime",
    value: 0.10,
    count: 4
  },
  {
    coin: "quarter",
    value: 0.25,
    count: 12
  },
  {
    coin: "loonie",
    value: 1,
    count: 8
  },
  {
    coin: "twonie",
    value: 2,
    count: 12
  }
];

items = [
  {
    item: "pop",
    price: 1.5,
    count: 6,
    minCount: 5,
    maxCount: 15
  },
  {
    item: "chips",
    price: 1.25,
    count: 8,
    minCount: 5,
    maxCount: 15
  },
  {
    item: "cookies",
    price: 3,
    count: 10,
    minCount: 5,
    maxCount: 15
  },
  {
    item: "chocolate bar",
    price: 2.5,
    count: 4,
    minCount: 5,
    maxCount: 15
  },
  {
    item: "nutts",
    price: 0.75,
    count: 7,
    minCount: 5,
    maxCount: 15
  }
];

class vendingMachine {

  checkInventory() {
    return items
    console.log
  };

  checkItems() {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i].item, change[i].coin)
    }
  };

  buyItems(item, quantity) {
    
  }

}

module.exports = vendingMachine;
