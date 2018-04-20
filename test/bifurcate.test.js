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

  it('should return an empty array when presented with one', () => {
    const arr = [];
    const bifurcatedArray = squareBrackets.bifurcate(arr);
    expect(bifurcatedArray).to.deep.equal([]);
  });

  it('should return the original value when it is not an array', () => {
    const notAnArray = 'a string instead';
    const returnValue = squareBrackets.bifurcate(notAnArray);
    expect(returnValue).to.equal(notAnArray);
  });

});