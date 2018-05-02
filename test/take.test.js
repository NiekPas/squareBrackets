const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('take function test', () => {

  it('should return an element', () => {
    const arr = [4, 15, 8, 42, 23, 16];
    const element = squareBrackets.take(arr);
    expect(element).to.equal(4);
  });

  it('should return several elements as an array', () => {
    const arr = [4, 15, 8, 42, 23, 16];
    const takenElements = squareBrackets.take(arr, 3);
    expect(takenElements).to.deep.equal([4, 15, 8]);
  });

  it('should return all elements when n is greater than the length of the array', () => {
    const arr = [4, 15, 8, 42, 23, 16];
    const takenElements = squareBrackets.take(arr, 200);
    expect(arr).to.deep.equal(takenElements);
  });

  it('should throw an error when given a non-array', () => {
    const notAnArray = 'a string instead';
    expect(squareBrackets.take.bind(squareBrackets, notAnArray)).to.throw(`invalid input: expected arr to be an array, but it is of type 'string'`);
  });

});