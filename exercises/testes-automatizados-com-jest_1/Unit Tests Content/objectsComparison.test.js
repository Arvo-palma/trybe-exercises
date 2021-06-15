const { describe, test, expect } = require('@jest/globals');
const obj1 = require('./objectsComparison');
const obj2 = require('./objectsComparison');
const obj3 = require('./objectsComparison');

describe('Compara objetos', () => {
  test('Compara obj1 e obj2', () => {
    expect(obj1).toEqual(obj2);
  })
  test('Compara obj1 e obj3', () => {
    expect(obj1).toEqual(obj3);
  })
  test('Compara obj2 e obj3', () => {
    expect(obj2).toEqual(obj3);
  })
})