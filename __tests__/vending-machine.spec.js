const vendingMachine = require('../src/vending-machine.js');
const items = require('../src/vending-machine.js');
const change = require('../src/vending-machine.js');

describe('vendingMachine', () => {
  beforeEach(() => {
    vendor = new vendingMachine;
  })

  describe('check on current items stock', () => {
    it('prints out the current stock for each item', () => {
      const received = vendor.checkItems();
      expect(received);
    })
  })

  describe('check on current coins in machine', () => {
    it('returns total value for all coins in machine', () => {
      const received = vendor.checkCoins();
      expect(received);
    })
  })

  describe('check if item can be purchahsed if there\'s enough money', () => {
    it('should dispense item if value is >= item cost', () => {
      const received = vendor.dispenseItem(5.00, 'chocolate bar');
      expect(received).toEqual('You bought a chocolate bar.')
    })
    it('should not dispense the item if value is < item cost', () => {
      const received = vendor.dispenseItem(0.50, 'nutts');
      expect(received).toEqual('Insufficient cash, bitch.')
    })
    it('should not dispense if item is out of stock', () => {
      const received = vendor.dispenseItem(4.00, 'cookies');
      expect(received).toEqual('We out.')
    })
  })

  describe('checks on the current stock of items in machine', () => {
    it('will determine if 3 or more items are below min-count', () => {
      const received = vendor.checkItemsStock();
      const expectation = 3;
      expect(received).toEqual(expectation);
    })
  })

  describe('checks on the current amount of coins', () => {
    it('will tally how many are less than 20', () => {
      const received = vendor.checkCashOnHand();
      const expectation = 4;
      expect(received).toEqual(expectation);
    })
    it('will take all coins under 20 and top up to 50', () => {
      vendor.refillCoins();
      const received = vendor.checkCashOnHand();
      const expectation = 0;
      expect(received).toEqual(expectation);

    })
  })

  describe('if item count is below min-count', () => {
    it('will restock items to max-count', () => {
      vendor.restockItems();
      const received = vendor.checkItemsStock();
      const expectation = 0;
      expect(received).toEqual(expectation)
    })
  })

  describe('returning purchasers change', () => {
    it('will return change using highest value coins possible', () => {
      const received = vendor.returnChange(2.85);
      const expectation = {
        twonie: 1,
        loonie: 0,
        quarter: 3,
        dime: 1,
        nickel: 0
      }
      expect(received).toEqual(expectation);
    })
  })

})