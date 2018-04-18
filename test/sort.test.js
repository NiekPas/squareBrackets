const expect = require('chai').expect;
const sort = require('../dist/sort');

describe('sort function test', () => {

  it('should sort an array of numbers', () => {
    const arr = [4, 15, 8, 42, 23, 16];
    const sortedArr = sort.sort(arr);
    expect(sortedArr).to.deep.equal([4, 8, 15, 16, 23, 42]);
  });

  it('should reverse sort an array of numbers', () => {
    const arr = [4, 15, 8, 42, 23, 16];
    const sortedArr = sort.sort(arr, reverse = true);
    expect(sortedArr).to.deep.equal([42, 23, 16, 15, 8, 4]);
  });

  it('should sort an array of strings', () => {
    const arr = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];
    const sortedArr = sort.sort(arr);
    expect(sortedArr).to.deep.equal(["adipiscing", "amet", "consectetur", "dolor", "elit", "ipsum", "lorem", "sit"]);
  });

  it('should reverse sort an array of strings', () => {
    const arr = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];
    const sortedArr = sort.sort(arr, reverse = true);
    expect(sortedArr).to.deep.equal(["sit", "lorem", "ipsum", "elit", "dolor", "consectetur", "amet", "adipiscing"]);
  });

});