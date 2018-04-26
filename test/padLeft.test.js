const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('padLeft function test', () => {

  it('should pad an array with a single null value', () => {
    const arr = [1, 2, 5, 6, 19];
    const paddedArr = squareBrackets.padLeft(arr);
    expect(paddedArr).to.deep.equal([null, 1, 2, 5, 6, 19]);
  });
  
  it('should pad an array with the specified amount of nulls', () => {
    const arr = [1, 2, 5, 6, 19];
    const paddedArr = squareBrackets.padLeft(arr, 5);
    expect(paddedArr).to.deep.equal([null, null, null, null, null, 1, 2, 5, 6, 19]);
  });

  it('should pad an array with the specified amount of the specified value', () => {
    const arr = [1, 2, 5, 6, 19];
    const paddedArr = squareBrackets.padLeft(arr, 5, 0);
    expect(paddedArr).to.deep.equal([0, 0, 0, 0, 0, 1, 2, 5, 6, 19]);
  });

  it('should pad an array with a named function', () => {
    const arr = [1, 2, 5, 6, 19];
    const myFunc = function() {
      return 'hello world';
    }
    const paddedArr = squareBrackets.padLeft(arr, 1, myFunc);
    return Promise.all([
      expect(paddedArr[0]).to.be.a('function'),
      expect(paddedArr[1]).to.equal(1),
      expect(paddedArr[2]).to.equal(2),
      expect(paddedArr[3]).to.equal(5),
      expect(paddedArr[4]).to.equal(6),
      expect(paddedArr[5]).to.equal(19),
    ]);
  });

  it('should pad an array with an anonymous function', () => {
    const arr = [1, 2, 5, 6, 19];
    const paddedArr = squareBrackets.padLeft(arr, 1, function() {
      return 1 + 2;
    });
    return Promise.all([
      expect(paddedArr[0]).to.be.a('function'),
      expect(paddedArr[1]).to.equal(1),
      expect(paddedArr[2]).to.equal(2),
      expect(paddedArr[3]).to.equal(5),
      expect(paddedArr[4]).to.equal(6),
      expect(paddedArr[5]).to.equal(19),
    ]);
  });

  it('should return the original value when it is not an array', () => {
    const notAnArray = 'a string instead';
    const returnValue = squareBrackets.padLeft(notAnArray);
    expect(returnValue).to.equal(notAnArray);
  });

});