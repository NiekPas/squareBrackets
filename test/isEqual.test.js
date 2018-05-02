const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('isEqual function test', () => {

  it('should return true when given two equal arrays of strings', () => {
    const arr1 = ['hello', "it's", 'the', 'police', 'please', 'open', 'up'];
    const arr2 = ['hello', "it's", 'the', 'police', 'please', 'open', 'up'];
    const isEqual = squareBrackets.isEqual(arr1, arr2);
    expect(isEqual).to.equal(true);
  });

  it('should return true when given two equal arrays of numbers', () => {
    const arr1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    const arr2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    const isEqual = squareBrackets.isEqual(arr1, arr2);
    expect(isEqual).to.equal(true);
  });

  it('should return true when given two equal arrays of arrays', () => {
    const arr1 = [[1, 2, 3], ['hello', 'world']];
    const arr2 = [[1, 2, 3], ['hello', 'world']];
    const isEqual = squareBrackets.isEqual(arr1, arr2);
    expect(isEqual).to.equal(true);
  });

  it('should return true when given two equal arrays of objects', () => {
    const arr1 = [{ lat: 84913232.4343, lng: 4832904320.2345 }, { name: 'Derek', subscribed: false }];
    const arr2 = [{ lat: 84913232.4343, lng: 4832904320.2345 }, { name: 'Derek', subscribed: false }];
    const isEqual = squareBrackets.isEqual(arr1, arr2);
    expect(isEqual).to.equal(true);
  });

  it('should return true when given two complex arrays', () => {
    const arr1 = [
      { lat: 84913232.4343, lng: 4832904320.2345 }, 
      { name: 'Derek', subscribed: false }, 
      [
        1, 
        2, 
        {
          name: 'true', 
          cats: ['Miezer', 'Balthazar', 'Virginia']
        }
      ]
    ];
    const arr2 = [
      { lat: 84913232.4343, lng: 4832904320.2345 }, 
      { name: 'Derek', subscribed: false }, 
      [
        1, 
        2, 
        {
          name: 'true', 
          cats: ['Miezer', 'Balthazar', 'Virginia']
        }
      ]
    ];
    const isEqual = squareBrackets.isEqual(arr1, arr2);
    expect(isEqual).to.equal(true);
  });

  it('should return false when given two unequal arrays of strings', () => {
    const arr1 = ['hello', "it's", 'the', 'police', 'please', 'open', 'up'];
    const arr2 = ['hello', "it's", 'the', 'police', 'please', 'open', 'down'];
    const isEqual = squareBrackets.isEqual(arr1, arr2);
    expect(isEqual).to.equal(false);
  });

  it('should return false when given two unequal arrays of numbers', () => {
    const arr1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    const arr2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 145];
    const isEqual = squareBrackets.isEqual(arr1, arr2);
    expect(isEqual).to.equal(false);
  });

  it('should return false when given two unequal arrays of arrays', () => {
    const arr1 = [[1, 2, 3], ['hello', 'world']];
    const arr2 = [[1, 2, 3], ['goodbye', 'world']];
    const isEqual = squareBrackets.isEqual(arr1, arr2);
    expect(isEqual).to.equal(false);
  });

  it('should return false when given two unequal arrays of objects', () => {
    const arr1 = [{ lat: 84913232.4343, lng: 4832904320.2345 }, { name: 'Derek', subscribed: false }];
    const arr2 = [{ lat: 84913232.4343, lng: 4832904320.2345 }, { name: 'Derek', subscribed: true }];
    const isEqual = squareBrackets.isEqual(arr1, arr2);
    expect(isEqual).to.equal(false);
  });

  it('should return false when given two arrays of unequal length', () => {
    const arr1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    const arr2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    const isEqual = squareBrackets.isEqual(arr1, arr2);
    expect(isEqual).to.equal(false);
  });

  it('should throw an error when presented with only one value', () => {
    const arr = [1, 2];
    expect(squareBrackets.isEqual.bind(squareBrackets, arr)).to.throw('invalid input: please provide two values');
  });

  it('should throw an error when presented with a non-array', () => {
    const notAnArray = 'a string instead';
    const arr = [1, 2];
    expect(squareBrackets.isEqual.bind(squareBrackets, notAnArray, arr)).to.throw(`invalid input: expected arr1 to be an array, but it is of type 'string'`);
  });

});