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

  it('should return the original value when it is invaled', () => {
    const notAnArray = 'a string instead';
    const returnValue = squareBrackets.sample(notAnArray);
    expect(returnValue).to.equal(notAnArray);
  });

});