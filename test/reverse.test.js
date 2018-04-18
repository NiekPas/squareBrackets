const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('reverse function test', () => {

  it('should reverse an array of numbers', () => {
    const arr = [4, 8, 15, 16, 23, 42];
    const reversedArr = squareBrackets.reverse(arr);
    expect(reversedArr).to.deep.equal([42, 23, 16, 15, 8, 4]);
  });

  it('should reverse an array of strings', () => {
    const arr = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];
    const reversedArr = squareBrackets.reverse(arr);
    expect(reversedArr).to.deep.equal(["elit", "adipiscing", "consectetur", "amet", "sit", "dolor", "ipsum", "lorem"]);
  });

});