const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('map function test', () => {

  it('should apply a function to all elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = squareBrackets.map(arr, el => el*5);
    expect(mappedArr).to.deep.equal([5, 10, 15, 20, 25]);
  });

  it('should throw an error when given a non-array', () => {
    const notAnArray = 'a string instead';
    expect(squareBrackets.map.bind(squareBrackets, notAnArray)).to.throw(`invalid input: expected arr to be an array, but it is of type 'string'`);
  });

});