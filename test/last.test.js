const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('last function test', () => {

  it('should return the last element', () => {
    const arr = [4, 15, 8, 42, 23, 16];
    const element = squareBrackets.last(arr);
    expect(element).to.equal(16);
  });

  it('should return an empty array when presented with one', () => {
    const arr = [];
    const element = squareBrackets.last(arr);
    expect(element).to.deep.equal([]);
  });

  it('should return the original value when it is not an array', () => {
    const notAnArray = 'a string instead';
    const returnValue = squareBrackets.last(notAnArray);
    expect(returnValue).to.equal(notAnArray);
  });

});