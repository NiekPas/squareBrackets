const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('map function test', () => {

  it('should apply a function to all elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = squareBrackets.map(arr, el => el*5);
    expect(mappedArr).to.deep.equal([5, 10, 15, 20, 25]);
  });

  it('should return the original value when it is invaled', () => {
    const notAnArray = 'a string instead';
    const returnValue = squareBrackets.map(notAnArray);
    expect(returnValue).to.equal(notAnArray);
  });

});