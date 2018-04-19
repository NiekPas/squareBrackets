const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('split function test', () => {

  it('should split an array of numbers in two', () => {
    const arr = [4, 8, 15, 16, 23, 42];
    const splitArr = squareBrackets.split(arr);
    expect(splitArr).to.deep.equal([[4, 8, 15], [16, 23, 42]]);
  });

  it('should split an array of numbers in three', () => {
    const arr = [4, 8, 15, 16, 23, 42];
    const splitArr = squareBrackets.split(arr, 3);
    expect(splitArr).to.deep.equal([[4, 8], [15, 16], [23, 42]]);
  });

  it('should split an array of strings', () => {
    const arr = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];
    const splitArr = squareBrackets.split(arr);
    expect(splitArr).to.deep.equal([["lorem", "ipsum", "dolor", "sit"], ["amet", "consectetur", "adipiscing", "elit"]]);
  });

  it('should split a prime-length array by trailing', () => {
    const arr = [4, 8, 15, 16, 23, 42, 56];   // 7 elements, can't be split evenly!
    const splitArr = squareBrackets.split(arr, 3);
    expect(splitArr).to.deep.equal([[4, 8], [15, 16], [23, 42, 56]]);
  });

  it('should split an array of arrays', () => {
    const arr = [[1, 2], [1, 5], [5, 7], [8, 19], [23, 59], [289, 19], [1298, 2890], [123890, 321980]];
    const splitArr = squareBrackets.split(arr);
    expect(splitArr).to.deep.equal([[[1, 2], [1, 5], [5, 7], [8, 19]], [[23, 59], [289, 19], [1298, 2890], [123890, 321980]]]);
  });

  it('should split an array of objects', () => {
    const arr = [
      { name: 'Will', age: '47' },
      { species: 'Cat', food: 'milk' },
      { species: 'Cow', food: 'grass' },
      { id: '839012', fullName: 'Jason Voorhees', numKilled: 86 },
      { name: 'coffee', rating: 10, primaryUse: 'giving meaning to life' },
      { language: 'Javascript', users: 'many', typeSystem: 'probably not' }
    ];
    let splitArr = squareBrackets.split(arr);
    expect(splitArr).to.deep.equal(
      [
        [
          { name: 'Will', age: '47' },
          { species: 'Cat', food: 'milk' },
          { species: 'Cow', food: 'grass' }
        ],
        [
          { id: '839012', fullName: 'Jason Voorhees', numKilled: 86 },
          { name: 'coffee', rating: 10, primaryUse: 'giving meaning to life' },
          { language: 'Javascript', users: 'many', typeSystem: 'probably not' }
        ]
      ]
    );
  });

  it('should return an empty array when given one', () => {
    const arr = [];
    const splitArr = squareBrackets.split(arr);
    expect(splitArr).to.deep.equal([]);
  });

  it('should return undefined when given undefined', () => {
    const arr = undefined;
    const splitArr = squareBrackets.split(arr);
    expect(splitArr).to.equal(undefined);
  });

  it('should return null when given null', () => {
    const arr = null;
    const splitArr = squareBrackets.split(arr);
    expect(splitArr).to.equal(null);
  });

  it('should return the original value when given a non-array', () => {
    const arr = "string";
    const splitArr = squareBrackets.split(arr);
    expect(splitArr).to.equal("string");
  });

  it('should return the original value when given an object', () => {
    const arr = undefined;
    const splitArr = squareBrackets.split(arr);
    expect(splitArr).to.equal(undefined);
  });

});