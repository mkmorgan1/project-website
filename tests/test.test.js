const testFunc = (a, b) => {
  return a + b;
}

test('adds two numbers', () => {
  expect(testFunc(1, 2)).toBe(3);
});