const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('first function test', () => {

  it('should return the first element', () => {
    const arr = [4, 15, 8, 42, 23, 16];
    const element = squareBrackets.first(arr);
    expect(element).to.equal(4);
  });

  it('should throw an error when presented with an empty array', () => {
    const arr = [];
    expect(squareBrackets.bifurcate.bind(squareBrackets, arr)).to.throw(`invalid input: expected array length to be > 0, but it is 0`);
  });

  it('should throw an error when provided with a non-array', () => {
    const notAnArr = 'a string instead';
    expect(squareBrackets.first.bind(squareBrackets, notAnArr)).to.throw();
  });

});