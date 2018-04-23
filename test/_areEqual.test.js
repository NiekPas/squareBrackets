const expect = require('chai').expect;
const _areEqual = require('../dist/lib/_areEqual');

describe('_areEqual function test', () => {

  it('should return true when given two equal strings', () => {
    const val1 = 'space dance';
    const val2 = "space dance";
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(true);
  });

  it('should return true when given two equal numbers', () => {
    const val1 = 23;
    const val2 = 23;
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(true);
  });

  it('should return false when given two unequal strings', () => {
    const val1 = 'space dance';
    const val2 = "space dogs";
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(false);
  });

  it('should return false when given two unequal numbers', () => {
    const val1 = 23;
    const val2 = 2;
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(false);
  });

  it('should return true when given undefined twice', () => {
    const val1 = undefined;
    const val2 = undefined;
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(true);
  });

  it('should return true when given null twice', () => {
    const val1 = null;
    const val2 = null;
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(true);
  });

  it('should return false when given null and undefined', () => {
    const val1 = null;
    const val2 = undefined;
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(false);
  });

  it('should return true when given two equal arrays of strings', () => {
    const val1 = ['hello', "it's", 'the', 'police', 'please', 'open', 'up'];
    const val2 = ['hello', "it's", 'the', 'police', 'please', 'open', 'up'];
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(true);
  });

  it('should return true when given two equal arrays of numbers', () => {
    const val1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    const val2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(true);
  });

  it('should return true when given two equal arrays of arrays', () => {
    const val1 = [[1, 2, 3], ['hello', 'world']];
    const val2 = [[1, 2, 3], ['hello', 'world']];
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(true);
  });

  it('should return true when given two equal arrays of objects', () => {
    const val1 = [{ lat: 84913232.4343, lng: 4832904320.2345 }, { name: 'Derek', subscribed: false }];
    const val2 = [{ lat: 84913232.4343, lng: 4832904320.2345 }, { name: 'Derek', subscribed: false }];
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(true);
  });

  it('should return false when given two unequal arrays of strings', () => {
    const val1 = ['hello', "it's", 'the', 'police', 'please', 'open', 'up'];
    const val2 = ['hello', "it's", 'the', 'police', 'please', 'open', 'down'];
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(false);
  });

  it('should return false when given two unequal arrays of numbers', () => {
    const val1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    const val2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 145];
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(false);
  });

  it('should return false when given two unequal arrays of arrays', () => {
    const val1 = [[1, 2, 3], ['hello', 'world']];
    const val2 = [[1, 2, 3], ['goodbye', 'world']];
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(false);
  });

  it('should return false when given two unequal arrays of objects', () => {
    const val1 = [{ lat: 84913232.4343, lng: 4832904320.2345 }, { name: 'Derek', subscribed: false }];
    const val2 = [{ lat: 84913232.4343, lng: 4832904320.2345 }, { name: 'Derek', subscribed: true }];
    const areEqual = _areEqual(val1, val2);
    expect(areEqual).to.equal(false);
  });

});