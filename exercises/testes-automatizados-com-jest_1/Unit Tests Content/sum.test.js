const { test, describe, expect } = require('@jest/globals');
const sum = require('./sum');

describe('Função sum', () => {
  test('Retorno da função', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0 ,0)).toBe(0);
  })
  test('Identifica erro', () => {
    expect(() => { sum(4,'5') }).toThrow();
    expect(() => { sum(4, '5') }).toThrow('parameters must be numbers');
  })
})