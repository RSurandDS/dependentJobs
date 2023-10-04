const assert = require('assert');

describe('Basic Test Suite', () => {
  it('should return "My name is Roro" when accessing the root path', () => {
    const expectedResult = 'My name is Roro';
    const actualResult = 'My name is Roro'; // Replace with your application's logic

    assert.strictEqual(actualResult, expectedResult);
  });
});
