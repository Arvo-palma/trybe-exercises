const { describe, expect, it } = require('@jest/globals');
const { error } = require('console');
const uppercase = require('./exercise1');

describe('uppercase function', () => {
  it('should transform the letters of a word in uppercase', async () => {
    const capsLock = await uppercase('EuFaleiNormal', (str) => {
      expect(str).toBe('EUFALEINORMAL');
    });
  })
  it('should return in case of error', async () => {
    try {
      const capsLock = await uppercase(4, (str) => {
        expect(str).toBe(error);
      });
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })
})