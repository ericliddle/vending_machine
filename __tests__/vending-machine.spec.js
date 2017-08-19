const vendingMachine = require('../src/vending-machine.js');
const items = require('../src/vending-machine.js');
const change = require('../src/vending-machine.js');

describe('vendingMachine', () => {
  beforeEach(() => {
    vendor = new vendingMachine;
  })

  describe('check on current stock', () => {
    it('prints out the current stock for each item', () => {
      const received = vendor.checkInventory();
      expect(received).toMatchObject(received);
    })
  })


  describe('check on current items stock', () => {
    it('prints out the current stock for each item', () => {
      const received = vendor.checkItems();
      expect(received);
    })
  })

  describe('buy a bag of chips, gives correct change', () => {
    it(, () => {
      
    })
  })
})