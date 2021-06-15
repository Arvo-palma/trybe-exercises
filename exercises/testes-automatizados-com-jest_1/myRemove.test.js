const { describe, test, expect } = require('@jest/globals');
const myRemove = require('./myRemove');

describe('Função MyRemove',() => {
  test('Retorno da Função', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
  test('Efeito sobre o array passado', () => {
    const arr = [1, 2, 3, 4, 5];
    myRemove(arr, 3);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  })
})