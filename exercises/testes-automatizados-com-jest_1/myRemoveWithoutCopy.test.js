const { describe, test, expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Função myRemoveWithoutCopy', () => {
  test('Retorno da função', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
  test('Efeito sobre o array passado', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 3);
    expect(arr).toEqual([1, 2, 4]);
  })
})