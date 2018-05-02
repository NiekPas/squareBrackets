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

  it('should throw an error when given a non-array', () => {
    const notAnArray = 'a string instead';
    expect(squareBrackets.shuffle.bind(squareBrackets, notAnArray)).to.throw(`invalid input: expected arr to be an array, but it is of type 'string'`);
  });

});