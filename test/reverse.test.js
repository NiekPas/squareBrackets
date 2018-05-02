const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('reverse function test', () => {

  it('should reverse an array of numbers', () => {
    const arr = [4, 8, 15, 16, 23, 42];
    const reversedArr = squareBrackets.reverse(arr);
    expect(reversedArr).to.deep.equal([42, 23, 16, 15, 8, 4]);
  });

  it('should reverse an array of strings', () => {
    const arr = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];
    const reversedArr = squareBrackets.reverse(arr);
    expect(reversedArr).to.deep.equal(["elit", "adipiscing", "consectetur", "amet", "sit", "dolor", "ipsum", "lorem"]);
  });

  it('should reverse an array of arrays', () => {
    const arr = [[1, 3], [1, 6], ["strings", "are", "friends"], ['yup', 'dup']];
    const reversedArr = squareBrackets.reverse(arr);
    expect(reversedArr).to.deep.equal([['yup', 'dup'], ["strings", "are", "friends"], [1, 6], [1, 3]]);
  });

  it('should reverse an array of objects', () => {
    const arr = [
      { name: 'Will', age: '47' },
      { species: 'Cat', food: 'milk' },
      { species: 'Cow', food: 'grass' },
      { id: '839012', fullName: 'Jason Voorhees', numKilled: 86 },
      { name: 'coffee', rating: 10, primaryUse: 'giving meaning to life' },
      { language: 'Javascript', users: 'many', typeSystem: 'probably not' }
    ];
    const reversedArr = squareBrackets.reverse(arr);
    expect(reversedArr).to.deep.equal([
      { language: 'Javascript', users: 'many', typeSystem: 'probably not' },
      { name: 'coffee', rating: 10, primaryUse: 'giving meaning to life' },
      { id: '839012', fullName: 'Jason Voorhees', numKilled: 86 },
      { species: 'Cow', food: 'grass' },
      { species: 'Cat', food: 'milk' },
      { name: 'Will', age: '47' },
    ]);
  });

  it('should throw an error when given a non-array', () => {
    const notAnArray = 'a string instead';
    expect(squareBrackets.reverse.bind(squareBrackets, notAnArray)).to.throw(`invalid input: expected arr to be an array, but it is of type 'string'`);
  });

});