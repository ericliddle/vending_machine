let change = [
  {
    coin: "nickel",
    value: 0.05,
    count: 30
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
    count: 2,
    minCount: 5,
    maxCount: 15
  },
  {
    item: "chips",
    price: 1.25,
    count: 1,
    minCount: 5,
    maxCount: 15
  },
  {
    item: "cookies",
    price: 3,
    count: 0,
    minCount: 5,
    maxCount: 15
  },
  {
    item: "chocolate bar",
    price: 2.5,
    count: 6,
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

  checkItems() {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i].item, "amount: " + items[i].count)
    }
  };

  checkCoins() {
    for (let i = 0; i < change.length; i++) {
      console.log(change[i].coin, "total: $" + change[i].value * change[i].count)
    }
  };

  restockItems() {
    items.forEach(item => {
      if (item.count < item.minCount) {
        item.count = item.maxCount;
      }
    })
  };

  checkItemsStock() {
    let lowStockItems = items.reduce((lowStockCount, item) => (
      lowStockCount + (item.count < item.minCount)
    ), 0)
    return lowStockItems;
  };

  checkCashOnHand() {
    let lowCash = change.reduce((lowCashCount, coin) => (
      lowCashCount + (coin.count < 20)
    ), 0)
    return lowCash;
  };

  refillCoins() {
    change.forEach(coin => {
      if (coin.count < 20) {
        coin.count = 50;
      }
    })
  };

  dispenseItem(cashPaid, snack) {
    let itemPurchase = items.filter(item => (
      item.item === snack
    ))[0]
    if (cashPaid < itemPurchase.price) {
      return "Insufficient cash, bitch.";
    } else if (itemPurchase.count === 0) {
      return "We out."
    } else {
      return "You bought a " + snack + ".";
    }
  }

  returnChange(cashBack) {
    return {
      twonie: parseInt(cashBack / 2),
      loonie: parseInt((cashBack % 2) / 1),
      quarter: parseInt((cashBack % 1) / 0.25),
      dime: parseInt((cashBack % 0.25) / 0.10),
      nickel: parseInt((cashBack % 0.10) / 0.05)
    }
  }

}

module.exports = vendingMachine;
