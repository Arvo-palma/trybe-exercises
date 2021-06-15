const { expect, describe, test } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuss');

describe('Função myFizzBuzz', () => {
  test('Divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  test('Divisível por 5', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  })
  test('Divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  test('Parâmetro não numérico', () => {
    expect(myFizzBuzz()).toBe(false);
  })
})