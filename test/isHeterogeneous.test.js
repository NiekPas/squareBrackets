const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('isHeterogeneous function test', () => {

  it('should return false when given an array of strings', () => {
    const arr = ['hello', "it's", 'the', 'police', 'please', 'open', 'up'];
    const heterogeneous = squareBrackets.isHeterogeneous(arr);
    expect(heterogeneous).to.equal(false);
  });

  it('should return false when given an array of numbers', () => {
    const arr = [1, 3, 5, 7, 79];
    const heterogeneous = squareBrackets.isHeterogeneous(arr);
    expect(heterogeneous).to.equal(false);
  });

  it('should return false when given an array of objects', () => {
    const arr = [
      { name: 'Will', age: '47' },
      { species: 'Cat', food: 'milk' },
      { species: 'Cow', food: 'grass' },
      { id: '839012', fullName: 'Jason Voorhees', numKilled: 86 },
      { name: 'coffee', rating: 10, primaryUse: 'giving meaning to life' },
      { language: 'Javascript', users: 'many', typeSystem: 'probably not' }
    ];
    const heterogeneous = squareBrackets.isHeterogeneous(arr);
    expect(heterogeneous).to.equal(false);
  });

  it('should return false when given an array of arrays', () => {
    const arr = [[1, 3], [5, 7], [79]];
    const heterogeneous = squareBrackets.isHeterogeneous(arr);
    expect(heterogeneous).to.equal(false);
  });

  it('should return true when given a mixed array', () => {
    const arr = [1, 3, 5, "hello", "world"];
    const heterogeneous = squareBrackets.isHeterogeneous(arr);
    expect(heterogeneous).to.equal(true);
  });

  it('should return true when given a sneaky mixed array', () => {
    const arr = [1, 3, 5, "6", "7"];
    const heterogeneous = squareBrackets.isHeterogeneous(arr);
    expect(heterogeneous).to.equal(true);
  });

  it('should return false when given undefined', () => {
    const arr = undefined;
    const heterogeneous = squareBrackets.isHeterogeneous(arr);
    expect(heterogeneous).to.equal(false);
  });

  it('should return false when given null', () => {
    const arr = null;
    const heterogeneous = squareBrackets.isHeterogeneous(arr);
    expect(heterogeneous).to.equal(false);
  });

  it('should return false when given a string', () => {
    const arr = "hello";
    const heterogeneous = squareBrackets.isHeterogeneous(arr);
    expect(heterogeneous).to.equal(false);
  });

});