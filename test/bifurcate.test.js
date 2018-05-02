const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('bifurcate function test', () => {

  it('should bifurcate an array', () => {
    const arr = [4, 15, 8, 42, 23, 16];
    const bifurcatedArray = squareBrackets.bifurcate(arr, 
      element => element < 20
    );
    expect(bifurcatedArray).to.deep.equal([[4, 15, 8, 16], [42, 23]]);
  });

  it('should throw an error when presented with an empty array', () => {
    const arr = [];
    expect(squareBrackets.bifurcate.bind(squareBrackets, arr)).to.throw(`invalid input: expected array length to be > 0, but it is 0`);
  });

  it('should throw an error when presented with a non-array', () => {
    const notAnArray = 'a string instead';
    expect(squareBrackets.bifurcate.bind(squareBrackets, notAnArray)).to.throw(`invalid input: expected arr to be an array, but it is of type 'string'`);
  });

});