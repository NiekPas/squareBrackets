const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('distinctLength function test', () => {

  it('should count unique strings', () => {
    const arr = ['hello', 'is', 'it', 'me', 'you\'re', 'it', 'looking', 'for', 'for'];
    const arrWithoutDuplicates = squareBrackets.distinctLength(arr);
    expect(arrWithoutDuplicates).to.equal(7);
  });

  it('should count unique numbers', () => {
    const arr = [1, 1, 2, 3, 4, 4, 25, 432];
    const arrWithoutDuplicates = squareBrackets.distinctLength(arr);
    expect(arrWithoutDuplicates).to.equal(6);
  });

  it('should count unique arrays', () => {
    const arr = [[], [], [1, 2], ['string', 'a', 'ring']];
    const arrWithoutDuplicates = squareBrackets.distinctLength(arr);
    expect(arrWithoutDuplicates).to.equal(3);
  });

  it('should count unique objects', () => {
    const arr = [{name: 'me', self: true}, {self: true, name: 'me'}, {name: 'Darjeeling', self: false}];
    const arrWithoutDuplicates = squareBrackets.distinctLength(arr);
    expect(arrWithoutDuplicates).to.equal(2);
  });

  it('should throw an error when given an invalid value', () => {
    const notAnArr = 'not an array';
    expect(squareBrackets.distinctLength.bind(squareBrackets, notAnArr)).to.throw();
  });

});