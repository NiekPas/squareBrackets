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

  it('should throw an error when given a non-array', () => {
    const notAnArray = 'a string instead';
    expect(squareBrackets.last.bind(squareBrackets, notAnArray)).to.throw(`invalid input: expected arr to be an array, but it is of type 'string'`);
  });

});