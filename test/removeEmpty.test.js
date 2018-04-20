const expect = require('chai').expect;
const squareBrackets = require('../dist/index');

describe('removeEmpty function test', () => {

  it('should compress an array with undefined elements', () => {
    const arr = ["numbers:", 4, 15, 8, 42, undefined, 23, 16];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal(["numbers:", 4, 15, 8, 42, 23, 16]);
  });

  it('should compress an array with null elements', () => {
    const arr = [4, 15, null, 8, "hello world", 42, 23, 16];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal([4, 15, 8, "hello world", 42, 23, 16]);
  });

  it('should compress an array with both undefined and null elements', () => {
    const arr = [4, null, 15, 8, undefined, 42, 23, "hello"];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal([4, 15, 8, 42, 23, "hello"]);
  });

  it('should compress an array with several null elements in a row', () => {
    const arr = [4, 15, null, null, null, null, null, 8, "hello world", 42, 23, 16];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal([4, 15, 8, "hello world", 42, 23, 16]);
  });

  it('should compress an array with empty strings', () => {
    const arr = [4, 15, 8, "", 42, 23, 16];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal([4, 15, 8, 42, 23, 16]);
  });

  it('should compress an array with whitespace-only strings', () => {
    const arr = [4, 15, 8, "      \n ", 42, 23, 16];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal([4, 15, 8, 42, 23, 16]);
  });

  it('should compress an array with empty arrays', () => {
    const arr = [4, 15, [], 8, 42, [], 23, 16];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal([4, 15, 8, 42, 23, 16]);
  });

  it('should compress an array with empty objects', () => {
    const arr = [4, 15, 8, {}, {}, 42, 23, 16];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal([4, 15, 8, 42, 23, 16]);
  });

  it('should not remove nonempty arrays', () => {
    const arr = [4, 15, ["hello", "world"], 8, 42, [1, 4, 6], 23, 16];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal(arr);
  });

  it('should not remove nonempty objects', () => {
    const arr = [4, {student: true, id: 8439102, name: 'John Daniels'}, 15, {}, 8, {name: 'Frank', trait: 'Frank'}, 42, 23, "", 16];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal([4, {student: true, id: 8439102, name: 'John Daniels'}, 15, 8, {name: 'Frank', trait: 'Frank'}, 42, 23, 16]);
  });

  it('should return an empty array when given an array of compressible values only', () => {
    const arr = [undefined, null, '', , {}, []];
    const arrWithoutEmptyValues = squareBrackets.removeEmpty(arr);
    expect(arrWithoutEmptyValues).to.deep.equal([]);
  });

  it('should return the original value when it is not an array', () => {
    const notAnArray = 'a string instead';
    const returnValue = squareBrackets.removeEmpty(notAnArray);
    expect(returnValue).to.equal(notAnArray);
  });

});