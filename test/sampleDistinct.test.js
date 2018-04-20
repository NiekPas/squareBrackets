const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('sampleDistinct function test', () => {

  it('should return an element', () => {
    const arr = ['I', 'am', 'the', 'god', 'of', 'hellfire'];
    const sampledElement = squareBrackets.sampleDistinct(arr);
    expect(arr).to.include(sampledElement);
  });

  it('should return twelve distinct elements', () => {
    const arr = ['I', 'am', 'the', 'god', 'of', 'hellfire', ',', 'and', 'I', 'bring', 'you', '🎵fire🎵'];
    const sampledElements = squareBrackets.sampleDistinct(arr, 12);
    expect(sampledElements.sort()).to.deep.equal(arr.sort());
  });

  it('should return all elements if n is greater than the length of the array', () => {
    const arr = ['I', 'am', 'the', 'god', 'of', 'hellfire', ',', 'and', 'I', 'bring', 'you', '🎵fire🎵'];
    const sampledElements = squareBrackets.sampleDistinct(arr, 250);
    expect(sampledElements.sort()).to.deep.equal(arr.sort());
  });

  it('should return the original value when it is invaled', () => {
    const notAnArray = 'a string instead';
    const returnValue = squareBrackets.sampleDistinct(notAnArray);
    expect(returnValue).to.equal(notAnArray);
  });

});