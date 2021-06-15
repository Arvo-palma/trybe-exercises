const { expect, describe, test } = require('@jest/globals');
const { encode, decode } = require('./encode&decode');

describe('Função encode', () => {
  test('Confere a conversão', () => {
    expect(encode('Its Leviooosa!')).toBe('Its L2v3444s1!');
  })
  test('Confere se as consoantes se mantém', () => {
    expect(encode('nymphly')).toBe('nymphly');
  })
  test('Confere se o tamanho da string se mantém', () => {
    expect(encode('Paralelepípedo').length).toBe(14);
  })
})
describe('Função decode', () => {
  test('Confere o retorno', () => {
    expect(decode('Its L2v3444s1!')).toBe('Its Leviooosa!');
  })
  test('Confere se as consoantes se mantém', () => {
    expect(decode('nymphly')).toBe('nymphly');
  })
  test('Confere se o tamanho da string se mantém', () => {
    expect(decode('P1r1l2l2píp2d4').length).toBe(14);
  })
})