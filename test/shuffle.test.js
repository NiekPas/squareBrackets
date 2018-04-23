const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('shuffle function test', () => {

  it('should shuffle an array', () => {
    const arr = ['I', 'am', 'the', 'god', 'of', 'hellfire'];
    const shuffledArr = squareBrackets.shuffle(arr);
    return Promise.all([
      expect(arr.length).to.equal(shuffledArr.length),
      expect(arr).to.include(shuffledArr[0]),
      expect(arr).to.include(shuffledArr[1]),
      expect(arr).to.include(shuffledArr[2]),
      expect(arr).to.include(shuffledArr[3]),
      expect(arr).to.include(shuffledArr[4]),
      expect(arr).to.include(shuffledArr[5]),
    ]);
  });

  it('should return the original value when it is invaled', () => {
    const notAnArray = 'a string instead';
    const returnValue = squareBrackets.shuffle(notAnArray);
    expect(returnValue).to.equal(notAnArray);
  });

});