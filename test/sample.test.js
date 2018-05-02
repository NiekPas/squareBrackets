const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('sample function test', () => {

  it('should return an element', () => {
    const arr = ['I', 'am', 'the', 'god', 'of', 'hellfire'];
    const sampledElement = squareBrackets.sample(arr);
    expect(arr).to.include(sampledElement);
  });

  it('should return five elements', () => {
    const arr = ['I', 'am', 'the', 'god', 'of', 'hellfire', ',', 'and', 'I', 'bring', 'you', '🎵fire🎵'];
    const sampledElements = squareBrackets.sample(arr, 5);
    return Promise.all([
      expect(arr).to.include(sampledElements[0]),
      expect(arr).to.include(sampledElements[1]),
      expect(arr).to.include(sampledElements[2]),
      expect(arr).to.include(sampledElements[3]),
      expect(arr).to.include(sampledElements[4])
    ]);
  });

  it('should throw an error when given a non-array', () => {
    const notAnArray = 'a string instead';
    expect(squareBrackets.sample.bind(squareBrackets, notAnArray)).to.throw(`invalid input: expected arr to be an array, but it is of type 'string'`);
  });

});