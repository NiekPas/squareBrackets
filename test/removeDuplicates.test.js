const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('removeDuplicates function test', () => {

  it('should remove duplicate strings', () => {
    const arr = ['hello', 'is', 'it', 'me', 'you\'re', 'it', 'looking', 'for', 'for'];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal(['hello', 'is', 'it', 'me', 'you\'re', 'looking', 'for']);
  });

  it('should remove duplicate numbers', () => {
    const arr = [1, 1, 2, 3, 4, 4, 25, 432];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal([1, 2, 3, 4, 25, 432]);
  });

  it('should remove duplicate strings and numbers', () => {
    const arr = [4, 'hello', 'is', 'it', 'me', 'you\'re', 'it', 'looking', 'for', 4];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal([4, 'hello', 'is', 'it', 'me', 'you\'re', 'looking', 'for']);
  });

  it('should remove duplicate undefined elements', () => {
    const arr = ["numbers:", 4, 15, 8, 42, undefined, 23, undefined, 16];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal(["numbers:", 4, 15, 8, 42, undefined, 23, 16]);
  });

  it('should remove duplicate null elements', () => {
    const arr = [4, 15, null, 8, "hello world", null, 42, null, 23, 16];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal([4, 15, null, 8, "hello world", 42, 23, 16]);
  });

  it('should remove both duplicate undefined and duplicate null elements', () => {
    const arr = [4, null, 15, null, 8, undefined, 42, undefined, 23, "hello"];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal([4, null, 15, 8, undefined, 42, 23, "hello"]);
  });

  it('should not treat undefined and null as equal', () => {
    const arr = [4, null, 15, 8, undefined, 42, 23, "hello"];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal([4, null, 15, 8, undefined, 42, 23, "hello"]);
  });

  it('should remove duplicates from an array with empty arrays', () => {
    const arr = [4, 15, [], 8, 42, [], 23, 16];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal([4, 15, [], 8, 42, 23, 16]);
  });

  it('should remove duplicates from an array with empty objects', () => {
    const arr = [4, 15, 8, {}, {}, 42, 23, 16];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal([4, 15, 8, {}, 42, 23, 16]);
  });

  it('should remove duplicates from an array with duplicate arrays', () => {
    const arr = [4, 15, [1, 2], 8, 42, [1, 2], 23, 16];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal([4, 15, [1, 2], 8, 42, 23, 16]);
  });

  it('should remove duplicates from an array with duplicate objects', () => {
    const arr = [4, 15, 8, {id: 1234, name: 'John'}, {id: 1234, name: 'John'}, 42, 23, 16];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal([4, 15, 8, {id: 1234, name: 'John'}, 42, 23, 16]);
  });

  it('should return an array with a single element when given an array of duplicates only', () => {
    const arr = [1, 1, 1, 1, 1];
    const arrWithoutDuplicates = squareBrackets.removeDuplicates(arr);
    expect(arrWithoutDuplicates).to.deep.equal([1]);
  });

  it('should throw an error when given a non-array', () => {
    const notAnArray = 'a string instead';
    expect(squareBrackets.removeDuplicates.bind(squareBrackets, notAnArray)).to.throw(`invalid input: expected arr to be an array, but it is of type 'string'`);
  });

});