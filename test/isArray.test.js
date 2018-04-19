const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('isArray function test', () => {

  it('should return true when given an array of strings', () => {
    const arr = ['hello', "it's", 'the', 'police', 'please', 'open', 'up'];
    const isArray = squareBrackets.isArray(arr);
    expect(isArray).to.equal(true);
  });

  it('should return true when given an array of numbers', () => {
    const arr = [1, 3, 5, 7, 79];
    const isArray = squareBrackets.isArray(arr);
    expect(isArray).to.equal(true);
  });

  it('should return true when given an array of objects', () => {
    const arr = [
      { name: 'Will', age: '47' },
      { species: 'Cat', food: 'milk' },
      { species: 'Cow', food: 'grass' },
      { id: '839012', fullName: 'Jason Voorhees', numKilled: 86 },
      { name: 'coffee', rating: 10, primaryUse: 'giving meaning to life' },
      { language: 'Javascript', users: 'many', typeSystem: 'probably not' }
    ];
    const isArray = squareBrackets.isArray(arr);
    expect(isArray).to.equal(true);
  });

  it('should return true when given an array of arrays', () => {
    const arr = [[1, 3], [5, 7], [79]];
    const isArray = squareBrackets.isArray(arr);
    expect(isArray).to.equal(true);
  });

  it('should return false when given a string', () => {
    const arr = "string";
    const isArray = squareBrackets.isArray(arr);
    expect(isArray).to.equal(false);
  });

  it('should return false when given a number', () => {
    const arr = 2;
    const isArray = squareBrackets.isArray(arr);
    expect(isArray).to.equal(false);
  });

  it('should return false when given an object', () => {
    const arr = {
      i: "am",
      an: "object"
    };
    const isArray = squareBrackets.isArray(arr);
    expect(isArray).to.equal(false);
  });

  it('should return false when given undefined', () => {
    const arr = undefined;
    const isArray = squareBrackets.isArray(arr);
    expect(isArray).to.equal(false);
  });

  it('should return false when given null', () => {
    const arr = null;
    const isArray = squareBrackets.isArray(arr);
    expect(isArray).to.equal(false);
  });

});